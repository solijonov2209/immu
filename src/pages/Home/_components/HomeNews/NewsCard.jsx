// NewsCard.jsx
import React from 'react';
import onRight from '../../../../assets/images/Vector-right-white.svg';
import onLeft from '../../../../assets/images/Vector-left-white.svg';
import './Newscard.scss';
import calendar from '../../../../assets/images/Calendar.svg';
import calendarBlack from '../../../../assets/images/Calendar-black.svg';
import viewBlack from '../../../../assets/images/view-black.svg';

const NewsCard = ({ id, title, date, image, compact, onPrev, onNext }) => {
  return (
    <div
      className={`news-card ${compact ? 'compact' : 'full'}`}
      style={!compact ? { backgroundImage: `url(${image})` } : {}}
    >
      {!compact && (
        <div className="news-card__overlay">
          <h3 className="news-card__title">{title}</h3>
          <div className="news-card__footer">
            <span className="news-card__date">
              <img src={calendar} width={'20px'} alt="calendar icon " />
              {date}
            </span>
            <div className="news-slider__controls">
              <button onClick={onPrev}>
                <img src={onLeft} alt="" />
              </button>
              <button onClick={onNext}>
                <img src={onRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}

      {compact && (
        <>
          <img src={image} alt="news" className="news-card__image" />
          <div className="news-card__content">
            <h3 className="news-card__title">{title}</h3>
            <div className="news-card__footer">
              <span className="news-card__date">
                <img src={calendarBlack} width={'16px'} alt="calendar icon " /> {date}
              </span>
              <span className="news-card__views">
                <img src={viewBlack} width={'16px'} alt="calendar icon " />
                100K
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCard;
