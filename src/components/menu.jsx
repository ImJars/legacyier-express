import React, { useEffect } from 'react';
import { BiGitBranch } from 'react-icons/bi';
import { motion, useAnimation, useCycle } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Menu = ({ 
    animationHome, 
    animationAbout, 
    animateIndicator, 
    animationServices,
    animationWorks,
    animationBlog,
    animationContact
}) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const animateMenu = useAnimation();

    useEffect(() => {
        if (inView) {
            animateMenu.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, delay: 4
                }
            });
        }

        if (!inView) {
            animateMenu.start({
                opacity: 0,
            });
        }
    }, [inView, animateMenu]);

    const [visibleMenu, setVisibleMenu] = useCycle(false, true);

    function handleMenu() {
        setVisibleMenu();
    }
    
    return ( 
        <>
         <motion.div
            ref={ ref }
            animate= { animateMenu }
            className='opacity-0 fixed w-20 h-screen bg-primary 
                    text-white font-roboto tracking-wider z-50 transform top-0 left-0'
         >
            <div
                className='h-screen grid content-between'
            >
                <div>
                    <div>
                        <a
                            onClick={ e => handleMenu() }
                            href="#Menu"
                            className='bg-septenary flex justify-center
                                     m-5 py-1.5 rounded-full content-center
                                     text-xl font-semibold'    
                        >
                            A
                        </a>
                        <h1
                            className={ visibleMenu ? 'opacity-100 transition duration-700 ease-out transform translate-x-20' : 'opacity-0 transition duration-700 ease-out transform -translate-x-20' }
                        >
                            Esto es una Menu
                        </h1>
                    </div>
                </div>
                    <div
                        className='list-none transform space-y-12 text-sm'
                    >
                        <li
                            className='-rotate-90 text-center'
                        >
                            <motion.a
                                animate={ animationHome }
                                href="#Home"
                                className={ 'transition duration-500 ease-in-out' }   
                            >
                                Home
                            </motion.a>
                        </li>
                        <motion.div animate={ animateIndicator } className='tab-indicator'/>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <motion.a 
                                animate={ animationAbout }
                                href="#About"
                                className={ 'transition duration-500 ease-in-out' }
                            >
                                About
                            </motion.a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <motion.a 
                                animate={ animationServices }
                                href="#Services"
                                className={ 'transition duration-500 ease-in-out' }
                            >
                                Services
                            </motion.a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <motion.a
                                animate={ animationWorks }
                                href="#Works"
                                className={ 'transition duration-500 ease-in-out' }
                            >
                                Works
                            </motion.a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <motion.a
                                animate={ animationBlog }
                                href="#Blog"
                                className={ 'transition duration-500 ease-in-out' } 
                            >
                                Blog
                            </motion.a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <motion.a
                                animate={ animationContact }
                                href="#Contact"
                                className={ 'transition duration-500 ease-in-out' } 
                            >
                                Contact
                            </motion.a>
                        </li>
                    </div>
                <div
                    className='flex justify-center mb-10 text-2xl'
                >
                    <a
                        href="https://github.com/ImJars"
                    >
                        <BiGitBranch />
                    </a>
                </div>
            </div>
         </motion.div>
        </>
     );
}
 
export default Menu;