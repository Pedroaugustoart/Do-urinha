import React from 'react';
import './HeroSection.css';
import heroImg from '../assets/hero.jpg';
import Header from './Header';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/Bolo.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content-container">
        <div className="hero-text-content">
          <span className="hero-subtitle">BOLO DE NINHO</span>
          <h1 className="hero-title">O MAIS<br/>PEDIDO</h1>
          <button className="btn-outline hero-btn hover-scale">
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
