import React from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const WorkCard = () => {
    return ( 
        <>
            <div
                className='w-full h-full font-roboto bg-secondary cursor-pointer 
                            flex flex-col px-6 py-10 hover:transform hover:-translate-y-2
                            hover:transition hover:duration-300 hover:ease-in-out'
            >
                <div
                    className='w-full flex justify-between text-xl'
                >
                    <div
                        className='flex items-center text-4xl text-septenary'
                    >
                        <AiOutlineFolder />
                    </div>
                    <div
                        className='flex gap-4 items-center'
                    >
                        <a 
                            href="https://github.com/ImJars"
                            target="_blank"
                            rel="noreferrer"
                            className='hover:text-septenary transition duration-300 ease-in-out'
                        >
                            <FiGithub />
                        </a>
                        <a 
                            href="https://github.com/ImJars"
                            target="_blank"
                            rel="noreferrer"
                            className='hover:text-septenary transition duration-300 ease-in-out'
                        >
                            <FiExternalLink />
                        </a>
                    </div>
                </div>
                <h1
                    className='text-xl font-bold mt-8 flex'
                >
                    Legacyier Express
                </h1> 
                <h2
                    className='text-sm mt-4 flex'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <ol
                    className='flex space-x-2 mt-8 text-xs text-text-mini'
                >
                    <li>
                        GatsbyJS
                    </li>
                    <li>
                        TailwindCSS
                    </li>
                    <li>
                        Framer Motion
                    </li>
                </ol>
            </div>
        </>
     );
}
 
export default WorkCard;