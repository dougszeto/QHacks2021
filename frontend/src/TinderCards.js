import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'woofy',
            url: 'https://www.vets4pets.com/siteassets/species/dog/large-dog-on-walk-looking-over-hills.jpg?w=585&scale=down',
        },
        {
            name: 'fluffy',
            url: 'https://jooinn.com/images/dog-67.jpg',
        }
    ]);

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
                    style={{backgroundImage: `url(${person.url})`}}
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