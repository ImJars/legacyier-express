import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ButtonScroll from './components/button-scroll';

const Home = ({ refHome }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const iconAnimate1 = useAnimation();
    const iconAnimate2 = useAnimation();
    const iconAnimate3 = useAnimation();
    const iconAnimate4 = useAnimation();
    const iconAnimate5 = useAnimation();
    const animateImg = useAnimation();
    const animateText1 = useAnimation();
    const animateText2 = useAnimation();
    const animateText3 = useAnimation();
    const animateText4 = useAnimation();
    const animateSubtitle1 = useAnimation();
    const animateSubtitle2 = useAnimation();
    const animateSubtitle3 = useAnimation();

    useEffect(() => {
        if (inView) {
            iconAnimate1.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 2
                }
            });
        }
        if (inView) {
            iconAnimate2.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 2.3
                }
            });
        }
        if (inView) {
            iconAnimate3.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 2.5
                }
            });
        }
        if (inView) {
            iconAnimate4.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 2.7
                }
            });
        }
        if (inView) {
            iconAnimate5.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 2.9
                }
            });
        }
        if (inView) {
            animateImg.start({
                opacity: 1,
                transition: {
                     duration: 2, delay: 0.8
                }
            });
        }

        if (!inView) {
            iconAnimate1.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            iconAnimate2.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            iconAnimate3.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            iconAnimate4.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            iconAnimate5.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            animateImg.start({
                opacity: 0,
            });
        }
    }, [inView, iconAnimate1, iconAnimate2, iconAnimate3, iconAnimate4, iconAnimate5, animateImg]);
    
    useEffect(() => {
      if (inView) {
        animateText1.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 3
          }
        });
      }
      if (inView) {
        animateText2.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 3.2
          }
        });
      }
      if (inView) {
        animateText3.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 3.4
          }
        });
      }
      if (inView) {
        animateText4.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 3.6
          }
        });
      }
        if (!inView) {
            animateText1.start({
                opacity: 0,
                y: '5vw',
            });
        }
        if (!inView) {
            animateText2.start({
                opacity: 0,
                y: '5vw',
            });
        }
        if (!inView) {
            animateText3.start({
                opacity: 0,
                y: '5vw',
            });
        }
        if (!inView) {
            animateText4.start({
                opacity: 0,
                y: '5vw',
            });
        }
    }, [inView, animateText1, animateText2, animateText3, animateText4]);
    
    useEffect(() => {
        if (inView) {
            animateSubtitle1.start({
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring', duration: 2, delay: 2
              }
            });
        }
        if (inView) {
            animateSubtitle2.start({
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring', duration: 2, delay: 2.3
              }
            });
        }
        if (inView) {
            animateSubtitle3.start({
              opacity: 1,
              x: 0,
              transition: {
                type: 'spring', duration: 2, delay: 2.5
              }
            });
        }
        
        if (!inView) {
            animateSubtitle1.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            animateSubtitle2.start({
                opacity: 0,
                x: '-5vw',
            });
        }
        if (!inView) {
            animateSubtitle3.start({
                opacity: 0,
                x: '-5vw',
            });
        }

    }, [inView, animateSubtitle1, animateSubtitle2, animateSubtitle3]);
    

    return ( 
        <>
            <section
                ref={ refHome }
                id='Home'
                className='w-full h-screen bg-secondary text-white
                        font-roboto flex justify-center items-center static'
            >
                <ButtonScroll />
                <motion.div
                    animate={ animateImg }
                    ref={ ref }
                    className='opacity-0 relative sm:h-full sm:w-full flex justify-end'
                >
                <   img 
                        src={ 'legacyierWeb.webp' } alt="" 
                        className='relative opacity-5 sm:mx-10 sm:py-20 blur-md'
                    />
                    <h1
                        className='hidden sm:block absolute text-xs text-text-mini bottom-24 
                                   opacity-10 right-20'
                    >
                        Coming soon Legacyier...
                    </h1>
                </motion.div>
                <div
                    className='absolute max-w-250 h-screen flex'
                >
                    <div
                        className='grid grid-cols-1 content-between py-10'
                    >
                        <div
                            className='flex justify-start items-center 
                                    sm:space-x-6 space-x-3 mx-2 sm:mx-0'
                        >
                            <motion.a
                                animate= { iconAnimate5 }
                                href="https://www.linkedin.com/in/angel-ramirez-08468212b/"
                                target="_blank"
                                rel="noreferrer"
                                className='opacity-0'
                            >
                                <FaLinkedinIn 
                                    className='text-lg sm:text-xl text-text-mini hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </motion.a>
                            <motion.a
                                animate= { iconAnimate4 }
                                href="https://github.com/ImJars"
                                target="_blank"
                                rel="noreferrer"
                                className='opacity-0'
                            >
                                <FiGithub 
                                    className='text-lg sm:text-xl text-text-mini hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </motion.a>
                            <motion.a
                                animate= { iconAnimate3 }
                                href="https://twitter.com/Im_Jars"
                                target="_blank"
                                rel="noreferrer"
                                className='opacity-0'
                            >
                                <FaTwitter 
                                    className='text-lg sm:text-xl text-text-mini hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </motion.a>
                            <motion.a
                                animate= { iconAnimate2 }
                                href="https://www.instagram.com/legacyier_official/"
                                target="_blank"
                                rel="noreferrer"
                                className='opacity-0'
                            >
                                <FaInstagram 
                                    className='text-lg sm:text-xl text-text-mini hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </motion.a>
                            <motion.a 
                                animate= { iconAnimate1 }
                                href="https://es-es.facebook.com/legacyierOfficial"
                                target="_blank"
                                rel="noreferrer"
                                className='opacity-0'
                            >
                                <FaFacebookF 
                                    className='text-lg sm:text-xl text-text-mini hover:text-septenary
                                            transition duration-500 ease-in-out'
                                />
                            </motion.a>
                        </div>
                        <div
                            className='mx-2 sm:mx-0'
                        >
                            <motion.h1
                                animate= { animateText1 }
                                className='opacity-0 text-sm tracking-widest'
                            >
                                Hi everyone,
                            </motion.h1>
                            <motion.h2
                                animate= { animateText2 }
                                className='opacity-0 text-3xl sm:text-5xl font-bold'
                            >
                                I'm Software Developer
                            </motion.h2>
                            <motion.h3
                                animate= { animateText3 }
                                className='opacity-0 text-xl text-septenary'
                            >
                                I build things for the web.
                            </motion.h3>
                            <motion.p
                                animate= { animateText4 }
                                className='opacity-0 sm:w-1/2 text-sm mt-2 text-text-mini sm:tracking-wider'
                            >
                                I'm a software developer specializing in creating exceptional 
                                products and digital experiences. I am currently focused on 
                                creating <font className='text-septenary'>Web3</font> technology products.
                            </motion.p>
                        </div>
                        <div
                            className='flex mx-2 sm:mx-0 sm:space-x-10 space-x-5'
                        >
                            <motion.div
                                animate= { animateSubtitle3 }
                                className='opacity-0'
                            >
                                <h1
                                    className='text-sm font-semibold'
                                >
                                    Email
                                </h1>
                                <a
                                    href="mailto:hi.legacyier@gmail.com"
                                    className='text-xs text-text-mini tracking-widest mt-1
                                                hover:text-septenary transition duration-500 ease-in-out'
                                >
                                    hi.legacyier@gmail.com
                                </a>
                            </motion.div>
                            <motion.div
                                animate= { animateSubtitle2 }
                                className='opacity-0 hidden sm:block'
                            >
                                <h1
                                    className='text-sm font-semibold'
                                >
                                    WhatsApp
                                </h1>
                                <a
                                    href="https://wa.link/01hnrf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className='text-xs text-text-mini tracking-widest mt-1
                                                hover:text-septenary transition duration-500 ease-in-out'
                                >
                                    +52 55 2914 7674
                                </a>
                            </motion.div>
                            <motion.div
                                animate= { animateSubtitle1 }
                                className='opacity-0'
                            >
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
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Home;