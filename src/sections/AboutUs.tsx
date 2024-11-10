import { Link } from 'gatsby';
import React from 'react';
import fishdam from '../images/fishdam.jpg';
import physcon from '../images/physcon.jpg';
import picnic from '../images/picnic.jpg';
import sigmapisigma from '../images/sigmapisigma.jpg';
import zone from '../images/zone.jpg';
import './AboutUs.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 id="header">About Us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={zone}
              text='The Society of Physics Students is an organization for any student with an interest in Physics or Astronomy. We are tightly integrated with our department and with our Sigma Pi Sigma Chapter. Anyone interested in joining is encouraged and welcome. Subscribe to our email list in the footer or contact us for more information!'
              label='Zone Meeting 2021'
              path='/history'
            />
            <CardItem
              src={sigmapisigma}
              text='Sigma Pi Sigma is the Physics and Astronomy Honor Society. It exists to honor outstanding scholarship in physics and astronomy, to encourage interest in physics among students at all levels, to promote service of its members towards their peers, colleagues, and the public, and to provide a fellowship of persons who have excelled in physics.'
              label='ΣΠΣ Induction 2021'
              path='/sigmapisigma'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={physcon}
              text='Attend meetings and conferences with our chapter!'
              label='PhysCon2022'
              path='/photos'
            />
            <CardItem
              src={fishdam}
              text='Join us for our stargazing trips to Fish Dam Run!'
              label='Fish Dam 2022'
              path='/photos'
            />
            <CardItem
              src={picnic}
              text='Bond with members at our biyearly department picnic!'
              label='Fall Picnic 2022'
              path='/photos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

interface CardItemProps {
  path: string;
  label: string;
  src: string;
  text: string;
}

function CardItem({ path, label, src, text }: Readonly<CardItemProps>): JSX.Element {
  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img
            className='cards__item__img'
            alt='About Us'
            src={src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default Cards;
