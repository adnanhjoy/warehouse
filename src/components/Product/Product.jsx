import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { image, title, price } = product;
    console.log(price)
    return (
        <div className='border-2 rounded cursor-pointer product-container'>
            <img src={image} alt="" />
            <p className='text-gray-600 text-center my-3'>{title}</p>
            <p className='text-center mb-3 font-bold'>$ {price}</p>
        </div>
    );
};

export default Product;