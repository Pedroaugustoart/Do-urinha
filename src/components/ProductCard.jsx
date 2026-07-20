import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className={`product-card ${product.soldOut ? 'sold-out' : ''}`}>
      <div className="product-image-placeholder">
        <span>Colocar uma foto aqui</span>
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        {product.description && <p className="product-desc">{product.description}</p>}
        <div className="product-footer">
          <span className="product-price">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          <button className="btn-primary product-add-btn" disabled={product.soldOut}>
            {product.soldOut ? 'Esgotado' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
