import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import home from "../../assets/images/home.png";
import friends from "../../assets/images/friends.png";
import chat from "../../assets/images/chat.png";
import settings from "../../assets/images/settings.png";
import profile from "../../assets/images/profile.png";
import burger from "../../assets/images/burger.png";
import cancel from "../../assets/images/cancel.png";
import logo from "../../assets/images/logo.png";
import { Container } from './Container';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getImageSizeClass = (path) => {
    return location.pathname === path ? 'h-12 w-12' : 'h-10 w-10';
  };

  return (
    <nav className="bg-[#0f172a]">
      <Container>
        <div className='relative px-4 py-4 flex justify-between items-center'>
          <Link className="text-3xl font-bold leading-none" to="/">
            <div className='flex items-center justify-center gap-2'>
              <img src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16" />
              <span className='text-3xl font-medium text-white'>Echo</span>
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden navbar-burger flex items-center text-blue-600 p-3"
          >
            {isOpen ? <img src={cancel} alt="Close" className="h-8 w-8" /> : <img src={burger} alt="Menu" className="h-8 w-8" />}
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full flex justify-evenly items-center gap-6 px-5 py-5 lg:py-1 bg-[#0f172a] lg:relative lg:flex lg:w-auto lg:space-x-6 lg:bg-transparent lg:items-center border-2 border-gray-500 border-t-0 rounded-md rounded-t-none lg:rounded-none lg:border-none`}
          >
            <li>
              <Link to="/">
                <div className='flex lg:flex-col items-center justify-center gap-2 group'>
                  <img src={home} className={`${getImageSizeClass('/')} object-cover hover:scale-125 transition`} alt="Home" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className='flex lg:flex-col items-center justify-center gap-2 group'>
                  <img src={friends} className={`${getImageSizeClass('/friends')} object-cover hover:scale-125 transition`} alt="Friends" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/chat">
                <div className='flex lg:flex-col items-center justify-center gap-2 group'>
                  <img src={chat} className={`${getImageSizeClass('/chat')} object-cover hover:scale-125 transition`} alt="Chat" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <div className='flex lg:flex-col items-center justify-center gap-2 group'>
                  <img src={profile} className={`${getImageSizeClass('/profile')} object-cover hover:scale-125 transition`} alt="Profile" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <div className='flex lg:flex-col items-center justify-center gap-2 group'>
                  <img src={settings} className={`${getImageSizeClass('/settings')} object-cover hover:scale-125 transition`} alt="Settings" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
