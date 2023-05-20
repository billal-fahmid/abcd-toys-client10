import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../hooks/useTitle';


const ToyDetails = () => {

    useTitle('ABCD TOYS | TOY DETAILS')

    const details = useLoaderData()
    console.log(details)
    return (
        <div className='py-24 px-14'>
      
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'> Discover Amazing Toy Details</h3>

            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <img src={details?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Toy Name: {details?.name}</h1>
                        <p className="pt-5 text-xl">Seller Name: {details.sellerName ? details.sellerName : 'Not Available'}</p>
                        <p className="pt-5 text-xl">Seller Email: {details.sellerEmail ? details.sellerEmail : 'Not Available'}</p>
                        <p className="pt-5 text-xl font-semibold">Price: {details?.price} $</p>
                        <p className='flex text-xl items-center pt-4'>Rating : {details?.rating} <span className='ml-5 '><Rating style={{ maxWidth: 100 }} value={details?.rating} readOnly /></span></p>
                        <p className="pt-5 text-xl ">Available Quantity: {details?.quantity}</p>
                        <p className="pt-5 text-xl mb-10 ">Description: {details?.description}</p>
                        <Link to='/' className='px-8 py-3  text-white font-bold  bg-pink-500 border-none'>Back to Home</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;