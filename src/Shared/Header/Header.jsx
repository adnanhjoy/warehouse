import React from 'react';
import logo from '../../assets/logo.jpg';
import { FaLock, FaPlaneDeparture, FaSearch, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center my-10 justify-between'>
            <div>
                <div className='flex items-center mb-3 space-x-6'>
                    <span className='flex items-center space-x-2'>
                        <FaPlaneDeparture></FaPlaneDeparture>
                        <small>International Shipping</small>
                    </span>
                    <span className='flex items-center space-x-2'>
                        <FaPlaneDeparture></FaPlaneDeparture>
                        <small>Secure Payment</small>
                    </span>
                </div>
                <div className='flex items-center border-2 rounded'>
                    <input className='rounded p-2 w-full' type="text" placeholder='search' />
                    <FaSearch className='cursor-pointer m-2'></FaSearch>
                </div>
            </div>
            <div className='text-center'>
                <img src={logo} alt="logoS" />
            </div>
            <div>
                <div className='flex items-center mb-3'>
                    <span className='flex items-center space-x-2 bg-blue-800 text-center py-1 px-2 text-white font-semibold'>
                        <FaLock></FaLock>
                        <small>Cart</small>
                    </span>
                    <small className=' bg-slate-500 text-center py-1 px-2 text-white font-semibold'>(empty)</small>
                </div>
                <span className='flex space-x-2 items-center text-gray-400 cursor-pointer'>
                    <FaSignInAlt className='hover:text-black'></FaSignInAlt>
                    <small>Sign In</small>
                </span>
            </div>
        </div>
    );
};

export default Header;