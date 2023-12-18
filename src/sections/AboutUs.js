import React from 'react';
import './AboutUs.css';
import CardItem from '../components/CardItem';
import zone from '../images/zone.jpg';
import sigmapisigma from '../images/sigmapisigma.jpg';
import physcon from '../images/physcon.jpg';
import fishdam from '../images/fishdam.jpg';
import picnic from '../images/picnic.jpg';

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

export default Cards;
