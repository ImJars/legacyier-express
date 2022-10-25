import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = ({ refHome }) => {
    return ( 
        <>
            <section
                ref={ refHome}
                id='Home'
                className='w-full h-screen bg-secondary text-white
                        font-sans flex justify-center items-center'
            >
                <div
                    className='max-w-250 h-screen flex'
                >
                    <div
                        className='w-1/2 grid grid-cols-1 content-between my-8'
                    >
                        <div
                            className='flex justify-start items-center space-x-5'
                        >
                            <a href="https://twitter.com/Im_Jars">
                                <FaFacebookF 
                                    className='text-lg hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaTwitter 
                                    className='text-lg hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaInstagram 
                                    className='text-lg hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaLinkedinIn 
                                    className='text-lg hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaGithub 
                                    className='text-lg hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                        </div>
                        <div>
                            <h1
                                className='text-xs tracking-widest'
                            >
                                Hi everyone,
                            </h1>
                            <h2
                                className='text-4xl font-bold'
                            >
                                I'm Software Developer
                            </h2>
                            <h3
                                className='text-lg text-septenary'
                            >
                                I build things for the web.
                            </h3>
                            <p
                                className='text-sm mt-2 text-text-mini tracking-wide'
                            >
                                I'm a software developer specializing in creating exceptional 
                                products and digital experiences. I am currently focused on 
                                creating <font className='text-septenary'>Web3</font> technology products.
                            </p>
                        </div>
                        <div
                            className='flex space-x-10'
                        >
                            <div>
                                <h1
                                    className='text-sm font-semibold'
                                >
                                    Email
                                </h1>
                                <h2
                                    className='text-xs text-text-mini tracking-widest mt-1'
                                >
                                    hi.legacyier@gmail.com
                                </h2>
                            </div>
                            <div>
                                <h1
                                    className='text-sm font-semibold'
                                >
                                    WhatsApp
                                </h1>
                                <h2
                                    className='text-xs text-text-mini tracking-widest mt-1'
                                >
                                    +52 773-151-1761
                                </h2>
                            </div>
                            <div>
                                <h1
                                    className='text-sm font-semibold'
                                >
                                    Location
                                </h1>
                                <h2
                                    className='text-xs text-text-mini tracking-widest mt-1'
                                >
                                    Hidalgo, Mex
                                </h2>
                            </div>
                        </div>
                        </div>
                    <div
                        className='w-1/2'
                    >
                        <img src="#" alt="" />
                    </div>
                </div>
                
            </section>
        </>
     );
}
 
export default Home;