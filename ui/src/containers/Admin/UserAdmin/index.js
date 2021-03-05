import axios from 'axios';
import React from 'react';
import useSearch from './useSearch';
import './UserAdmin.scss';

const getEmailList = async (email, setEmail) => {
  const url = `/api/v1/nguoidung/search?email=${email}`;
  const headers = {
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.ZHVjdGhhaWRldkBnbWFpbC5jb20.ypDuZ7U2-yiYZWycLfk1PRIVXXJcnoR_9lf5t2s4yfk',
  };
  await axios.get(url, { headers }).then((res) => {
    console.log(res.data);
    setEmail(res.data);
  });
};

const UserAdmin = () => {
  const [email, setEmail] = useSearch();
  const handleInputChange = () => {
    const typing = document.querySelector('#typing').value;
    if (typing !== '') {
      getEmailList(typing, setEmail);
    } else setEmail(undefined);
    return email;
  };

  return (
    <div className="user-container">
      <div>Nhập Email:</div>
      <div>
        <form>
          <input type="text" id="typing" onChange={handleInputChange} />
        </form>
      </div>
    </div>
  );
};

export default UserAdmin;
