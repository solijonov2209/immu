import "./ArticleCards.scss";
import React from 'react'
import calendar from "../../assets/images/Calendar-black.svg"
import view from "../../assets/images/view-black.svg"
import { Link } from "react-router-dom";

const ArticleCards = ({ image, title, description, date, views, buttonText }) => {
  return (
    <div className="article-card">
    <img src={image} alt={title} className="article-card__image" />

    <div className="article-card__content">
      <h3 className="article-card__title">{title}</h3>
      <p className="article-card__desc">{description}</p>

      <div className="article-card__info"> 
      <span className="article-card__date">
    <img src={calendar} alt="calendar" />
    {date}
  </span>
  <span className="article-card__view">
    <img src={view} alt="views" />
    {views} K
  </span>
      </div>

      <Link  to="about-article" className="article-card__link">{buttonText}</Link>
    </div>
  </div>
  )
}

export default ArticleCards
