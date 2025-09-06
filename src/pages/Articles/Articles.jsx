import React from 'react';
import ArticleCards from '../../components/Cards/ArticleCards';
import bookImg from "../../assets/images/first-book.png"
import project1 from "../..//assets/images/first-project.png"
import youtubeProject from "../../assets/images/youtube-project.png"
import "./articles.scss"

const cards = [
  {
    id: 1,
    image: bookImg,
    title: "Mening birinchi kitobim ma’rifiy loyiha",
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "12.03.2023",
    views: 100,
    buttonText: "Batafsil ma'lumot"
  },
  {
    id: 2,
    image: project1,
    title: "Ikkinchi kitobim loyihasi",
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "15.04.2023",
    views: 250,
    buttonText: "Batafsil ma'lumot"

  },
  {
    id: 3,
    image: youtubeProject,
    title: "Ikkinchi kitobim loyihasi",
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "15.04.2023",
    views: 250,
    buttonText: "Batafsil ma'lumot"

  }
];

const Articles = () => {
  return <section className='article'>
    <div className="container">
      <h2 className="article__title">Bizning maqolalarimiz</h2>
      <ul className='article__list'>
        {cards.map((item)=>(<li key={item.id}><ArticleCards {...item} /></li>))}
        {cards.map((item)=>(<li key={item.id}><ArticleCards {...item} /></li>))}

      </ul>
    </div>
  </section>;
};

export default Articles;
