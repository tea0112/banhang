import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.scss';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(async () => {
    await axios.get(`/api/v1/sanpham?_id=${params.id}`).then((res) => {
      setProduct(res.data[0]);
    });
  }, []);

  return (
    <div className="product">
      <nav
        className="breadcrumb has-succeeds-separator"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <Link to="#" style={{ textTransform: 'capitalize' }}>
              {product ? product.thuocDanhMuc : null}
            </Link>
          </li>
          <li>
            <a href="#">{product ? product.ten : null}</a>
          </li>
        </ul>
      </nav>
      <div className="box">
        <article className="media">
          <div className="box media-left">
            <figure className="is-square">
              <img
                width="300"
                height="300"
                src={
                  product ? `data:image/png;base64, ${product.thumbnail}` : null
                }
                alt="product"
              />
            </figure>
          </div>
          <div className="box">
            <div className="content">
              <h3>{product ? product.ten : null}</h3>
              Giá <i>{product ? product.gia : null} ₫</i>
              <div className="add-to-card">
                <button className="button" type="button">
                  Thêm vào rọ
                </button>
              </div>
              <div className="buy-now">
                <button className="button is-black" type="button">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
          <div>{product ? product.moTa : null}</div>
        </article>
      </div>
    </div>
  );
};

export default Product;
