import React from 'react';
import { Navbar, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faWindowClose,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.scss';
import useCategory from './useCategory';
import ItemCatagory from '../../components/ItemCatagory';

const Header = () => {
  const categories = useCategory();

  const handleClose = (e) => {
    e.preventDefault();
    document.getElementsByClassName('sidebar-header')[0].style.display = 'none';
    document.getElementsByClassName('overlay-sidebar')[0].style.display =
      'none';
  };

  const handleOpenSideBar = (e) => {
    e.preventDefault();
    document.getElementsByClassName('sidebar-header')[0].style.display =
      'block';
    document.getElementsByClassName('overlay-sidebar')[0].style.display =
      'block';
  };

  return (
    <>
      <Navbar
        fixed="top"
        className="navbar navbar-expand-lg navbar-dark bg-primary"
      >
        <div className="header">
          <div>
            <Navbar.Brand>NongSan</Navbar.Brand>
          </div>
          <div className="search-header">
            <Form>
              <Form.Control type="text" placeholder="Search" />
            </Form>
          </div>
          <div>
            <a
              href="#"
              onClick={(e) => handleOpenSideBar(e)}
              className="faUser"
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
          <div>
            <a
              href="#"
              onClick={(e) => handleOpenSideBar(e)}
              className="faShoppingCart"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
          <div>
            <a
              href="#"
              onClick={(e) => handleOpenSideBar(e)}
              className="faBars"
            >
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
          <div className="overlay-sidebar">
            <a
              href="#"
              onClick={(e) => {
                handleClose(e);
              }}
            >
              {}
            </a>
          </div>
          <div className="sidebar-header">
            <div className="close-sidebar">
              <a
                href="#"
                onClick={(e) => {
                  handleClose(e);
                }}
              >
                <FontAwesomeIcon
                  icon={faWindowClose}
                  className="fa-window-close-header"
                />
              </a>
            </div>
            <ul>
              <ItemCatagory categories={categories} />
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
