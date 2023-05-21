import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gellary = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
      }, []);
  
    return (
        <div className='py-20 px-14 bg-gray-100'>
            <div className='text-center ' data-aos="zoom-in">
                <h3 className='text-3xl font-bold pb-4'>Explore Our Playful Gallery</h3>
                <p className=' font-bold pb-8'>Spark Their Curiosity, Ignite Their Learning!</p>
            </div>
            <div className="container grid grid-cols-2 gap-4 lg:grid-cols-4">
                {/* https://i.ibb.co/Dfsj1Cp/maths-arrangement-with-different-tools.jpg
https://i.ibb.co/QFxw4ZM/back-school-concept-with-notebooks-abacus-blue-background-flat-lay.jpg */}
                <img
                    data-aos="fade-up"
                    src="https://i.ibb.co/N66GqQ1/yx4r-e4vt-210906.jpg"
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1"
                />
                <img
                    data-aos="fade-down"
                    className="w-full h-full"
                    src="https://i.ibb.co/vDQ4hpG/2357880.jpg"
                />
                <img
                    data-aos="fade-right"
                    className="w-full h-full"
                    src="https://i.ibb.co/RDG3Dwf/robo-wunderkind-o-Ug-ZVBa-Gc-EQ-unsplash.jpg"
                />
                <img
                    data-aos="fade-left"
                    className="w-full h-full"
                    src="https://i.ibb.co/QFxw4ZM/back-school-concept-with-notebooks-abacus-blue-background-flat-lay.jpg"
                />
                <img
                    data-aos="zoom-in"
                    className="w-full h-full"
                    src="https://i.ibb.co/Dfsj1Cp/maths-arrangement-with-different-tools.jpg"
                />

            </div>

        </div>
    );
};

export default Gellary;