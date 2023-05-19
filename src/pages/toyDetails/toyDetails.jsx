import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div className='py-24 px-14'>
              <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'> Discover Amazing Toy Details</h3>

            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;