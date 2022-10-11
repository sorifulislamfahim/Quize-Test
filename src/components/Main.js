import React from 'react';
import { Outlet } from 'react-router';
import Navber from './Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;