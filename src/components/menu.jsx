import React, { useState } from 'react';
import { BiGitBranch } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Menu = ({ 
    animationHome, 
    animationAbout, 
    animateIndicator, 
    animationServices,
    animationWorks,
    animationBlog,
    animationContact
}) => {

    const [tab, setTab] = useState(1);

    function changeMenu (index) {
        setTab(index);
        if ( index === 1 ) {
            document.querySelector('.tab-indicator').style.top = '4%';
        } else if ( index === 2 ) {
            document.querySelector('.tab-indicator').style.top = '22.5%';
        } else if ( index === 3 ) {
            document.querySelector('.tab-indicator').style.top = '41.5%';
        } else if ( index === 4 ) {
            document.querySelector('.tab-indicator').style.top = '60.5%';
        } else if ( index === 5 ) {
            document.querySelector('.tab-indicator').style.top = '79%';
        } else if ( index === 6 ) {
            document.querySelector('.tab-indicator').style.top = '97.5%';
        }
        
    }
    return ( 
        <>
         <div
            className='fixed w-20 h-screen bg-primary 
                    text-white font-sans z-50 transform top-0 left-0'
         >
            <div
                className='h-screen grid content-between'
            >
                <div>
                    <div>
                        <a
                            href="#Menu"
                            className='bg-septenary flex justify-center
                                     m-5 py-1.5 rounded-full content-center
                                     text-xl font-semibold'    
                        >
                            A
                        </a>
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
                                onClick={ () => changeMenu(1) }
                                className={ tab === 1 ? 'text-tertiary transition duration-700 ease-in-out' : 'text-white transition duration-700 ease-in-out' }   
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
                                onClick={ () => changeMenu(2) }
                                className={ tab === 2 ? 'text-tertiary transition duration-700 ease-in-out' : 'text-white transition duration-700 ease-in-out' }
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
                                onClick={ () => changeMenu(3) }
                                className={ tab === 3 ? 'text-tertiary transition duration-700 ease-in-out' : 'text-white transition duration-700 ease-in-out' }
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
                                onClick={ () => changeMenu(4) }
                                className={ tab === 4 ? 'text-tertiary transition duration-700 ease-in-out' : 'text-white transition duration-700 ease-in-out' }
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
                                onClick={ () => changeMenu(5) }
                                className={ tab === 5 ? 'text-tertiary transition duration-700 ease-in-out' : 'text-white transition duration-700 ease-in-out' } 
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
                                onClick={ () => changeMenu(6) }
                                className={ tab === 6 ? 'text-tertiary transition duration-700 ease-in-out' : 'text-white transition duration-700 ease-in-out' } 
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
         </div>
        </>
     );
}
 
export default Menu;