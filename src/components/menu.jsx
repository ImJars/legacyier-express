import React from 'react';
import { BiGitBranch } from 'react-icons/bi';

const Menu = () => {
    return ( 
        <>
         <div
            className='fixed w-20 h-screen bg-primary 
                    text-white font-sans'
         >
            <div
                className='h-screen grid content-between'
            >
                <div>
                    <div>
                        <a
                            href="#Menu"
                            className='bg-tertiary flex justify-center
                                     m-5 py-1.5 rounded-full content-center
                                     text-xl font-semibold'    
                        >
                            A
                        </a>
                    </div>
                </div>
                
                    <div
                        className='list-none space-y-12 text-sm'
                    >
                        <li
                            className='-rotate-90 text-center'
                        >
                            <a href="#Home">
                                Home
                            </a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <a href="#About">
                                About
                            </a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <a href="#Services">
                                Services
                            </a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <a href="#Works">
                                Works
                            </a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <a href="#Blog">
                                Blog
                            </a>
                        </li>
                        <li
                            className='-rotate-90 text-center'
                        >
                            <a href="#Contact">
                                Contact
                            </a>
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