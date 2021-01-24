import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
    return(
        <div className='swipeButtons'>
            <IconButton>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    );
}

export default SwipeButtons;