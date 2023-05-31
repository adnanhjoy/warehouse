import React from 'react';
import { FaHome, FaRocket } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className='border-y-4'>
            <nav className='flex space-x-5 justify-center items-center text-gray-500 font-semibold'>
                <li className=' list-none hover:bg-black hover:text-white py-3 px-6 cursor-pointer uppercase'><span><FaHome></FaHome></span></li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase'>Categories Tab</li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase'>Tabs inside</li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase'>other Demo</li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase'>Another Tab</li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase'>
                    <span className='flex space-x-2 items-center'>
                    <FaRocket></FaRocket>
                    <p className='m-0'>mix</p>
                    </span>
                </li>
            </nav>
        </div>
    );
};

export default NavBar;