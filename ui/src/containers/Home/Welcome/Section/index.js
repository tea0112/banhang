import React from 'react';
import { Container, Row, Col } from 'react-grid';
import Card from './Card';
import './style.scss';

const Section = () => {
  return (
    <div className="section">
      <div className="message-header">Tên danh mục</div>
      <div className="box">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section;
