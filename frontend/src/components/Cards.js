import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>A New Collection of Styles for a Season of Color and Delight</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Choose from elegant day dresses'
              label=''
              path='/services'
            />
            <CardItem
              src='images/img-13.jpg'
              text='A limited edition capsule collection of silk loungewear'
              label=''
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='An invitation to live life in color.'
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-15.jpg'
              text='Experience the magic and beauty of our Spring Summer 2022 collection '
              label=''
              path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='It’s a dance to which everyone is invited'
              label=''
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Add luxurious texture to your wardrobe with covetable sweaters'
              label=''
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;