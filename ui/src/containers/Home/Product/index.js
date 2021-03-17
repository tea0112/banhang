import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      <div className="box">
        <article className="media">
          <div className="media-left">
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
          <div className="media-content">
            <div className="content">
              <p>
                <h3>{product.ten}</h3>
                Giá <i>{product.gia} ₫</i>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Product;
