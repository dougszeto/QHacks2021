import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (<div className='chats'>
        <Chat
            name='Sandy'
            message='Hi my name is Sandy and Im looking for the perfect family'
            timestamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='Scruffy'
            message='I love kids! Im a very playful puppy!'
            timestamp='1 hour ago'
            profilePic='...'
        />
        <Chat
            name='Fido'
            message='You seem like a good fit for me, Im very calm!'
            timestamp='2 hours ago'
            profilePic='...'
        />
        <Chat
            name='Milo'
            message='Im well trained and I love treats'
            timestamp='1 day ago'
            profilePic='...'
        />
        <Chat
            name='Rooster'
            message='When do you open on Friday?'
            timestamp='1 week ago'
            profilePic='...'
        />
    </div>);
}

export default Chats;