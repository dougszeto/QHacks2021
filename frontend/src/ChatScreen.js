import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Mark',
            image: '...',
            message: 'Im free later in the week'
        },
        {
            image: '...',
            message: 'When are you open on Friday?'
        },
        {
            message: '8am - 5pm'
        },
    ]);

    return (
        <div className = 'chatScreen'>
            <p>YOU MATCH WITH MARK ON 10/10/21</p>
            {messages.map((message) => (
                <div className='chatScreen__message'>
                    <Avatar
                        className='chatScreen'
                        alt={message.name}
                        scr={message.image}
                        />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen;