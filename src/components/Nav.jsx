import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { shopLogo, hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import Navigation from '../sections/Navigation';
import { HiMenu } from 'react-icons/hi';
import MenuIcon from './Menu';

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleShowMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target) && 
      buttonRef.current && 
      !buttonRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='max-container padding-x py-2  z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <h2 className='text-3xl font-palanquin text-primary font-bold '>Fandisha's Bundles </h2>
        <ul className='flex-1 flex justify-center items-center font-semibold gap-16 max-lg:hidden hover:cursor-pointer'>
          <Navigation/>
        </ul>
        <div className='flex text-primary gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link to='/Sign-In' className='hover:text-violet-400'>Sign in</Link>
          <span>/</span>
          <Link to="/All-Products" className='hover:text-violet-400'>Explore More</Link>
        </div>
        <div className='relative'>
          <MenuIcon/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
