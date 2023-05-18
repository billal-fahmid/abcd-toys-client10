import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/addToy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast("Toy Added Successfully")
                }
            })
    };

    return (
        <div className='w-full p-16 bg-pink-200'>
            <ToastContainer />
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Add New Toy</h3>

            </div>

            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-2">

                    <input
                        {...register("photoURL")}
                        type="text"
                        placeholder='Photo URL of Toy'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">

                    <input
                        {...register("name")}
                        type="text"
                        placeholder='Toy Name'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">

                    <input
                        {...register("sellerName")}
                        type="text"
                        placeholder='Seller Name'
                        defaultValue={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">

                    <input
                        {...register("sellerEmail")}
                        type="text"
                        placeholder='Seller Email'
                        defaultValue={user?.email}
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className='mb-2'>
                    <select placeholder='Sub Category' className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("subCategory")}>
                        <option value="mathToys">Math Toys</option>
                        <option value="engineeringToys">Engineering Toys</option>
                        <option value="physicsToys">Physics Toys</option>
                    </select>
                </div>
                <div className="mb-2">

                    <input
                        {...register("price")}
                        type="text"
                        placeholder='Price'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">

                    <input
                        {...register("rating")}
                        type="text"
                        placeholder='Rating'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">

                    <input
                        {...register("quantity")}
                        type="text"
                        placeholder='Available Quantity'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">

                    <input
                        {...register("description")}
                        type="text"
                        placeholder='Details Descriptions'
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                {/* <input  type="submit "   /> */}
                <button type='submit' className='btn btn-block bg-pink-700 border-none hover:bg-pink-800'> Add New</button>

            </form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                <Controller
                    name="select"
                    control={control}
                    render={({ field }) => <Select
                        {...field}
                        options={[
                            { value: "chocolate", label: "Chocolate" },
                            { value: "strawberry", label: "Strawberry" },
                            { value: "vanilla", label: "Vanilla" }
                        ]}
                    />}
                />
                <input type="submit" />
            </form> */}
        </div>
    );
};

export default AddToy;