import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import RecentPost from '../../../components/RecentPost/RecentPost';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <RecentPost></RecentPost>
        </div>
    );
};

export default Home;