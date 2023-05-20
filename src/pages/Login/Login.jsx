import React, { useContext } from 'react';
import SocialLogin from '../../Shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('ABCD TOYS | LOGIN')

    const {loginUser} = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';

    const handleLogin=(e) =>{
        e.preventDefault();

        const form= e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password)

        loginUser(email , password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate( from, {replace: true})
        })
        .catch(err =>{
            console.log(err)
        })

    }
  
    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-pink-700 underline">
                        Sign in
                    </h1>
                    <form onSubmit={handleLogin} className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="block w-full px-4 py-2 mt-2 text-pink-700 bg-white border rounded-md focus:border-pink-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    
                        <div className="mt-6">
                            <input type="submit" value="Login" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600" />
                         
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <Link
                            to='/register'
                            className="font-medium text-pink-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;