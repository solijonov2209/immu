import React from 'react';
import newsData from './newsData';
import NewsCard from './NewsCard';
import './Newscard.scss';

const NewsList = () => {
  return (
    <div className="news-list">
      {newsData.map((item, index) => (
        <NewsCard key={item.id} {...item} compact />
      ))}
    </div>
  );
};

export default NewsList;
