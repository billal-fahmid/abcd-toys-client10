import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toyData = useLoaderData()
    console.log(toyData)
    return (
        <div>
            this is update toy page
        </div>
    );
};

export default UpdateToy;