import React from 'react';
import { FaHome, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='border-y-4'>
            <nav className='flex space-x-5 justify-center items-center text-gray-500 font-semibold'>
                <li className=' list-none hover:bg-black hover:text-white py-3 px-6 cursor-pointer uppercase'><span><FaHome></FaHome></span></li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase dropdown'>Categories Tab
                    <ul className='dropdown-content'>
                        <div className='flex w-11/12'>
                            <div className='w-96'>
                                <li><Link><small>T Shirts</small></Link></li>
                                <li><Link><small>Tops</small></Link></li>
                                <li><Link><small>Pants</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Casoule Dress</small></Link></li>
                                <li><Link><small>Evening Dress</small></Link></li>
                                <li><Link><small>Summer Dress</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Shirts</small></Link></li>
                                <li><Link><small>Shoes</small></Link></li>
                                <li><Link><small>Lehanga</small></Link></li>
                            </div>
                        </div>
                    </ul>
                </li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase dropdown'>Tabs inside
                    <ul className='dropdown-content'>
                        <div className='flex w-11/12'>
                            <div className='w-96'>
                                <li><Link><small>T Shirts</small></Link></li>
                                <li><Link><small>Tops</small></Link></li>
                                <li><Link><small>Pants</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Casoule Dress</small></Link></li>
                                <li><Link><small>Evening Dress</small></Link></li>
                                <li><Link><small>Summer Dress</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Shirts</small></Link></li>
                                <li><Link><small>Shoes</small></Link></li>
                                <li><Link><small>Lehanga</small></Link></li>
                            </div>
                        </div>
                    </ul>
                </li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase dropdown'>other Demo
                    <ul className='dropdown-content'>
                        <div className='flex w-11/12'>
                            <div className='w-96'>
                                <li><Link><small>T Shirts</small></Link></li>
                                <li><Link><small>Tops</small></Link></li>
                                <li><Link><small>Pants</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Casoule Dress</small></Link></li>
                                <li><Link><small>Evening Dress</small></Link></li>
                                <li><Link><small>Summer Dress</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Shirts</small></Link></li>
                                <li><Link><small>Shoes</small></Link></li>
                                <li><Link><small>Lehanga</small></Link></li>
                            </div>
                        </div>
                    </ul>
                </li>
                <li className=' list-none hover:bg-black hover:text-white p-3 cursor-pointer uppercase dropdown'>Another Tab
                <ul className='dropdown-content'>
                        <div className='flex w-11/12'>
                            <div className='w-96'>
                                <li><Link><small>T Shirts</small></Link></li>
                                <li><Link><small>Tops</small></Link></li>
                                <li><Link><small>Pants</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Casoule Dress</small></Link></li>
                                <li><Link><small>Evening Dress</small></Link></li>
                                <li><Link><small>Summer Dress</small></Link></li>
                            </div>
                            <div className='w-full'>
                                <li><Link><small>Shirts</small></Link></li>
                                <li><Link><small>Shoes</small></Link></li>
                                <li><Link><small>Lehanga</small></Link></li>
                            </div>
                        </div>
                    </ul>
                </li>
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