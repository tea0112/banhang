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
import useCatagory from './useCatagory';
import ItemCatagory from '../../components/ItemCatagory';

const Header = () => {
  const catagories = useCatagory();

  const onShowCatagory = (e) => {
    e.preventDefault();
    document.getElementById('dropdown').classList.toggle('show-catagory');
  };

  return (
    <nav>
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
      <div className="catagory">
        <span>
          <a
            href="/#"
            className="main-catagory"
            onClick={onShowCatagory}
            onKeyDown={null}
          >
            <FontAwesomeIcon icon={faEllipsisV} /> Danh mục
          </a>
          <ul className="dropdown" id="dropdown">
            <ItemCatagory catagories={catagories} />
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default Header;
