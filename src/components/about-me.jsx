import React from 'react';
import Img from '../images/me.jpg';
import AboutCard from './components/about-card';
import Data from './components/data';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdGroups, MdVerified, MdOutlineWork } from 'react-icons/md';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';
import Title from './components/title';

const AboutMe = ({ refAbout }) => {
    return ( 
        <>
            <section
                ref={ refAbout }
                id='About'
                className="w-full h-screen bg-primary text-white
                    font-roboto flex justify-center items-center"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title='About Me'
                        subtitle='Main informations about me
                                and what I love to do.'
                    />
                    <div
                        className='flex mt-14'
                    >
                        <div>
                            <img
                                src={ Img } 
                                alt="" 
                                className='w-img filter grayscale'
                            />
                        </div>
                        <div
                            className='ml-10 mt-10'
                        >
                            <h1
                                className='text-xl font-normal tracking-wide'
                            >
                                Hello my name is <font className="font-semibold">Angel Ramirez</font>, based in Mexico
                            </h1>
                            <p
                                className='text-sm font-roboto mt-2 text-text-mini tracking-wide'
                            >
                                <font className="font-extrabold">Hello!</font> My name is <font className="font-extrabold">Ángel</font> and I like technology, I enjoy 
                                creating web applications and developing software. I started 
                                programming in 2014 during high school, in 2017 I started with 
                                web development during professional projects at university, 
                                I liked it so much that I continue to implement new technologies 
                                in my developments. 
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
                                        data='Address:'
                                        children={ 'Hidalgo, Mex' }
                                    />
                                </div>
                                <div>
                                    <Data 
                                        data='Phone:'
                                        children={ '+52 773-151-1761' }
                                        link={'https://wa.link/01hnrf'}
                                        classNames={'text-septenary'}
                                    />
                                    <Data 
                                        data='Email:'
                                        children={ 'hi.legacyier@gmail.com' }
                                        link={'mailto:hi.legacyier@gmail.com'}
                                        classNames={'text-septenary'}
                                    />
                                    <Data 
                                        data='Work status:'
                                        children={ 'Software Developer' }
                                        link={'https://www.linkedin.com/in/angel-ramirez-08468212b/'}
                                        classNames={'text-septenary'}
                                    />
                                    <Data 
                                        data='Freelancer:'
                                        classNames={ 'animate-pulse text-green-700' }
                                        children={ 'Available' }
                                    />
                                </div>
                            </div>
                            <div
                                className='mt-4'
                            >
                                <a 
                                    href="https://github.com/ImJars"
                                    className='bg-septenary text-white px-4 py-2 
                                                mt-6 rounded-md text-sm font-semibold'
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
                            description={ '100% projects completed' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <MdGroups /> }
                            description={ '100% satisfied clients' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <MdVerified /> }
                            description={ '100% positive feedback' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <BsFillEmojiSmileFill /> }
                            description={ '2 years of experience' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            icon={ <BiCodeAlt /> }
                            description={ '4000+ lines of code' }
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