import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
  return (
  <div className='cards'>
    <h1>Our suggested properties!</h1>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem src="images/nicehouse.jpg" text="Luxury home Alicante 38% ROI" label="Investment" path="/services" />
          <CardItem src="images/hotel.jpg" text="For sale nice apartment Valencia" label="Holiday" path="/services" />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Cards;
