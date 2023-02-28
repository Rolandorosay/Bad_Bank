import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our awesome locations around the US!</h1>
      <p>We are looking ot expand into Europe early 2023!</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://newyorkyimby.com/wp-content/uploads/2019/11/270-Park-Avenue-November-2019.jpg'
              text='Come take a tour of our headquarters!'
              label='New York City'
              path='/home'
            />
            <CardItem
              src='https://www.realchangenews.org/sites/default/files/Federal%20Reserve%20of%20San%20Francisco.jpg'
              text='The place where we help startups... Psych!'
              label='San Francisco'
              path='/home'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.vox-cdn.com/thumbor/9YFc8K5OugSGh7iwrCL1VgzO_0A=/0x0:5000x2940/1200x900/filters:focal(2100x1070:2900x1870):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66369404/Raffles_Boston_Back_Bay_Hotel___Residences__Exterior__Credit_The_Architectural_Team__Inc_.0.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Boston'
              path='/home'
            />
            <CardItem
              src='https://images.adsttc.com/media/images/5332/1b52/c07a/8084/8900/004a/large_jpg/1.jpg?1395792713'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Chicago'
              path='/home'
            />
            <CardItem
              src='https://costar.brightspotcdn.com/71/84/a3d275ad4451aabd11fa483e4a9d/dallas.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Dallas'
              path='/home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;