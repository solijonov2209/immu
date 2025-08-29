import React from 'react';
import foundImg from '../../../assets/images/home-maqsad.png';
import './foundgoals.scss';
import { Link } from 'react-router-dom';

const statsData = [
  { id: 1, value: '12+', label: 'Year Services' },
  { id: 2, value: '+20K', label: 'Cargo Delivered' },
  { id: 3, value: '+20K', label: 'Cargo Delivered' },
  { id: 4, value: '500', label: 'Total Cargo' },
];

const FoundGoals = () => {
  return (
    <section className="foundgoals">
      <div className="container">
        <div className="found-wrapper">
          <img
            className="found-img"
            src={foundImg}
            alt="Found Goals images man and woman communication"
          />
          <div className="found-content">
            <h2 className="found-title">Fondning vazifasi va maqsadi</h2>
            <p className="found-text">
              Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada
              jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini
              yuksaltirish, milliy o‘zlikni saqlab qolish, vatandoshlar va ular tomonidan tuzilgan
              jamoat birlashmalarini qo‘llab-quvvatlash, turli sohalarda faoliyat yuritayotgan
              vatandoshlarimizning salohiyatini mamlakatimiz taraqqiyotiga samarali yo‘naltirish
              Fondning asosiy maqsadlaridan biri hisoblanadi.
            </p>
            <p className="found-text">
              Xorijda istiqomat qilayotgan vatandoshlarni tarixiy Vatani atrofida yanada
              jipslashtirish, ularning qalbi va ongida yurt bilan faxrlanish tuyg‘usini
              yuksaltirish.
            </p>
            <Link className="found-link" to={'/'}>
              Batafsil
            </Link>
          </div>
        </div>

        <div className="statistics">
          {statsData.map((item) => {
            const valueParts = item.value.split('+');

            return (
              <div key={item.id} className="statistics__item">
                <h2 className="statistics__value">
                  {item.value.startsWith('+') && <span className="highlight">+</span>}
                  {valueParts.join('')} {/* '+' ni olib tashlagan bo‘ladi */}
                  {item.value.endsWith('+') && !item.value.startsWith('+') && (
                    <span className="highlight">+</span>
                  )}
                </h2>
                <p className="statistics__label">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoundGoals;
