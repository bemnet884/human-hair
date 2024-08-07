import React, { useRef, useState } from 'react'
import { navLinks } from '../constants';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const MenuIcon = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  function handleShowMenu() {
    setMenuVisible(prev => !prev);
  }
  return (
    <div>
       <div className='hover:cursor-pointer hidden max-lg:block' ref={buttonRef}>
             <HiMenu className="text-primary text-3xl" onClick={handleShowMenu}/>
        </div>
      {
        menuVisible && (
          <ul ref={menuRef} className='absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50'>
            {navLinks && navLinks.length ? (
              navLinks.map(navItem => (
                <li key={navItem.label} className='border-b border-gray-200 last:border-b-0'>
                  <Link
                    to={navItem.href}
                    className='block px-4 py-2 text-lg font-montserrat hover:text-gray-700 hover:bg-gray-100 text-primary transition-colors duration-200'
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))
            ) : null}
          </ul>
              )}
    </div>
  )
}
// <menuIcon>

export default MenuIcon
