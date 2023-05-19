import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

    const [category , setCategory] = useState('Engineering Toys')
    const [toysCategories , setToysCategories] = useState([])

    useEffect(() =>{
            fetch(`http://localhost:5000/categories/${category}`)
            .then(res => res.json())
            .then(data =>{
                setToysCategories(data)
            })
    } , [category])
    console.log(toysCategories)

    return (
        <div className='py-24 px-14 '>
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Discover Exciting Toy Categories</h3>
                <p className=' font-bold pb-8'>
                    Toys Galore: Endless Fun!</p>
            </div>
            <div className='text-center'>
            
                <Tabs>
                
                    <TabList>
                        <Tab onClick={() =>setCategory('Engineering Toys')}>Engineering Toys</Tab>
                        <Tab onClick={() =>setCategory('Mathematics Toys')}>Mathematics Toys</Tab>
                        <Tab onClick={() => setCategory('Science Toys')}> Science Toys</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;