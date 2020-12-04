//hold all the cards
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the 
                            jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Go to the Islands of Bali by Boat"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul>
                        <CardItem
                            src="images/img-7.jpg"
                            text="Hike up Pikes Peak in Colorado"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Play some soccer on a Himilayan Mountain"
                            label='Luxury'
                            path='/services'
                        />
                         <CardItem
                            src="images/img-8.jpg"
                            text="Take a guided tour - fully camel powered"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards