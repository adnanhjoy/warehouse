import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import RecentPost from '../../../components/RecentPost/RecentPost';
import Products from '../../../components/Products/Products';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <RecentPost></RecentPost>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;