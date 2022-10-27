import React from 'react';
import ImgHome from '../images/legacyierHome.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Home = ({ refHome }) => {
    return ( 
        <>
            <section
                ref={ refHome}
                id='Home'
                className='w-full h-screen bg-secondary text-white
                        font-roboto tracking-wider flex justify-center items-center static'
            >
                <div
                    className='relative h-full w-full flex justify-end'
                >
                <   img 
                        src={ ImgHome } alt="" 
                        className='opacity-5 hover:opacity-50 h-full
                                    transition duration-500 ease-in-out mx-52 py-10'
                    />
                </div>
                <div
                    className='absolute max-w-250 h-screen flex'
                >
                    <div
                        className='grid grid-cols-1 content-between my-8'
                    >
                        <div
                            className='flex justify-start items-center space-x-5'
                        >
                            <a href="https://twitter.com/Im_Jars">
                                <FaFacebookF 
                                    className='text-xl hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaTwitter 
                                    className='text-xl hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaInstagram 
                                    className='text-xl hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaLinkedinIn 
                                    className='text-xl hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                            <a href="https://twitter.com/Im_Jars">
                                <FaGithub 
                                    className='text-xl hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </a>
                        </div>
                        <div>
                            <h1
                                className='text-sm tracking-widest'
                            >
                                Hi everyone,
                            </h1>
                            <h2
                                className='text-5xl font-bold'
                            >
                                I'm Software Developer
                            </h2>
                            <h3
                                className='text-xl text-septenary'
                            >
                                I build things for the web.
                            </h3>
                            <p
                                className='w-1/2 text-sm mt-2 text-text-mini tracking-wider'
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
                </div>
            </section>
        </>
     );
}
 
export default Home;