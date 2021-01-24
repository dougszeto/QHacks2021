import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
  <div className='header'>
      {/*skipped the step of making the ripple effect on the icons bc its specifically for materials-ui; can try to do it another way*/}
      <PersonIcon className='header__icon'/>
      <img 
        className='header__logo'
        src='http://www.vectorico.com/download/social_media/Tinder-Icon.jpg'/>
      < ForumIcon className='header__icon'/>
  </div>
  );
}

export default Header;