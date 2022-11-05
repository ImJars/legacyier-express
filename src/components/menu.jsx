import React, { useEffect } from 'react';
import { BiGitBranch } from 'react-icons/bi';
import { motion, useAnimation, useCycle } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { DiGitBranch } from 'react-icons/di';
import { SiGmail } from 'react-icons/si';

const MenuProfile = styled.div`
    position: absolute;
    width: 425px;
    height: 150px;
    color: #000;
    &.inactive{
        transform: translateX(0px) translateY(-50px);
        visibility: hidden;
        transition: all 0.5s ease-in-out;
        opacity: 0;
    }
    &.active{
        transform: translateX(100px) translateY(-50px);
        visibility: visible;
        transition: all 0.5s ease-in-out;
        opacity: 1;
    }
`
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
                                     text-xl font-semibold hover:scale-110
                                     transition duration-200 ease-in-out
                                     '    
                        >
                            J
                        </a>
                        <MenuProfile
                            className={ visibleMenu ? 'active' : 'inactive' }
                        >
                            <div
                                className='bg-secondary rounded-xl h-full grid content-center'
                            >
                                <div
                                    className='bg-secondary flex flex-col justify-center items-center p-5 rounded-xl'
                                >
                                    <div
                                        className='flex justify-center items-center'
                                    >
                                        <img
                                            src='profile.webp'
                                            alt="profileImage"
                                            className='rounded-full w-20 h-16' 
                                        />
                                        <h1
                                            className='text-text-mini font-roboto tracking-wider text-xs ml-4'
                                        >
                                            'A person with a new idea is a crank until that idea succeeds.'
                                        </h1>
                                    </div>
                                    <div
                                        className='text-text-mini text-lg flex justify-end w-full space-x-2'
                                    >
                                        <a 
                                            className='hover:text-septenary transition duration-500 ease-in-out'
                                            href="https://wa.link/01hnrf"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <IoLogoWhatsapp />
                                        </a>
                                        <a 
                                            className='hover:text-septenary transition duration-500 ease-in-out'
                                            href="https://twitter.com/Im_Jars"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <AiOutlineTwitter />
                                        </a>
                                        <a 
                                            className='hover:text-septenary transition duration-500 ease-in-out'
                                            href="https://www.instagram.com/jars.little/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <AiFillInstagram />
                                        </a>
                                        <a 
                                            className='hover:text-septenary transition duration-500 ease-in-out'
                                            href="mailto:hi.legacyier@gmail.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <SiGmail />
                                        </a>
                                        <a 
                                            className='hover:text-septenary transition duration-500 ease-in-out'
                                            href="https://github.com/ImJars"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <DiGitBranch />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </MenuProfile>
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