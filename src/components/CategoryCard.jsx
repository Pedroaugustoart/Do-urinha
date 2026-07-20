import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, image, bgColor, onClick, isActive }) => {
  return (
    <div 
      className={`category-card hover-scale ${isActive ? 'active' : ''}`} 
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <div className="category-image-container">
        <img src={image} alt={title} className="category-image" />
      </div>
      <h3 className="category-title">{title}</h3>
      <button className="btn-primary category-btn hover-scale">VER PRODUTOS</button>
    </div>
  );
};

export default CategoryCard;
