import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {

    useTitle('ABCD TOYS | BLOGS')

    return (
        <div className='bg-stone-200 min-h-screen py-24 px-14'>
            <div className='text-center pb-5'>
                <h3 className='text-3xl font-bold pb-4'> Frequently Asked Questions</h3>

            </div>
            <div className='text-center w-full'>

                <div className='space-y-5 w-3/4 mx-auto'>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={0}>
                                Access Token: A short-lived credential used to authenticate and authorize access to protected resources. <br />

                                Refresh Token: A long-lived credential used to obtain a new access token when the current access token expires. <br />
                                Storage on Client-side: Securely store them in HTTP-only cookies or use secure mechanisms like local storage, session storage, IndexedDB, or Web Storage. Consider security best practices and encryption to protect sensitive information.</p>
                        </div>
                    </div>
                    <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">

                            <div className='flex justify-center gap-10 ' tabIndex={1}>
                                <div className='p-10 text-left'>
                                    <h3 className='text-xl font-bold mb-4'>    SQL Databases:</h3>

                                    <ul className='list-disc '>
                                        <li>  Use structured schema</li>
                                        <li>  Strong data integrity</li>
                                        <li>  SQL query language</li>
                                        <li>   Vertical scalability</li>
                                        <li>     ACID transactions</li>
                                        <li>  Suited for structured data with complex relationships</li>
                                    </ul>
                                </div>



                                <div className='p-10 text-left'>
                                    <h3 className='text-xl font-bold mb-4'> NoSQL Databases:</h3>
                                    <ul className='list-disc'>
                                        <li> Flexible schema or no schema</li>
                                        <li>  Scalable horizontally</li>
                                        <li>   No fixed query language</li>
                                        <li> Eventual consistency</li>
                                        <li> Suited for unstructured or rapidly changing data</li>
                                    </ul></div>
                            </div>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is express js? What is Nest JS ?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={2}> Express is a minimalist and flexible framework that is easy to use and has a large community of developers. <br />
                                NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
                        </div>
                    </div>

                    <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p tabIndex={3}> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;