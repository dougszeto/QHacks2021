import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from 'axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    //runs once when the component loads
    useEffect( () => {
        axios.get('https://backend-w6cdgaoofq-ue.a.run.app/dogs/')
            .then(res => {
                setPeople(res.data);
            })
            .catch(err => console.log(`Error receiving from backend: ${err}`));
    }, []);
    return (
        <div>
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