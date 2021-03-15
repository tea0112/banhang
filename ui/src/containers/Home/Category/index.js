import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

const Category = () => {
  const { tenDanhMuc } = useParams();

  return (
    <div className="category">
      <ProductList tenDanhMuc={tenDanhMuc} />
    </div>
  );
};

export default Category;
