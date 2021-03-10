import React from 'react';

const Add = () => {
  return (
    <div className="product">
      <div className="add-product">
        <form>
          <div>Nhập tên:</div>
          <input type="text" />
          <div>Nhập giá:</div>
          <input type="text" />
          <div>Tải lên ảnh:</div>
          <input type="file" />
          <div>Mô tả:</div>
          <input type="text" />
          <div>
            <input type="submit" value="Thêm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
