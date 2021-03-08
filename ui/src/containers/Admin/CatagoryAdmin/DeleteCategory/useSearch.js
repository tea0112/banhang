import axios from 'axios';
import { useState, useEffect } from 'react';

const getCategories = (tenCatagory, setTen) => {
  const url = '/api/v1/danhmuc/search';
  const token = localStorage.getItem('token');
  let ten;
  if (tenCatagory) {
    ten = tenCatagory.toLowerCase();
  }
  const headers = {
    Authorization: token,
  };
  const body = {
    ten,
  };

  axios.post(url, body, { headers }).then((res) => setTen(res.data));
};

const userSearch = () => {
  const [ten, setTen] = useState();
  const [typing, setTyping] = useState();

  useEffect(() => {
    if (typing) getCategories(typing, setTen);
  }, [typing]);

  return [ten, setTen, typing, setTyping];
};

export default userSearch;
