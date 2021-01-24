import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return <div className='chats'>
        <Chat
            name='Mark'
            message='When do you open on Friday?'
            timestamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='Mark'
            message='When do you open on Friday?'
            timestamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='Mark'
            message='When do you open on Friday?'
            timestamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='Mark'
            message='When do you open on Friday?'
            timestamp='40 seconds ago'
            profilePic='...'
        />
        <Chat
            name='Mark'
            message='When do you open on Friday?'
            timestamp='40 seconds ago'
            profilePic='...'
        />
    </div>;
}

export default Chats;