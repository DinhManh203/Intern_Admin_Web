import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[15%] min-h-screen bg-white text-white border-r p-4'>
      <div className='flex flex-col gap-4 pt-1 text-[15px] font-normal'>
        <NavLink 
          to='/add' 
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-[10px] rounded-lg transition-all duration-300 
            ${isActive ? 'bg-gray-300 text-white' : 'text-gray-400 hover:bg-gray-400 hover:text-white'}
          `}
        >
          <img src={assets.add_icon} alt="Add" className="w-5 text-white" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink 
          to='/list' 
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-[10px] rounded-lg transition-all duration-300 
            ${isActive ? 'bg-gray-400 text-white' : 'text-gray-400 hover:bg-gray-400 hover:text-white'}
          `}
        >
          <img src={assets.order_icon} alt="List" className="w-5" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink 
          to='/orders' 
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-[10px] rounded-lg transition-all duration-300 
            ${isActive ? 'bg-gray-400 text-white' : 'text-gray-400 hover:bg-gray-400 hover:text-white'}
          `}
        >
          <img src={assets.order_icon} alt="Orders" className="w-5" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
