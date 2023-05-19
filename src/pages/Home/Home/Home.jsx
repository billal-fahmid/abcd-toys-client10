import React from 'react';
import Banner from './Banner/Banner';
import Gellary from '../Gellary/Gellary';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Gellary></Gellary>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;