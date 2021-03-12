import React, { useState, useEffect } from 'react';

const Option = ({ list }) => {
  return list.map((elm) => <option key={Math.random()}>{elm.ten}</option>);
};

const DropdownBar = ({ name, data }) => {
  const [nameArray, setNameArray] = useState();

  useEffect(async () => {
    const arr = await data();
    setNameArray(arr);
  }, []);

  return (
    <div className={name}>
      <select>{nameArray ? <Option list={nameArray} /> : null}</select>
    </div>
  );
};

export default DropdownBar;
