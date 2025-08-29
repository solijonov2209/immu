// NewsSlider.jsx
import React, { useState } from 'react';
import NewsCard from './NewsCard';
import newsData from './newsData';
import './Newscard.scss';

const NewsSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  return (
    <div className="news-slider">
      <NewsCard {...newsData[index]} compact={false} onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
};

export default NewsSlider;
