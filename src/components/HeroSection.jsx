import React from 'react';
import './HeroSection.css';
import heroImg from '../assets/hero.jpg';
import Header from './Header';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-video-container">
        <iframe
          className="hero-youtube-video"
          src="https://www.youtube.com/embed/NoIARt55jTE?autoplay=1&mute=1&loop=1&playlist=NoIARt55jTE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-click-blocker"></div>
      
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
