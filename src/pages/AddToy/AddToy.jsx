import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {

    useTitle('ABCD TOYS | ADD TOY')

    const { user } = useContext(AuthContext)

    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        fetch(`https://toy-marketplace-assignment-11-server.vercel.app/addToy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast("Toy Added Successfully")
                    e.target.reset()
                }
            })

    };

    return (
        <div className='w-full p-16 bg-pink-100'>
            <ToastContainer />
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Add New Toy</h3>

            </div>

            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                <div className='md:flex gap-6 w-full'>
                    <div className="mb-2 w-full">

                        <input
                            {...register("photoURL")}
                            type="text"
                            required
                            placeholder='Photo URL of Toy'
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2 w-full">

                        <input
                            {...register("name")}
                            type="text"
                            required
                            placeholder='Toy Name'
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </div>
                <div className='md:flex gap-6 w-full'>
                    <div className="mb-2 w-full">
                    <label htmlFor="" className='pl-5'> Seller Name</label>
                        <input
                            {...register("sellerName")}
                            type="text"
                            required
                            placeholder='Seller Name'
                            defaultValue={user?.displayName}
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2 w-full">
                    <label htmlFor="" className='pl-5'> Seller Email</label>
                        <input
                            {...register("sellerEmail")}
                            type="text"
                            required
                            placeholder='Seller Email'
                            defaultValue={user?.email}
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </div>
                <div className='mb-2'>
                <label htmlFor="" className='pl-5'> Sub-Category</label>
                    <select placeholder='Sub Category' className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("subCategory")}>
                        <option value="Mathematics Toys">Mathematics Toys</option>
                        <option value="Engineering Toys">Engineering Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </select>
                </div>
                <div className='flex gap-6 w-full'>
                    <div className="mb-2 w-full">

                        <input
                            {...register("price")}
                            type="text"
                            required
                            placeholder='Price'
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2 w-full">

                        <input
                            {...register("rating")}
                            type="text"
                            required
                            placeholder='Rating'
                            className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </div>

                <div className="mb-2 ">
          
                    <input
                        {...register("quantity")}
                        type="text"
                        required
                        placeholder='Available Quantity'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2 ">
            
                    <textarea
                        {...register("description")}
                        type="text"
                        required
                        placeholder='Details Descriptions'
                        className="block w-full px-4 h-26 py-2 mt-4 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>


          
                <button type='submit' className='btn btn-block mt-5 bg-pink-700 border-none hover:bg-pink-800'> Add New</button>

            </form>

        </div>
    );
};

export default AddToy;