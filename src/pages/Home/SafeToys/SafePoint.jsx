import React from 'react';

const SafePoint = ({img, title}) => {
    return (
        <div className='flex justify-start gap-8 items-center'>
            <img src={img} alt="" />
            <p className='text-xl'>{title}</p>
        
        </div>
    );
};

export default SafePoint;