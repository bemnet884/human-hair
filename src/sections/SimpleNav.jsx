import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import MenuIcon from '../components/Menu';

const SimpleNav = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <button onClick={() => navigate(-1)} className="text-xl">
      <AiOutlineArrowLeft className="text-primary text-2xl" />
      </button>
      <button className="lg:hidden text-xl">
  <MenuIcon/>
      </button>
    </nav>
  );
};

export default SimpleNav;
