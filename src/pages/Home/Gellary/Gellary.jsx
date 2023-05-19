import React from 'react';

const Gellary = () => {
    return (
        <div className='py-20 px-14 bg-pink-100'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Explore Our Playful Gallery</h3>
                <p className=' font-bold pb-8'>Spark Their Curiosity, Ignite Their Learning!</p>
            </div>
            <div className="container grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* https://i.ibb.co/Dfsj1Cp/maths-arrangement-with-different-tools.jpg
https://i.ibb.co/QFxw4ZM/back-school-concept-with-notebooks-abacus-blue-background-flat-lay.jpg */}
                <img
                    src="https://i.ibb.co/N66GqQ1/yx4r-e4vt-210906.jpg"
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1"
                />
                <img
                    className="w-full h-full"
                    src="https://i.ibb.co/vDQ4hpG/2357880.jpg"
                />
                <img
                    className="w-full h-full"
                    src="https://i.ibb.co/RDG3Dwf/robo-wunderkind-o-Ug-ZVBa-Gc-EQ-unsplash.jpg"
                />
                <img
                    className="w-full h-full"
                    src="https://i.ibb.co/QFxw4ZM/back-school-concept-with-notebooks-abacus-blue-background-flat-lay.jpg"
                />
                <img
                    className="w-full h-full"
                    src="https://i.ibb.co/Dfsj1Cp/maths-arrangement-with-different-tools.jpg"
                />
              
            </div>
        </div>
    );
};

export default Gellary;