import React from 'react';
import NewsSlider from './NewsSlider';
import NewsList from './NewsList';
import './Newscard.scss';
const HomeNews = () => {
  return (
    <section>
      <div className="container">
        <h2 className="homeNews-title">Yangiliklar</h2>
        <div className="app-content">
          <NewsSlider />
          <NewsList />
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
