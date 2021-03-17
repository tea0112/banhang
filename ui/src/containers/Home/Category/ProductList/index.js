import React from 'react';
import './style.scss';

const ProductList = ({ tenDanhMuc }) => {
  return (
    <div>
      <div className="box">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              type="submit"
            >
              <span>Sắp xếp theo</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Mới nhất
              </a>
              <a className="dropdown-item">Giá tăng dần</a>
              <a href="#" className="dropdown-item is-active">
                Giá giảm dần
              </a>
              <a href="#" className="dropdown-item">
                Lượt mua
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
