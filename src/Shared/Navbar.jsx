import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import "react-tooltip/dist/react-tooltip.css";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })
    }

    const navItems = <>
        <Link to='/' className='px-3 text-base font-semibold'>Home</Link>
        <Link to='/allToys' className='px-3 text-base font-semibold'>All Toys</Link>
        <Link to='/blogs' className='px-3 text-base font-semibold'>Blogs</Link>
        {user && <>
            <Link to='/myToys' className='px-3 text-base font-semibold'>My Toys</Link>
            <Link to='/addToy' className='px-3 text-base font-semibold'>Add Toy</Link>
        </>}

    </>
    return (
        <div className='px-14'>
            <div className="navbar py-5 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                         
                            {navItems}
                        </ul>
                    </div>
                    <img className='h-14' src='https://i.ibb.co/gM1DMCv/cubes.png' alt="" /> <h2 className='text-2xl font-bold md:ml-3 font-mono'>ABCD-TOYS</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {console.log(user?.displayName)}
                    {user ? <>
                        <button onClick={handleLogOut} className='text-base font-semibold'> Logout</button>
                        {user.photoURL ?
                            <div className=" ml-4 rounded-full tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img  className="w-14 h-14 rounded-full" src={user.photoURL} />
                            </div> : ""}
                    </> : <Link to='/login' className='px-3 text-base font-semibold'>Login</Link>}
                    
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;