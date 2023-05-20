import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ShopByCategory = () => {

    const [category, setCategory] = useState('Engineering Toys')
    const [toysCategories, setToysCategories] = useState([])

    useEffect(() => {
        fetch(`https://toy-marketplace-assignment-11-server.vercel.app/categories/${category}`)
            .then(res => res.json())
            .then(data => {
                setToysCategories(data)
            })
    }, [category])
    console.log(toysCategories)

    return (
        <div className='py-24 px-14 bg-purple-200'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Discover Exciting Toy Categories</h3>
                <p className=' font-bold pb-8'>
                    Toys Galore: Endless Fun!</p>
            </div>
            <div className='text-center'>

                <Tabs>

                    <TabList>
                        <Tab onClick={() => setCategory('Engineering Toys')}>Engineering Toys</Tab>
                        <Tab onClick={() => setCategory('Mathematics Toys')}>Mathematics Toys</Tab>
                        <Tab onClick={() => setCategory('Science Toys')}> Science Toys</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-2 justify-center gap-10 mt-10'>
                            {
                                toysCategories?.map(toy => (
                                    <div
                                      
                                    className="card h-96 w-full bg-base-100 shadow-xl">
                                        <figure><img className='pt-5 object-contain h-full' src={toy.photoURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title mb-2">
                                                {toy?.name}

                                            </h2>

                                            <div className="badge badge-secondary text-xl font-semibold py-2  px-3">Price : {toy?.price} $</div>
                                            <p className='flex text-xl items-center pt-2'>Rating : {toy?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${toy?._id}`} className="badge badge-outline ">Details Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 justify-center gap-10 mt-10'>
                            {
                                toysCategories?.map(toy => (
                                    <div className="card h-96 w-full bg-base-100 shadow-xl">
                                        <figure><img className='pt-5 object-contain h-full' src={toy.photoURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title mb-2">
                                                {toy?.name}

                                            </h2>

                                            <div className="badge badge-secondary text-xl font-semibold py-2  px-3">Price : {toy?.price} $</div>
                                            <p className='flex text-xl items-center pt-2'>Rating : {toy?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${toy?._id}`} className="badge badge-outline ">Details Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid md:grid-cols-2 justify-center gap-10 mt-10'>
                            {
                                toysCategories?.map(toy => (
                                    <div className="card h-96 w-full bg-base-100 shadow-xl">
                                        <figure><img className='pt-5 object-contain h-full' src={toy.photoURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title mb-2">
                                                {toy?.name}

                                            </h2>

                                            <div className="badge badge-secondary text-xl font-semibold py-2  px-3">Price : {toy?.price} $</div>
                                            <p className='flex text-xl items-center pt-2'>Rating : {toy?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${toy?._id}`} className="badge badge-outline ">Details Now</Link>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;