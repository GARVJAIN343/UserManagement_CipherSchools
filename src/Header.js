import React from 'react';
import logo from './Logo.jpg';


const Header = () => {
  return (
    <>
        <header>
            <div className='logo'> <img src={logo} alt="logo"/></div>
            <div className='description '><h1>YOUR SPOTTABL TEAM</h1>
                <p>Spottabl supports you all throughout</p>
            </div>
          </header>
    </>
  )
}

export default Header
