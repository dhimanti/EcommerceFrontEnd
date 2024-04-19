import React from 'react';

const ClothingCards = () => {
  // Inline CSS
  const styles = `
    body {
        padding-top: 56px;
    }

    /* card */
    .dress-card-img-top {
        width: 100%;
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

    .surprise-bubble:hover {
        border-radius: 999rem;
        padding: 1rem;
        width: 26%;
        height: 30px;
        background: #DB2763;
        color: white;
        -webkit-transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.55s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .surprise-bubble:hover a {
        opacity: 1;
        -webkit-transition-delay: 2s;
        /* Safari */
        transition-delay: 2s;
        -webkit-transition: opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: opacity 1s cubic-bezier(0.645, 0.045, 0.355, 1);
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

  return (
    <div className="container">
      {/* Include inline styles */}
      <style>{styles}</style>
      {/* Include Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      {/* Include Font Awesome CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      {/* Clothing Cards JSX */}
      <h1>Clothing Cards made with pure bootstrap and jquery</h1>
      <br />
      <br />
      <div className="row">
        <div className="col-md-3">
          <div className="dress-card">
            <div className="dress-card-head">
              <img
                className="dress-card-img-top"
                src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg"
                alt=""
              />
              <div className="surprise-bubble">
                <span className="dress-card-heart">
                  <i className="fas fa-heart"></i>
                </span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">
                  <span>More</span>
                </a>
              </div>
            </div>
            <div className="dress-card-body">
              <h4 className="dress-card-title">Harpa</h4>
              <p className="dress-card-para">Womans printed clothing</p>
              <p className="dress-card-para">
                <span className="dress-card-price">Rs.839 &ensp;</span>
                <span className="dress-card-crossed">Rs.2099</span>
                <span className="dress-card-off">&ensp;(60% OFF)</span>
              </p>
              <div className="row">
                <div className="col-md-6 card-button">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="">
                    <div className="card-button-inner bag-button">Add to Bag</div>
                  </a>
                </div>
                <div className="col-md-6 card-button">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="">
                    <div className="card-button-inner wish-button">Wishlist</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default ClothingCards;
