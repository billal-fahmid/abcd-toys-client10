import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        // <div className='bg-base-200 px-14'>
        //     <footer className="footer p-10  text-base-content">
        //         <div>
        //             <img className='h-14' src="https://i.ibb.co/gM1DMCv/cubes.png" alt="" />
        //             <p>ABCD TOYS <br />Providing Fun With learn since 1992</p>
        //         </div>
        //         <div>
        //             <span className="footer-title">Contact Us:</span>
        //             <a className="link link-hover">Email: info@adcdtoys.com</a>
        //             <a className="link link-hover">Phone: +1-123-456-7890</a>
        //             <a className="link link-hover">Address: 123 Main Street, City, State, ZIP
        //             </a>

        //         </div>
        //         <div>
        //             <span className="footer-title">Our Services:</span>
        //             <a className="link link-hover">Wide toy selection</a>
        //             <a className="link link-hover">Fast worldwide shipping</a>
        //             <a className="link link-hover">Helpful customer support
        //             </a>
        //             <a className="link link-hover">Easy returns and exchanges
        //             </a>
        //         </div>
        //         <div>
        //             <span className="footer-title">Social</span>
        // <div className="grid grid-flow-col gap-4">


        // </div>
        //         </div>
        //     </footer>
        //     <FooterBottom></FooterBottom>
        // </div>
        // <footer className="bg-blue-900 text-white py-20">
        //     <div className="container mx-auto flex flex-col md:flex-row justify-between ">

        //         <div className="flex items-center mb-6 md:mb-0">
        //             <img
        //                 src="https://i.ibb.co/gM1DMCv/cubes.png"
        //                 alt="Logo"
        //                 className="w-12 h-12 mr-4"
        //             />
        //          <div>
        //          <h1 className="text-xl font-semibold">ABCD TOYS</h1>
        //             <small>Providing Fun With learn since 1992</small>
        //          </div>
        //         </div>
        //         <div className="flex space-x-4 mb-6 md:mb-0">
        //             <a href="#" className="hover:text-gray-400">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-6 w-6"
        //                     viewBox="0 0 20 20"
        //                     fill="currentColor"
        //                 >
        //                     {/* <!-- Social media icon SVG code --> */}
        //                 </svg>
        //             </a>


        //         </div>
        //         <div className='flex justify-between gap-5'>

        //             <div className="text-center md:text-left mb-6 md:mb-0">
        //                 <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        //                 <p>Email: info@adcdtoys.com</p>
        //                 <p>Phone: +1 123-456-7890</p>
        //                 <p>Address: 123 Main Street, City, State, ZIP</p>
        //                 <div className='flex justify-start gap-5 mt-5'>
        //                     <a href='https://twitter.com/BillalH54359607' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>

        //                     <a href='https://www.youtube.com/watch?v=YJ33MEHRcpI&ab_channel=LearnColorsTV' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>

        //                     <a href='https://www.facebook.com/fahmidhasansohag.395/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        //                 </div>

        //             </div>
        //             <div className="text-center md:text-left mb-6 md:mb-0">
        //                 <h2 className="text-lg font-semibold mb-2">Our Services</h2>
        //                 <ul className="list-disc list-inside">
        //                     <li>Educational Toys for Kids</li>
        //                     <li>Interactive Workshops</li>
        //                     <li>Learning Resources</li>
        //                     <li>Wide toy selection</li>
        //                     <li>Fast worldwide shipping</li>
        //                     <li>Helpful customer support</li>
        //                     <li>Easy returns and exchanges</li>

        //                 </ul>
        //             </div>

        //         </div>

        //         <div className="w-full md:w-1/3">
        //             <h2 className="text-lg font-semibold mb-2">Send Us a Message</h2>
        //             <form className="flex flex-col space-y-4">
        //                 <input
        //                     type="text"
        //                     placeholder="Your Name"
        //                     className="bg-gray-800 rounded-lg py-2 px-4 text-white"
        //                 />
        //                 <input
        //                     type="email"
        //                     placeholder="Your Email"
        //                     className="bg-gray-800 rounded-lg py-2 px-4 text-white"
        //                 />
        //                 <textarea
        //                     placeholder="Your Message"
        //                     className="bg-gray-800 rounded-lg py-2 px-4 text-white h-24"
        //                 ></textarea>
        //                 <button
        //                     type="submit"
        //                     className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        //                 >
        //                     Send
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </footer>
        <footer className="bg-blue-900 text-white py-10 md:py-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col md:flex-row justify-between">

                <div className="flex items-center mb-6 md:mb-0">
                    <img
                        src="https://i.ibb.co/gM1DMCv/cubes.png"
                        alt="Logo"
                        className="w-12 h-12 mr-4"
                    />
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">ABCD TOYS</h1>
                        <small className="hidden md:block">Providing Fun With Learn Since 1992</small>
                    </div>
                </div>

                <div className="flex space-x-4 mb-6 md:mb-0">
                    <a href="#" className="hover:text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            {/* <!-- Social media icon SVG code --> */}
                        </svg>
                    </a>
                    {/* Add more social icons as needed */}
                </div>

                <div className='flex flex-col md:flex-row justify-between gap-5'>
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <p>Email: info@adcdtoys.com</p>
                        <p>Phone: +1 123-456-7890</p>
                        <p>Address: 123 Main Street, City, State, ZIP</p>
                        <div className='flex justify-start gap-5 mt-2 md:mt-5'>
                            <a href='https://twitter.com/BillalH54359607' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    {/* Twitter icon SVG code */}
                                </svg>
                            </a>
                            <a href='https://www.youtube.com/watch?v=YJ33MEHRcpI&ab_channel=LearnColorsTV' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    {/* YouTube icon SVG code */}
                                </svg>
                            </a>
                            <a href='https://www.facebook.com/fahmidhasansohag.395/' target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    {/* Facebook icon SVG code */}
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Our Services</h2>
                        <ul className="list-disc list-inside">
                            <li>Educational Toys for Kids</li>
                            <li>Interactive Workshops</li>
                            <li>Learning Resources</li>
                            <li>Wide Toy Selection</li>
                            <li>Fast Worldwide Shipping</li>
                            <li>Helpful Customer Support</li>
                            <li>Easy Returns and Exchanges</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-semibold mb-2">Send Us a Message</h2>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-gray-800 rounded-lg py-2 px-4 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-gray-800 rounded-lg py-2 px-4 text-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="bg-gray-800 rounded-lg py-2 px-4 text-white h-24"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>
                </div>

            </div>
        </footer>


    );
};

export default Footer;