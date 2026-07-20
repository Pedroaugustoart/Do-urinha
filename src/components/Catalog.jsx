import React, { useState } from 'react';
import { catalog } from '../data/catalog';
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import './Catalog.css';

import cupcake1 from '../assets/cupcake1.jpg';
import cupcake2 from '../assets/cupcake2.jpg';
import macarons from '../assets/macarons.jpg';
import cookies from '../assets/cookies.jpg';

const categoryImages = [cupcake1, cupcake2, macarons, cookies];
const categoryColors = ['#F4EBE3', '#D4E2D5', '#F3F4ED', '#F6D2D6'];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState(catalog[0].category);
  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth - 10;
      if (isAtEnd) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  const activeData = catalog.find(cat => cat.category === activeCategory);

  return (
    <section className="catalog-section" id="shop">
      <div className="container">
        
        <div className="catalog-header">
          <h2 className="section-title">Nosso Cardápio</h2>
          
          <div className="category-tabs-wrapper">
            <button className="scroll-arrow left" onClick={scrollLeft} aria-label="Rolar para esquerda">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            
            <div className="category-tabs-container" ref={scrollRef}>
              <div className="category-tabs">
                {catalog.map((cat, index) => (
                  <CategoryCard
                    key={cat.category}
                    title={cat.category}
                    image={categoryImages[index % categoryImages.length]}
                    bgColor={categoryColors[index % categoryColors.length]}
                    isActive={activeCategory === cat.category}
                    onClick={() => setActiveCategory(cat.category)}
                  />
                ))}
              </div>
            </div>

            <button className="scroll-arrow right" onClick={scrollRight} aria-label="Rolar para direita">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="catalog-content">
          <div className="category-info">
            <h3 className="category-name">{activeData.category}</h3>
            {activeData.description && (
              <p className="category-desc">{activeData.description}</p>
            )}
          </div>

          <div className="products-grid">
            {activeData.items.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Catalog;
