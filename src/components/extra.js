import React from 'react';
// import './css/product.css';

const ProductCard = ({ imageSrc, SKUs, desc, name, rating, price, discount }) => {
  const handleSizeClick = (event) => {
    const sizes = document.querySelectorAll('.size');
    sizes.forEach((size) => size.classList.remove('focus'));
    event.target.classList.add('focus');
  };

  return (
    <>
    <div className="container">
      <div className="images">
        <img src={imageSrc}  alt="Product" style={{ height: "200px" }}/>
      </div>
      <div className="slideshow-buttons">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
      </div>
      <p className="pick">choose size</p>
      <div className="sizes">
        <div className="size" onClick={handleSizeClick}>5</div>
        <div className="size" onClick={handleSizeClick}>6</div>
        <div className="size" onClick={handleSizeClick}>7</div>
        <div className="size" onClick={handleSizeClick}>8</div>
        <div className="size" onClick={handleSizeClick}>9</div>
        <div className="size" onClick={handleSizeClick}>10</div>
        <div className="size" onClick={handleSizeClick}>11</div>
        <div className="size" onClick={handleSizeClick}>12</div>
      </div>
      <div className="product">
        <p>{name}</p>
        <h1>{name}</h1>
        <h2>Rs. {price}</h2>
        <p className="desc">{desc}</p>
        <h1>Rating : {rating}</h1>
        <h1>Off : {discount}</h1>
        <h1>Stock Left : {SKUs}</h1>



        <div className="buttons">
          <button className="add">Add to Cart</button>
          <button className="like"><span>♥</span></button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
 


