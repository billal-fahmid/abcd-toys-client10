import React from 'react';
import Banner from './Banner/Banner';
import Gellary from '../Gellary/Gellary';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CustomerReview from '../CustomerReview/CustomerReview';
import TrendingProduct from '../TrendingProduct/TrendingProduct';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('ABCD TOYS | HOME')
    return (
        <div className=''>
            <Banner></Banner>
            <Gellary></Gellary>
            <ShopByCategory></ShopByCategory>
            <TrendingProduct></TrendingProduct>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;