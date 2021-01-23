import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from 'axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    return (
        <div>
            <h1>Tinder cards</h1>
            <div className='tinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div
                    style={{backgroundImage: `url(${person.image})`}}
                    className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
                </div>
        </div>
    );
}

export default TinderCards;