import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faUser,
  faShoppingCart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.scss';
import useCatagory from './useCategory';
import ItemCatagory from '../../components/ItemCatagory';

const Header = () => {
  const categories = useCatagory();

  const onShowCatagory = (e) => {
    e.preventDefault();
    document.getElementById('dropdown').classList.toggle('show-category');
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/">nong san</Link>
      </div>

      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="user">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <div className="category">
        <span>
          <a
            href="/#"
            className="main-category"
            onClick={onShowCatagory}
            onKeyDown={null}
          >
            <FontAwesomeIcon icon={faEllipsisV} /> Danh mục
          </a>
          <ul className="dropdown" id="dropdown">
            <ItemCatagory categories={categories} />
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default Header;
