import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import _, { set } from 'lodash';
import Card from './Card';
import './style.scss';

const Section = ({ categories, action }) => {
  const [page, setPage] = useState(1);
  const [cardPage, setCardPage] = useState([]);

  useEffect(() => {
    if (action.type === 'paginate' && categories.length === 1) {
      setPage(action.page);
    }
  }, [action]);

  const handleMore = (e) => {
    e.preventDefault();
    const newPage = page + 1;
    setPage(newPage);
    const cardArr = cardPage;
    cardArr.push(
      <Card
        ownCategory={categories[0].ten}
        urlCategory={categories[0].url}
        action={{ ...action, page: newPage }}
      />
    );
    setCardPage(cardArr);
  };

  const category = categories.map((elm) => {
    return (
      <div className="section" key={elm.ten}>
        <div className="message-header">{elm.ten}</div>
        <div className="box">
          <div className="my-card">
            <Card
              ownCategory={elm.ten}
              urlCategory={elm.url}
              action={{ ...action, page }}
            />
            <div className="my-card">{cardPage}</div>
          </div>
          <div className="my-button">
            {action.type === 'newest' ? (
              <Link className="button is-link" to={elm.url}>
                <p>Xem Thêm 😏</p>
              </Link>
            ) : (
              <button
                className="button is-link"
                onClick={(e) => handleMore(e)}
                type="button"
              >
                <p>Xem Thêm 😏</p>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  });

  return <>{category}</>;
};
export default Section;
