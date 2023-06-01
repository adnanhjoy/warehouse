import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import RecentPost from '../../../components/RecentPost/RecentPost';
import Products from '../../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <RecentPost></RecentPost>
            <Products></Products>
        </div>
    );
};

export default Home;