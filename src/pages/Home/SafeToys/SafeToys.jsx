import React from 'react';
import SafePoint from './SafePoint';


const SafeToys = () => {
    return (
        <div className=' pt-24 pb-20 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: 'url(https://i.ibb.co/WGsZW3Z/bg-1.webp)' }}>

            <div className='flex justify-end'>
                <div className='lg:w-1/2 lg:pl-10 text-white'>
                    <h2 className='text-5xl font-semibold'>Safe toys for children</h2>
                    <div className='mt-14 flex flex-col gap-10'>
                       <SafePoint img={'https://i.ibb.co/ypGXgN0/icon-4.png'} title={'Beautiful & will Design'}></SafePoint>
                       <SafePoint img={'https://i.ibb.co/ypn9JrX/icon-5.png'} title={'High durable toys'}></SafePoint>
                       <SafePoint img={'https://i.ibb.co/y6ND6Mh/icon-6.png'} title={'Recyclable materials'}></SafePoint>
                       <SafePoint img={'https://i.ibb.co/JqT9YdG/icon-7.png'} title={'Safe & non-toxic'}></SafePoint>
                    </div>
                    <button className='text-black py-3 px-10 mb-10 bg-yellow-500 text-3xl mt-12 hover:bg-black hover:text-white transition-all font-bold rounded-full'>Get Stared Now</button>
                </div>
            </div>

        </div>
    );
};

export default SafeToys;