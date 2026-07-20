import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-title">
            <span className="logo-main footer-logo-main">Doçurinha</span>
            <span className="logo-sub footer-logo-sub tracking-wider">DOCERIA</span>
          </div>
          <p className="footer-description">
            Confeitaria artesanal feita com amor e dedicação para adoçar seus momentos especiais.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>LINKS</h4>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
        </div>
        
        <div className="footer-contact">
          <h4>CONTATO</h4>
          <p>Rua das Flores, 123</p>
          <p>São Paulo, SP</p>
          <p>ola@docurinhadoceria.com.br</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Doçurinha Doceria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
