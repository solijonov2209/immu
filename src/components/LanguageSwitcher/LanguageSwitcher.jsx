import React, { useState } from 'react';
import './languageSwitcher.scss';
import arrowDown from '../../assets/images/keyboard_arrow_down.svg';
import i18n from '../../i18n';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: 'en',
    flag: 'https://flagcdn.com/gb.svg',
  });

  const languages = [
    { code: 'uz', flag: 'https://flagcdn.com/uz.svg' },
    { code: 'en', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'ru', flag: 'https://flagcdn.com/ru.svg' },
  ];

  const handleChange = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);

    i18n.changeLanguage(lang.code); // faqat code beramiz
    console.log('Til tanlandi:', lang.code);
  };

  return (
    <div className="lang-switcher">
      <button className="lang-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedLang.flag} alt={selectedLang.code} />
        <span className="lang-code">{selectedLang.code.toUpperCase()}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <img src={arrowDown} alt="" />
        </span>
      </button>

      {isOpen && (
        <ul className="lang-dropdown">
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => handleChange(lang)}>
              <img src={lang.flag} alt={lang.code} />
              <span>{lang.code.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
