import React, { useState } from 'react';
import './style.scss';

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product box">
      <input type="checkbox" />
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="card-image">
              <figure className="is-4by3">
                <img
                  width="100"
                  height="100"
                  src={`data:image/png;base64, ${product.thumbnail}`}
                  alt="Placeholder"
                />
              </figure>
            </div>
          </div>
          <div className="right">
            <div>
              <b>{product.ten}</b>
            </div>
            <div>
              Giá <i>{product ? product.gia : null} ₫</i>
            </div>
            <div className="quantity">
              <button
                className="button"
                type="button"
                onClick={() => setQuantity((prevState) => prevState - 1)}
              >
                -
              </button>
              <input className="input is-info" type="text" value={quantity} />
              <button
                className="button"
                type="button"
                onClick={() => setQuantity((prevState) => prevState + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
