import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../Section';
import './style.scss';

const Welcome = () => {
  const categories = useSelector((state) => state.category.categories);
  return (
    <div className="welcome">
      <Section
        categories={categories || categories}
        action={{ type: 'newest', limit: 6 }}
      />
    </div>
  );
};

export default Welcome;
