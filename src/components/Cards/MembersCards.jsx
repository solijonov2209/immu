import React from 'react';
import './membercards.scss';
import mailIcon from '../../assets/images/mail.svg';
import tellIcon from '../../assets/images/tell.svg';
import { Link } from 'react-router-dom';

const MembersCard = ({ image, name, position, phone, email }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <div className="card__content">
        <p className="card__position">{position}</p>
        <h3 className="card__name">{name}</h3>
        <div className="card__contact">
          <Link to={`tel:${phone}`} target="__blank">
            <img src={tellIcon} alt="tel icon" /> {phone}
          </Link>
          <Link to={`mailto:${email}`} target="__blank">
            <img src={mailIcon} alt="mail icon" /> {email}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
