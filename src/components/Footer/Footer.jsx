import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.contact}>
            <div className={styles.item}>
              <FaPhoneAlt />{' '}
              <a href="tel:0800-120-55 55" target="__blank">
                0800-120-55 55
              </a>
            </div>
            <div className={styles.item}>
              <FaEnvelope />{' '}
              <a href="mailto:info@immuuz.com" target="__blank">
                info@immuuz.com
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <ul className={styles.menu}>
            <li>
              <Link to={'/'}>{t('home-h')}</Link>
            </li>
            <li>
              <Link to="/about">{t('about-h')}</Link>{' '}
            </li>
            <li>
              <Link to="/articles">{t('article-h')}</Link>
            </li>
            <li>
              <Link to="news">{t('new-h')}</Link>
            </li>
            <li>
              <Link to="contact">{t('contact-h')}</Link>
            </li>
          </ul>

          <div className={styles.socials}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
