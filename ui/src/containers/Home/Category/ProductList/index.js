import React from 'react';
import './style.scss';

const ProductList = ({ tenDanhMuc }) => {
  return (
    <div>
      <h1>{tenDanhMuc}</h1>
      <div className="box">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              type="submit"
            >
              <span>Dropdown button</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Dropdown item
              </a>
              <a className="dropdown-item">Other dropdown item</a>
              <a href="#" className="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                With a divider
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
