import React, { useEffect, useState } from 'react';

const AllToys = () => {

    const [toys, setToys] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/allToys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    console.log(toys)
    return (
        <div className='pb-24 pt-20 px-14'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Explore Our Toys</h3>
                <p className=' font-bold pb-8'> Discover our Toy Wonderland</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys?.map((toy, index) => (
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy?.sellerName}</td>
                                    <td>{toy?.name}</td>
                                    <td>{toy?.subCategory}</td>
                                    <td>{toy?.price}</td>
                                    <td>{toy?.quantity}</td>
                                    <td>
                                        <button className='px-4 py-1 rounded-3xl text-white font-semibold text-sm  bg-pink-500 border-none'>View Details </button>

                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;