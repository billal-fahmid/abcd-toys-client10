import React from 'react';
import { useForm } from "react-hook-form";

const AddToy = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
             
                <div className="mb-2">
                  
                    <input
                        {...register("photoURL")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("name")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("sellerName")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("sellerEmail")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("price")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("rating")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("quantity")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                  
                    <input
                        {...register("description")}
                        type="text"
                        
                        className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                {/* <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> */}
                <input type="submit" />
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