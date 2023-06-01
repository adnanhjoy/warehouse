import React from 'react';
import { FaFacebook, FaHeart, FaLinkedin, FaPinterest, FaRandom, FaTwitter } from "react-icons/fa";


const TopNav = () => {
    return (
        <div>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                <div className='flex space-x-6 p-5'>
                    <div className='flex text-2xl space-x-2 text-gray-400 items-center'>
                        <FaFacebook className='hover:text-blue-600 cursor-pointer'></FaFacebook>
                        <FaTwitter className='hover:text-blue-600 cursor-pointer'></FaTwitter>
                        <FaPinterest className='hover:text-red-600 cursor-pointer'></FaPinterest>
                        <FaLinkedin className='hover:text-blue-800 cursor-pointer'></FaLinkedin>
                    </div>
                    <div className='flex space-x-6 items-center'>
                        <p className='m-0 cursor-pointer'>Contact</p>
                        <p className='m-0 cursor-pointer'>Sitemap</p>
                        <p>|</p>
                        <p className='m-0'>Block link</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <span className='flex items-center space-x-2'>
                        <FaHeart></FaHeart>
                        <p className='m-0 cursor-pointer'>My Wishlist</p>
                    </span>
                    <span className='flex items-center space-x-2'>
                        <FaRandom></FaRandom>
                        <p className='m-0'>Compare</p>
                    </span>
                    <select>
                        <option value="English">English</option>
                        <option value="Bangla">Bangla</option>
                    </select>
                </div>
            </div>
            <hr className='w-11/12 mx-auto' />
        </div>
    );
};

export default TopNav;