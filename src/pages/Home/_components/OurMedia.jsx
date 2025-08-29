import React from 'react';
import Women from '../../../assets/images/Rectangle4.png';
import Man from '../../../assets/images/Rectangle5.png';
import Boy from '../../../assets/images/Rectangle6.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import './OurMedia.scss';

export const OurMedia = () => {
  const { t } = useTranslation();

  const cards = [
    { id: 1, title: t('ourMedia.cards.card1'), imageUrl: Women },
    { id: 2, title: t('ourMedia.cards.card2'), imageUrl: Man },
    { id: 3, title: t('ourMedia.cards.card3'), imageUrl: Boy },
  ];

  return (
    <section className="our-media">
      <div className="container">
        {/* Header */}
        <div className="our-media__header">
          <h2>{t('ourMedia.title')}</h2>
          <p>{t('ourMedia.description')}</p>
        </div>

        {/* Title and arrows */}
        <div className="our-media__top">
          <h3>{t('ourMedia.showcaseTitle')}</h3>
          <div className="arrows">
            <button>
              <FaArrowLeft />
            </button>
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="our-media__grid">
          {cards.map((card) => (
            <div key={card.id} className="our-media__card">
              <img src={card.imageUrl} alt={card.title} />
              <div className="our-media__card-title">{card.title}</div>
              <button className="our-media__card-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
