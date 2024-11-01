import { Link } from 'gatsby';
import React from 'react';

interface CardItemProps {
  path: string;
  label: string;
  src: string;
  text: string;
}

function CardItem({ path, label, src, text }: CardItemProps): JSX.Element {
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

export default CardItem;
