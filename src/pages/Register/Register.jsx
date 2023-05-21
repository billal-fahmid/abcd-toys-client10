import React, { useContext, useState } from 'react';
import SocialLogin from '../../Shared/SocialLogin';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Register = () => {

    useTitle('ABCD TOYS | REGISTER')

    const { createUser } = useContext(AuthContext);
    const [error , setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log(name, email, photoURL, password)

        if(!email){
            return setError('Please Provide a valid Email')
        }
        if(!password|| password.length<6){
            return setError('Please Provide a password & password must be 6 character long');
        }

        createUser(email, password)
    

            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                loggedUser.displayName= name;
                loggedUser.photoURL = photoURL;
                setSuccess('Registration Successful')
                updateProfile(loggedUser, {
                    displayName: name, photoURL: photoURL
                }).then(() => {
                
                    // Profile updated!
                    // ...
                }).catch((err) => {
                    // An error occurred
                    // ...
                    setError(err.message)
                });

            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
            })
    }
    return (
        <div>
            <div className=''>
                <div className="flex flex-col items-center min-h-screen  sm:justify-center sm:pt-0 py-16  bg-gray-50">
                    <div>
                        <a href="/">
                            <h3 className="text-4xl font-bold text-pink-600">
                                Sign Up
                            </h3>
                        </a>
                    </div>
                    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                        <form onSubmit={handleSignIn}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Name
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="email"
                                    
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Email
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Photo URL
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="text"
                                        name="photoURL"
                                        required
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 undefined"
                                >
                                    Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        required
                                        name="password"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>


                            <div className="flex items-center mt-4">
                                <input type="submit" value="Register" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600" />

                            </div>
                        </form>
                        <p className='text-orange-500 text-xl font-semibold'>{error }</p>
                        <p className='text-green-500 text-xl font-semibold'>{success}</p>
                        <div className="mt-4 text-grey-600">
                            Already have an account?{" "}
                            <span>
                                <Link to='/login' className="text-pink-600 hover:underline" href="#">
                                    Log in
                                </Link>
                            </span>
                        </div>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;