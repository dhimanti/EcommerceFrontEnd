import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Navbar from './Navbar';

const Wishlist = () => {

    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [userId, setUserId] = useState(null);
    const [isHeartFilled, setIsHeartFilled] = useState(Array(products.length).fill(false));

    const styles = `
    // body {
    //     padding-top: 56px;
    // }

    /* card */
    .dress-card-img-top {
      width: 100%; /* Set a fixed width */
      height: 350px; /* Set a fixed height */
      object-fit: cover; /* Ensure the image covers the entire space */
      border-radius: 7px 7px 0 0;
    }

    .dress-card-body {
        padding: 1rem;
        background: #fff;
        border-radius: 0 0 7px 7px;
    }

    .dress-card-title {
        line-height: 0.5rem;
    }

    .dress-card-crossed {
        text-decoration: line-through;
    }

    .dress-card-price {
        font-size: 1rem;
        font-weight: bold;
    }

    .dress-card-off {
        color: #E06C9F;
    }

    .dress-card-para {
        margin-bottom: 0.2rem;
        font-size: 1.0rem;
        margin-bottom: 0rem;
    }

    .dress-card {
        border-radius: 14px;
    }

    .dress-card-heart {
        font-size: 1em;
        color: #DB2763;
        margin: 4.5px;
        position: absolute;
        left: 4px;
        top: 0px;

    }

    .surprise-bubble {
        position: absolute;
        bottom: 12rem;
        right: 2rem;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background: #fff;
        padding: 1rem;
        color: white;
        -webkit-transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .surprise-bubble a {
        font-size: 0.65em;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: white;
        font-family: arial;
        text-decoration: none;
        position: absolute;
        top: 9px;
        left: 20px;
        opacity: 0;
        -webkit-transition-delay: 2s;
        /* Safari */
        transition-delay: 2s;
        -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .card-button {
        text-align: center;
        text-transform: uppercase;
        font-size: 15px;
        padding: 9px;
    }

    .card-button a {
        text-decoration: none;
    }

    .card-button-inner {
      width:110px;
      height : 45px;
        padding: 10px;
        border-radius: 3px;
    }

    .bag-button {
        background: #E06C9F;
        color: white;
    }

    .bag-button:hover {
        background: #e299b9;
    }

    .wish-button {
        border: 1px solid #E06C9F;
        color: #E06C9F;
    }

    .wish-button:hover {
        background: #f5f5f5;
        color: #E06C9F;
    }
  `;

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const data = jwtDecode(token);
            // console.log(data);
            setUserId(data.userId);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:4000/wishlist/showProduct/${userId}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data.products);
                    setWishlistProducts(data.products[0].products);
                })
                .catch(error => console.error('Error fetching products:', error));
        }
    }, [userId]);
    // console.log("wishlistProducts", wishlistProducts);
    // console.log("wishlistProducts", wishlistProducts[0]);

    useEffect(() => {
        wishlistProducts.forEach(productId => {
            // console.log("id : " , productId);
            if(productId) {
                // console.log("id : " , productId);
                fetch(`http://localhost:4000/product/${productId}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.product[0]);
                    setProducts(prevProducts => [...prevProducts, data.product[0]]);
                    // products.push(data);
                })
                .catch(error => {
                    console.log("Product Fetching error is : ",error);
                })
            }
        })
    }, [wishlistProducts]);

    const toggleHeart = (index, id) => {
        setIsHeartFilled(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            if (newState[index]) {
                console.log("post");

                fetch('http://localhost:4000/wishlist/addProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ productId: id, userId }),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("response for post :", data);
                    })
                    .catch(error => {
                        console.log("Error : ", error);
                    })
            } else {
                console.log("delete");
                console.log(userId);
                console.log(id);

                fetch('http://localhost:4000/wishlist/removeProduct', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ productId: id, userId }),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("response for delete :", data);
                    })
                    .catch(error => {
                        console.log("Error : ", error);
                    })
            }
            return newState;
        });
    };

    return (
        <>
        <Navbar />
        <div className="container" style={{ maxWidth: "80%" }}>
            <style>{styles}</style>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="row">
                {products.map((products, index) => (
                    <div key={index} className="col-md-3">
                        <div className="dress-card">
                            <div className="dress-card-head">
                                <img className="dress-card-img-top" src={products.image} alt="" />
                                <div className="surprise-bubble">
                                    <div>
                                        <span className="dress-card-heart" onClick={() => toggleHeart(index, products._id)}>
                                            {isHeartFilled[index] ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="dress-card-body">
                                <h4 className="dress-card-title">{products.name}</h4>
                                <p className="dress-card-para">
                                    {products.discount ? (
                                        <>
                                            <span className="dress-card-price">🤑🤑 Rs. {products.price - (products.price * parseFloat(products.discount) / 100).toFixed(2)} &ensp;</span>
                                            <span className="dress-card-crossed">{products.price}</span>
                                            <span className="dress-card-off">&ensp;({products.discount} OFF)</span>
                                        </>
                                    ) :
                                        <span className="dress-card-price">🤑🤑 Rs. {products.price} &ensp;</span>
                                    }
                                </p>
                                <p className="dress-card-para">{products.description}, {products.rating}</p>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </div>
        </>
    );
};

export default Wishlist;
