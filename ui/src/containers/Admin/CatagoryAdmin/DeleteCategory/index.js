import React from 'react';
import './style.scss';
import CategorySuggestion from '../../../../components/Admin/CategorySuggestion';
import useSearch from './useSearch';

const DeleteCategory = () => {
  const [ten, , , setTyping] = useSearch();

  const handleChange = () => {
    const tenInput = document.getElementsByClassName('delete-input')[0].value;
    document.getElementsByClassName('delete-suggestion')[0].style.display =
      'block';
    if (tenInput !== '') {
      setTyping(tenInput);
    }
  };

  const handleChoose = (e, chooseTen) => {
    e.preventDefault();
    console.log('choose run');
    const input = document.getElementsByClassName('delete-input')[0];
    input.value = chooseTen;
    document.getElementsByClassName('delete-suggestion')[0].style.display =
      'none';
  };

  return (
    <div className="delete-category">
      <div>Nhập tên danh mục:</div>
      <div>
        <form>
          <input
            type="text"
            autoComplete="off"
            className="delete-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <CategorySuggestion categories={ten} choose={handleChoose} />
      </div>
    </div>
  );
};

export default DeleteCategory;
