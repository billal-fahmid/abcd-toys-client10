import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowWorks = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
      }, []);
    return (
        <div className=' py-24 px-14 lg:h-screen bg-white'>
            <div className='text-center ' data-aos="zoom-in">
                <h3 className='text-3xl font-bold pb-4'>Here's how it works</h3>
                <p className=' font-bold pb-8'>Unlocking Learning Through Play</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                <div className='text-center  p-10' >
                    <img data-aos="zoom-in-up" className='mx-auto' src="https://i.ibb.co/PhVBxHh/icon-2.png" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold my-5'>Inspires</h2>
                        <p className='text-xl'>Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Elementum sagittis</p>
                    </div>
                </div>
                <div className='text-center p-10'>
                    <img className='mx-auto' data-aos="zoom-in-up" src="https://i.ibb.co/G0xLCWw/icon-3.png" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold my-5'>Encouraging</h2>
                        <p className='text-xl'>Morbi tincidunt ornare massa eget. Ullamcorper a lacus vestibulum sed arcu non odio.</p>
                    </div>
                </div>
                <div className='text-center p-10'>
                    <img className='mx-auto' data-aos="zoom-in-up" src="https://i.ibb.co/TrLh6ps/icon-1.png" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold my-5'>Creative</h2>
                        <p className='text-xl'>Cras semper auctor neque vitae tempus quam pellentesque. At augue eget arcu dictum.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowWorks;
// https://i.ibb.co/G0xLCWw/icon-3.png
// https://i.ibb.co/TrLh6ps/icon-1.png
// https://i.ibb.co/PhVBxHh/icon-2.png