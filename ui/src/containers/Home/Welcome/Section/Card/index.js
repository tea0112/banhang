import React from 'react';
import './style.scss';

const Card = () => {
  return (
    <div className="card" style={{ display: 'inline-block' }}>
      <div className="card-image">
        <figure className="image">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Product"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="">
            <b>Tên sản phẩm</b>
          </p>
          <p className="">100000</p>
          <button className="button is-success" type="button">
            Thêm Giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
