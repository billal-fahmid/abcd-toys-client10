import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SafePoint = ({img, title}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with options (optional)
        AOS.refresh(); // Refresh AOS when new elements are added dynamically (optional)
      }, []);
    return (
        <div data-aos="fade-left" className='flex justify-start gap-8 items-center'>
            <img src={img} alt="" />
            <p className='text-xl'>{title}</p>
        
        </div>
    );
};

export default SafePoint;