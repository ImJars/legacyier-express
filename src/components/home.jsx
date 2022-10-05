import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = () => {
    return ( 
        <>
            <div
                className='w-full h-screen bg-secondary text-white'
            >
                <div 
                    className='w-1/2 flex flex-col justify-between h-full'
                >
                    <div
                        className='flex space-x-4 mt-8 justify-center'
                    >
                        <a href="#">
                            <FaFacebookF />
                        </a>
                        <a href="#">
                            <FaTwitter />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                        <a href="#">
                            <FaGithub />
                        </a>
                    </div>
                    <div
                        className='text-white font-sans grid content-center justify-end'
                    >
                        <div>
                            <h1
                                className='text-sm'
                            >
                                Hi There,
                            </h1>
                        </div>
                        <div>
                            <h2
                                className='text-3xl font-bold'
                            >
                                I Am a Developer
                            </h2>
                        </div>
                        <div>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit <br/> amet 
                                consectetur adipisicing elit. Possimus
                            </h3>
                        </div>
                        <div>
                            <button
                                className='border-2 border-tertiary 
                                    px-4 py-2 mt-4 rounded-md bg-tertiary
                                    hover:bg-secondary hover:transition-all 
                                    hover:duration-500'
                            >
                                More About Me
                            </button>
                        </div>
                    </div>
                    <div
                        className='flex space-x-8 mb-8 justify-end'
                    >
                        <div>
                            <h1>
                                Email
                            </h1>
                            <p>
                                hi.legacyier@gmail.com
                            </p>
                        </div>
                        <div>
                            <h1>
                                Phone
                            </h1>
                            <p>
                                +52 55 2914 7674
                            </p>
                        </div>
                        <div>
                            <h1>
                                Location
                            </h1>
                            <p>
                                Mexico City, Mexico
                            </p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
     );
}
 
export default Home;