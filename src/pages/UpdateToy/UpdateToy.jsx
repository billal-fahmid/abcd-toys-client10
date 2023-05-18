import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateToy = () => {
    const toyData = useLoaderData()
    console.log(toyData)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
      
    };

    return (
        <div className='w-full p-16 bg-pink-100'>
             <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Update Toy Info</h3>

            </div>
            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>

           
           
                <div className="mb-2">
                <label htmlFor="" className='pl-5'>Toy Price</label>
                    <input
                        {...register("price")}
                        type="text"
                        placeholder='Price'
                        defaultValue={toyData?.price}
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
           
                <div className="mb-2">
                <label htmlFor="" className='pl-5'>Available Quantity</label>
                    <input
                        {...register("quantity")}
                        type="text"
                        placeholder='Available Quantity'
                        defaultValue={toyData?.quantity}
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="" className='pl-5'>Details Description</label>
                    <input
                        {...register("description")}
                        type="text"
                        placeholder='Details Descriptions'
                        defaultValue={toyData?.description}
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                {/* <input  type="submit "   /> */}
                <button type='submit' className='btn btn-block bg-pink-700 border-none hover:bg-pink-800'> Update Now</button>

            </form>
        </div>
    );
};

export default UpdateToy;