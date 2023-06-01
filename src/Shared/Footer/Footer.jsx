import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black p-20'>
            <div className='grid grid-cols-4 gap-5'>
                <div>
                    <p className='font-semibold text-gray-400 border-b-2 border-gray-900 pb-2'>Information</p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>Specials</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>New Products</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>Best Seller</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>Our Stores</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>Contact Us</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>About Us</small></p>
                </div>
                <div>
                    <p className='font-semibold text-gray-400 border-b-2 border-gray-900 pb-2'>My Account</p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>My Orders</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>My credit slips</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>My Address</small></p>
                    <p className='text-gray-500 border-b-2 border-gray-900 pb-2'><small>My Personal Info</small></p>
                </div>
                <div>
                    <p className='font-semibold text-gray-400 border-b-2 border-gray-900 pb-2'>Store Information</p>
                    <small className='text-gray-400'>Prestashop 1.6 warehouse 2.4</small>
                    <span className='flex items-center text-gray-400 space-x-3 mt-2'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <small>New York, Brooklyn</small>
                    </span>
                    <span className='flex items-center text-gray-400 space-x-3 mt-2'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <small>+088 01xxxxx</small>
                    </span>
                    <span className='flex items-center text-gray-400 space-x-3 mt-2'>
                        <FaEnvelope></FaEnvelope>
                        <small>example@gmail.com</small>
                    </span>
                </div>
                <div>
                    <p className='font-semibold text-gray-400 border-b-2 border-gray-900 pb-2'>Newsletter</p>
                    <div className='flex items-center border-2 rounded border-gray-900 mt-3'>
                        <input className='rounded p-2 w-full bg-transparent' type="text" placeholder='search' />
                        <FaSearch className='cursor-pointer m-2 text-gray-400'></FaSearch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;