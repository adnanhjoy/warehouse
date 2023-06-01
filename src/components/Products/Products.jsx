import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='my-10 w-11/12 mx-auto'>
            <h4 className='text-gray-600 font-semibold text-lg text-center mb-10'>Featured Products</h4>

            <div className='grid grid-cols-5 gap-1'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;