import React, { useEffect } from 'react';
import AboutCard from './components/about-card';
import Data from './components/data';
import { FaProjectDiagram } from 'react-icons/fa';
import { MdGroups, MdVerified, MdOutlineWork } from 'react-icons/md';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { BiCodeAlt } from 'react-icons/bi';
import Title from './components/title';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const AboutMe = ({ refAbout }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const animationAboutTitle = useAnimation();
    const animationAbout = useAnimation();
    const animateElement_1 = useAnimation();
    const animateElement_2 = useAnimation();
    const animateElement_3 = useAnimation();
    const animateElement_4 = useAnimation();
    const animateElement_5 = useAnimation();
    const animateElement_6 = useAnimation();

    useEffect(() => {
        if (inView) {
            animationAboutTitle.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.2
                }
            });
        }
        if (inView) {
            animationAbout.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 1.2
                }
            });
        }
        if (inView) {
            animateElement_1.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 1.6
                }
            });
        }
        if (inView) {
            animateElement_2.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 1.8
                }
            });
        }
        if (inView) {
            animateElement_3.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 2
                }
            });
        }
        if (inView) {
            animateElement_4.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 2.2
                }
            });
        }
        if (inView) {
            animateElement_5.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 2.4
                }
            });
        }
        if (inView) {
            animateElement_6.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 2.6
                }
            });
        }
        
        if (!inView) {
            animationAboutTitle.start({
                opacity: 0,
                x: '-5vw'
            });
        }
        if (!inView) {
            animationAbout.start({
                opacity: 0,
            });
        }
        if (!inView) {
            animateElement_1.start({
                opacity: 0,
                y: '5vw'
            });
        }
        if (!inView) {
            animateElement_2.start({
                opacity: 0,
                y: '5vw'
            });
        }
        if (!inView) {
            animateElement_3.start({
                opacity: 0,
                y: '5vw'
            });
        }
        if (!inView) {
            animateElement_4.start({
                opacity: 0,
                y: '5vw'
            });
        }
        if (!inView) {
            animateElement_5.start({
                opacity: 0,
                y: '5vw'
            });
        }
        if (!inView) {
            animateElement_6.start({
                opacity: 0,
                y: '5vw'
            });
        }
            
    }, [inView, animationAboutTitle, animationAbout, animateElement_1, animateElement_2, animateElement_3, animateElement_4, animateElement_5, animateElement_6]);
    
    
    return ( 
        <>
            <section
                ref={ refAbout }
                id='About'
                className="w-full h-screen bg-primary text-white
                    font-roboto flex justify-center items-center"
            >
                <div
                    
                    ref={ ref }
                    className='max-w-250 flex flex-col'
                >
                    <Title
                        animateTitle={ animationAboutTitle }
                        title='About Me'
                        subtitle='Main informations about me
                                and what I love to do.'
                    />
                    <motion.div
                        animate={ animationAbout }
                        className='flex mt-14'
                    >
                        <div>
                            <img
                                src={ 'me.jpg' } 
                                alt="" 
                                className='w-img filter grayscale'
                            />
                        </div>
                        <div
                            className='ml-10'
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
                                className='mt-8'
                            >
                                <a 
                                    href={'cv.pdf'}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='bg-septenary text-white px-4 py-2 
                                                mt-6 rounded-md text-sm font-semibold
                                                hover:bg-primary border border-septenary 
                                                hover:border-septenary transition
                                                duration-500 ease-in-out'
                                >
                                    Download my CV
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <div
                        className='flex mt-20 justify-between 
                                   font-sans text-sm'
                    >
                        <AboutCard
                            animateElement={ animateElement_1 }
                            icon={ <FaProjectDiagram /> }
                            description={ '100% projects completed' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            animateElement={ animateElement_2 }
                            icon={ <MdGroups /> }
                            description={ '100% satisfied clients' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            animateElement={ animateElement_3 }
                            icon={ <MdVerified /> }
                            description={ '100% positive feedback' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            animateElement={ animateElement_4 }
                            icon={ <BsFillEmojiSmileFill /> }
                            description={ '2 years of experience' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            animateElement={ animateElement_5 }
                            icon={ <BiCodeAlt /> }
                            description={ '4000+ lines of code' }
                        >
                            
                        </AboutCard>
                        <AboutCard
                            animateElement={ animateElement_6 }
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