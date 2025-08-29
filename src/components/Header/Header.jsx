import React, { useState } from 'react';
import './header.scss';
import siteLogo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <Link to="/">
            <img className="site-logo-img" src={siteLogo} alt="site logo :IMMU " />
          </Link>

          {/* Fullscreen nav overlay */}
          <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                  {t('home-h')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
                  {t('about-h')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" className="nav-link" onClick={() => setMenuOpen(false)}>
                  {t('article-h')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link" onClick={() => setMenuOpen(false)}>
                  {t('new-h')}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
                  {t('contact-h')}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
          {/* Hamburger button - faqat mobil */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
