import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2'

const ShopByCategory = () => {

    const {user} = useContext(AuthContext)
    const [category, setCategory] = useState('Engineering Toys')
    const [toysCategories, setToysCategories] = useState([])
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
      }, []);

    useEffect(() => {
        fetch(`https://toy-marketplace-assignment-11-server.vercel.app/categories/${category}`)
            .then(res => res.json())
            .then(data => {
                setToysCategories(data)
            })
    }, [category])
    console.log(toysCategories)

    const handleLoginMessage =()=>{
        if(!user){
            Swal.fire('“You have to log in first to view details”')
        }
    }



    return (
        <div className='py-24 px-14 bg-lime-100'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Discover Exciting Toy Categories</h3>
                <p className=' font-bold pb-8'>
                    Toys Galore: Endless Fun!</p>
            </div>
            <div className='text-center'>

                <Tabs>
                {/* className={`${category}` === 'Engineering Toys'?  'bg-pink-700 text-white' : ''} */}
                    <TabList>
                        <Tab  onClick={() => setCategory('Engineering Toys')}>Engineering Toys</Tab>
                        <Tab onClick={() => setCategory('Mathematics Toys')}>Mathematics Toys</Tab>
                        <Tab onClick={() => setCategory('Science Toys')}> Science Toys</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid md:grid-cols-2 justify-center gap-10 mt-10'>
                            {
                                toysCategories?.map(toy => (
                                    <div
                                    data-aos="flip-left"
                                    className="card h-96 w-full bg-base-100 shadow-xl">
                                        <figure><img className='pt-5 object-contain h-full' src={toy.photoURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title mb-2">
                                                {toy?.name}

                                            </h2>

                                            <div className="badge badge-secondary text-xl font-semibold py-2  px-3">Price : {toy?.price} $</div>
                                            <p className='flex text-xl items-center pt-2'>Rating : {toy?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${toy?._id}`} onClick={handleLoginMessage} className="badge badge-outline ">Details Now</Link>
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
                                    <div 
                                    data-aos="flip-up"
                                    className="card h-96 w-full bg-base-100 shadow-xl">
                                        <figure><img className='pt-5 object-contain h-full' src={toy.photoURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title mb-2">
                                                {toy?.name}

                                            </h2>

                                            <div className="badge badge-secondary text-xl font-semibold py-2  px-3">Price : {toy?.price} $</div>
                                            <p className='flex text-xl items-center pt-2'>Rating : {toy?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${toy?._id}`} onClick={handleLoginMessage} className="badge badge-outline ">Details Now</Link>
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
                                    <div
                                    data-aos="flip-right" 
                                     className="card h-96 w-full bg-base-100 shadow-xl">
                                        <figure><img className='pt-5 object-contain h-full' src={toy.photoURL} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title mb-2">
                                                {toy?.name}

                                            </h2>

                                            <div className="badge badge-secondary text-xl font-semibold py-2  px-3">Price : {toy?.price} $</div>
                                            <p className='flex text-xl items-center pt-2'>Rating : {toy?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/details/${toy?._id}`} onClick={handleLoginMessage} className="badge badge-outline ">Details Now</Link>

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