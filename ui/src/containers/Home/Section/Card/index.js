import React, { useEffect, useState } from 'react';
import './style.scss';
import _ from 'lodash';
import axios from 'axios';
import { Link } from 'react-router-dom';

const getNewestProduct = (category, limit) => {
  return axios
    .get(
      `/api/v1/sanpham/field/ngayTao/order/-1/limit/${limit}/query?thuocDanhMuc=${category}`
    )
    .then((res) => {
      return res.data;
    });
};

const getPaginatedProduct = (category, page) => {
  return axios.get(`/api/v1/danhmuc/${category}/page/${page}`).then((res) => {
    return res.data;
  });
};

const Card = ({ ownCategory, urlCategory, action }) => {
  const type = ['paginate', 'newest'];

  const [productList, setProductList] = useState();

  useEffect(() => {
    const list = async (categoryName) => {
      if (type.includes(action.type)) {
        if (action.type === 'newest') {
          const myList = await getNewestProduct(categoryName, action.limit);
          setProductList(myList);
        }
        if (action.type === 'paginate') {
          const myList = await getPaginatedProduct(categoryName, action.page);
          setProductList(myList);
        }
      } else setProductList(null);
    };

    list(ownCategory);
  }, []);
  if (action.type === 'newest')
    return (
      <>
        {productList
          ? productList.map((product) => {
              return (
                <Link
                  key={product['_id']}
                  to={`/${urlCategory}/product/${product['_id']}`}
                >
                  <div
                    className="card"
                    key={product['_id']}
                    style={{ display: 'inline-block' }}
                  >
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={`data:image/png;base64, ${product.thumbnail}`}
                          alt="Product"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media-content">
                        <div className="title-product">
                          <b>{product.ten}</b>
                        </div>
                        <p className="">{product.gia}₫</p>
                        <button className="button is-success" type="button">
                          Thêm Giỏ
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : null}
      </>
    );
  return (
    <>
      {productList
        ? productList.docs.map((product) => {
            return (
              <Link
                key={product['_id']}
                to={`/${urlCategory}/product/${product['_id']}`}
              >
                <div
                  className="card"
                  key={product['_id']}
                  style={{ display: 'inline-block' }}
                >
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={`data:image/png;base64, ${product.thumbnail}`}
                        alt="Product"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media-content">
                      <div className="title-product">
                        <b>{product.ten}</b>
                      </div>
                      <p className="">{product.gia}₫</p>
                      <button className="button is-success" type="button">
                        Thêm Giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </>
  );
};

export default Card;
