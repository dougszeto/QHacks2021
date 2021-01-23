import React from 'react';
import './Header.css';

function Header() {
  return (
  <div className='header'>
      {/*skipped the step of making the ripple effect on the icons bc its specifically for materials-ui; can try to do it another way*/}
      <img 
        className='header__icon'
        src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'/>
      <img 
        className='header__logo'
        src='http://www.vectorico.com/download/social_media/Tinder-Icon.jpg'/>
      <img 
        className='header__icon'
        src='https://www.searchpng.com/wp-content/uploads/2019/02/Chat-Icon-PNG.png'/>
  </div>
  );
}

export default Header;