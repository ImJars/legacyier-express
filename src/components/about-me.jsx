import React from 'react';
import Img from '../images/gatsby-icon.png';
import AboutCard from './components/about-card';
import Data from './components/data';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdGroups, MdVerified, MdOutlineWork } from 'react-icons/md';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';

const AboutMe = () => {
    return ( 
        <>
            <section
                className="w-full h-screen bg-primary text-white
                    font-sans flex justify-center items-center"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <div
                        className='border-l-2 border-tertiary pl-2'
                    >
                        <h1
                            className='text-2xl font-bold'
                        >
                            About Me
                        </h1>
                        <h2
                            className='text-xs'
                        >
                            Main informations about me
                            and what I love to do.
                        </h2>
                    </div>
                    <div
                        className='flex mt-14'
                    >
                        <div>
                            <img src={ Img } alt="" className='w-img'/>
                        </div>
                        <div
                            className='ml-10 mt-10'
                        >
                            <h1
                                className='text-lg font-bold'
                            >
                                Hello my name is Angel Ramirez, based in Mexico
                            </h1>
                            <p
                                className='text-sm mt-2 text-text-mini'
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Ex dolor adipisci omnis nam debitis, dignissimos reiciendis 
                                quo laborum aspernatur quasi explicabo eligendi sint quidem 
                                optio possimus, quas voluptatum libero blanditiis!
                            </p>
                            <div 
                                className='flex mt-6 space-x-24'
                            >
                                <div>
                                    <Data 
                                        data='Name:'
                                        children={ 'Angel Ramirez' }
                                    />
                                    <Data 
                                        data='Date of birth:'
                                        children={ '04-04-1999' }
                                    />
                                    <Data 
                                        data='Nationality:'
                                        children={ 'Mexican' }
                                    />
                                    <Data 
                                        data='Work status:'
                                        children={ 'Software Developer' }
                                    />
                                </div>
                                <div>
                                    <Data 
                                        data='Phone:'
                                        children={ '+52 773-151-1761' }
                                    />
                                    <Data 
                                        data='Email:'
                                        children={ 'hi.legacyier@gmail.com' }
                                    />
                                    <Data 
                                        data='Address:'
                                        children={ 'Tula Hidalgo, Mex' }
                                    />
                                    <Data 
                                        data='Freelancer:'
                                        children={ 'Available' }
                                    />
                                </div>
                            </div>
                            <div
                                className='mt-4'
                            >
                                <a 
                                    href="https://github.com/ImJars"
                                    className='bg-tertiary text-white px-4 py-2 
                                                mt-6 rounded-md text-sm'
                                >
                                    Download my CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className='flex mt-20 justify-between 
                                   font-sans text-sm'
                    >
                        <AboutCard
                            icon={ <FaProjectDiagram /> }
                            description={ '130 projects completed' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <MdGroups /> }
                            description={ '400 satisfied clients' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <MdVerified /> }
                            description={ '100% positive feedback' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <BsFillEmojiSmileFill /> }
                            description={ '10 years of experience' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <BiCodeAlt /> }
                            description={ '2000+ lines of code' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <MdOutlineWork /> }
                            description={ '2000+ hours of work' }
                        >
                            
                        </AboutCard>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutMe;