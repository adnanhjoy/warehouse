import React from 'react';
import TopNav from '../Shared/TopNav/TopNav';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;