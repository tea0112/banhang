import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAdmin.scss';

const HeaderAdmin = () => {
  const onCloseSidebar = (e) => {
    e.preventDefault();
    document.querySelector('.sidebar').style.display = 'none';
  };

  const onOpenSidebar = (e) => {
    e.preventDefault();
    document.querySelector('.sidebar').style.width = '300px';
    document.querySelector('.sidebar').style.display = 'flex';
  };

  const onToggleUser = (e) => {
    e.preventDefault();
    const subUser = document.querySelector('.sub-user');
    if (subUser.style.display === 'block') subUser.style.display = 'none';
    else subUser.style.display = 'block';
  };

  const onToggleCatagory = (e) => {
    e.preventDefault();
    const subCatagory = document.querySelector('.sub-catagory');
    if (subCatagory.style.display === 'block')
      subCatagory.style.display = 'none';
    else subCatagory.style.display = 'block';
  };

  return (
    <>
      <div className="sidebar">
        <a href="#" className="close-sidebar" onClick={onCloseSidebar}>
          ❌
        </a>
        <div className="user">
          <a href="#" onClick={onToggleUser}>
            Người Dùng
          </a>
          <div className="sub-user">
            <Link to="/admin/user">chỉnh sửa người dùng</Link>
          </div>
        </div>
        <div className="catagory">
          <a href="#" onClick={onToggleCatagory}>
            Danh Mục
          </a>
          <div className="sub-catagory">
            <Link to="/admin/catagory/add">thêm danh mục</Link>
            <Link to="/admin/catagory/update">sửa danh mục</Link>
            <Link to="/admin/catagory/delete">xoá danh mục</Link>
          </div>
        </div>
        <div className="product">
          <a href="#">Sản Phẩm</a>
        </div>
      </div>
      <nav className="nav-admin">
        <a href="" className="open-sidebar" onClick={onOpenSidebar}>
          📃
        </a>
        <Link to="/admin">Admin</Link>
      </nav>
    </>
  );
};

export default HeaderAdmin;
