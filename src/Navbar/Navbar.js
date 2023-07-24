import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showContent, setShowContent] = useState(false);

  const handleSignIn = () => {
    setShowContent(true);
  };

  return (
    <div className='nav-main-bar'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/005/293/990/small/pet-food-logo-with-dog-icon-suitable-for-pet-shop-and-vet-free-vector.jpg" className='nav-logo' alt='Logo' />
      <div className='nav-heading-container'>
        <h1> <i> <b> JERRY ONLINE PETSTORE </b> </i> </h1>
        <div className='nav-left'>
          <button className='nav-button'>About Us</button>
          <button className='nav-button'>Contact Us</button>
          <button className='nav-button'>Help</button>
        </div>
      </div>
     
    </div>
  );
};

const ContentBelowNavbar = () => {
  return (
    <div className='content-below-navbar'>
      <h2>New Page Content</h2>
      {/* Add your desired content here */}
    </div>
  );
};

export default Navbar;
