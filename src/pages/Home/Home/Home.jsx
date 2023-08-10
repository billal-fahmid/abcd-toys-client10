import React from 'react';
import Banner from './Banner/Banner';
import Gellary from '../Gellary/Gellary';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CustomerReview from '../CustomerReview/CustomerReview';
import TrendingProduct from '../TrendingProduct/TrendingProduct';
import useTitle from '../../../hooks/useTitle';
import HowWorks from '../HowWorks/HowWorks';
import Offer from '../Offer/Offer';
import SafeToys from '../SafeToys/SafeToys';
import Blog1 from '../Blog1/Blog1';

const Home = () => {
    useTitle('ABCD TOYS | HOME')
    return (
        <div className=''>
            <Banner></Banner>
            <SafeToys></SafeToys>
            <Gellary></Gellary>
            <HowWorks></HowWorks>
            <ShopByCategory></ShopByCategory>
            <TrendingProduct></TrendingProduct>
            <Offer></Offer>
            <CustomerReview></CustomerReview>
            <Blog1></Blog1>
        </div>
    );
};

export default Home;