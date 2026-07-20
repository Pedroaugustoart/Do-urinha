import React from 'react';
import CategoryCard from './CategoryCard';
import './CategoryList.css';

import cupcake1 from '../assets/cupcake1.jpg';
import cupcake2 from '../assets/cupcake2.jpg';
import macarons from '../assets/macarons.jpg';
import cookies from '../assets/cookies.jpg';

const categories = [
  { id: 1, title: 'CUPCAKES', image: cupcake1, bgColor: '#F4EBE3' },
  { id: 2, title: 'CUPCAKES', image: cupcake2, bgColor: '#D4E2D5' },
  { id: 3, title: 'MACARONS', image: macarons, bgColor: '#F3F4ED' },
  { id: 4, title: 'COOKIES', image: cookies, bgColor: '#F6D2D6' },
];

const CategoryList = () => {
  return (
    <section className="category-section">
      <div className="container">
        <div className="category-scroll-container">
          <div className="category-list">
            {categories.map(cat => (
              <CategoryCard 
                key={cat.id}
                title={cat.title}
                image={cat.image}
                bgColor={cat.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
