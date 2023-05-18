import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

// CommonJS


const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [control])

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(

                    fetch(`http://localhost:5000/deleteToys/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {

                                setControl(!control)
                                'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                            }
                        })

                )
            }
        })
    }

    console.log(myToys)

    return (
        <div className='py-24 px-14'>

            <div className='text-center'>
                <h3 className='text-3xl font-bold pb-4'>Your Toys</h3>

            </div>
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myToys?.map((toy, index) => (
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.name}</td>
                                <td>{toy?.subCategory}</td>
                                <td>{toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td>
                                    <Link to={`/updateToy/${toy?._id}`} className='px-4 py-1 rounded-3xl text-white font-semibold text-sm  bg-pink-500 border-none'>Update </Link>
                                    <button onClick={() => handleDelete(toy?._id)} className='px-4 py-1 rounded-3xl text-white font-semibold text-sm ml-4 bg-orange-500 border-none'>Delete </button>

                                </td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyToys;