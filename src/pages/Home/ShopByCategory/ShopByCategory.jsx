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

    const { user } = useContext(AuthContext)
    const [category, setCategory] = useState('Engineering Toys')
    const [toysCategories, setToysCategories] = useState([])

    const [tabb2, setTab2] = useState(false)
    const [tabb3, setTab3] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
    }, []);

    useEffect(() => {
       
        fetch(`https://toy-marketplace-assignment-11-server.vercel.app/categories/${category}`)
            .then(res => res.json())
            .then(data => {
                if(category==='Mathematics Toys'){
                    setTab2(true)
                }
                if(category ==='Science Toys'){
                    setTab3(true)
                }
                setToysCategories(data)
            })
    }, [category])
    // console.log(toysCategories)

    const handleLoginMessage = () => {
        if (!user) {
            Swal.fire('“You have to log in first to view details”')
        }
    }
  
 
console.log(tabb2,tabb3)


    return (
        <div className='py-24 px-6 md:px-14 bg-gray-100'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Discover Exciting Toy Categories</h3>
                <p className=' font-bold pb-8'>
                    Toys Galore: Endless Fun!</p>
            </div>
            <div className=' p-6 rounded-lg shadow-md'>

                <Tabs>
                    {/* className={`${category}` === 'Engineering Toys'?  'bg-pink-700 text-white' : ''} */}
                    <TabList className='flex mb-4 flex-col gap-4 sm:flex-row justify-center'>
                        <Tab className='mr-4 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer' onClick={() => setCategory('Engineering Toys')}>Engineering Toys</Tab>

                        <Tab className='mr-4 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer' onClick={() => setCategory('Mathematics Toys')}>Mathematics Toys</Tab>

                        <Tab className='mr-4 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer' onClick={() => setCategory('Science Toys')}> Science Toys</Tab>
                    </TabList>

                    <TabPanel className=' rounded-lg  '>
                        <div className='grid md:grid-cols-3 justify-center gap-10 mt-10'>
                            {
                                toysCategories?.map(toy => (
                                   
                                    <div 
                                    data-aos="flip-left"
                                    className="bg-white shadow-lg rounded-lg p-4"
                                    
                                    >
                                        <div className="relative">
                                            <img
                                                className="w-full h-48 object-cover rounded-t-lg"
                                                src={toy.photoURL}
                                                alt="Toy"
                                            />
                                            <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">

                                                <p className='flex text-[16px] items-center '>{toy?.rating} <span className=''><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h2 className="text-xl font-semibold">{toy?.name}</h2>

                                            <h5
                                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                                {toy?.price} $
                                            </h5>

                                            <div className='py-5'>
                                                <Link to={`/details/${toy?._id}`} onClick={handleLoginMessage} className="text-black py-2 px-6 mb-5 bg-yellow-500 text-[16px]  hover:bg-black hover:text-white transition-all font-bold rounded-full">Details Now</Link>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </TabPanel>
                 {
                    tabb2 &&    <TabPanel className=' rounded-lg  '>
                    <div
                    data-aos="flip-right"
                     className='grid md:grid-cols-3 justify-center gap-10 mt-10'>
                        {
                            toysCategories?.map(toy => (
                                <div className="bg-white shadow-lg rounded-lg p-4">
                                <div className="relative">
                                    <img
                                        className="w-full h-48 object-cover rounded-t-lg"
                                        src={toy.photoURL}
                                        alt="Toy"
                                    />
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">

                                        <p className='flex text-[16px] items-center '>{toy?.rating} <span className=''><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold">{toy?.name}</h2>

                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {toy?.price} $
                                    </h5>

                                    <div className='py-5'>
                                        <Link to={`/details/${toy?._id}`} onClick={handleLoginMessage} className="text-black py-2 px-6 mb-5 bg-yellow-500 text-[16px]  hover:bg-black hover:text-white transition-all font-bold rounded-full">Details Now</Link>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </TabPanel>
                 }
                 {

                    tabb3 &&    <TabPanel className=' rounded-lg '>
                    <div className='grid md:grid-cols-3 justify-center gap-10 mt-10'>
                        {
                            toysCategories?.map(toy => (
                               
                                <div 
                                data-aos="flip-left"
                                className="bg-white shadow-lg rounded-lg p-4">
                                <div className="relative">
                                    <img
                                        className="w-full h-48 object-cover rounded-t-lg"
                                        src={toy.photoURL}
                                        alt="Toy"
                                    />
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">

                                        <p className='flex text-[16px] items-center '>{toy?.rating} <span className=''><Rating style={{ maxWidth: 100 }} value={toy?.rating} readOnly /></span></p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-xl font-semibold">{toy?.name}</h2>

                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {toy?.price} $
                                    </h5>

                                    <div className='py-5'>
                                        <Link to={`/details/${toy?._id}`} onClick={handleLoginMessage} className="text-black py-2 px-6 mb-5 bg-yellow-500 text-[16px]  hover:bg-black hover:text-white transition-all font-bold rounded-full">Details Now</Link>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </TabPanel>

                 }
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;