import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

// CommonJS


const MyToys = () => {

    useTitle('ABCD TOYS | MY TOYS')

    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([])
    const [control, setControl] = useState(false)
    const [sort, setSort] = useState('all')

    console.log(sort)
    const uri = `https://toy-marketplace-assignment-11-server.vercel.app/myToys?email=${user.email}&price=${sort}`

    useEffect(() => {
        // fetch(`https://toy-marketplace-assignment-11-server.vercel.app/myToys?email=${user.email}&price=`)
        fetch(uri)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [control, sort])

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

                    fetch(`https://toy-marketplace-assignment-11-server.vercel.app/deleteToys/${_id}`, {
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
            <div className="relative w-full lg:max-w-sm mb-10">
                <h4 className='text-base font-bold text-pink-600 mb-4'>Ascending - Descending By Price</h4>
                <select className="w-full p-2.5 text-pink-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-pink-600" onChange={(e) => setSort(e.target.value)} id="">
                    <option value="all">All</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
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