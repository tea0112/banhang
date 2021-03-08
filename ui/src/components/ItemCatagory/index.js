import React from 'react';
import { Link } from 'react-router-dom';

const ItemCatagory = ({ categories }) => {
  const onToggleCategory = () => {
    document.getElementById('dropdown').classList.toggle('show-category');
  };
  if (categories)
    return categories.map((element) => {
      const url = `/danh-muc/${element.url}`;
      return (
        <li key={Math.random()}>
          <Link to={url} onClick={onToggleCategory}>
            {element.ten}
          </Link>
        </li>
      );
    });
  return null;
};

export default ItemCatagory;
