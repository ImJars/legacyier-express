import React from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const WorkCard = ({
    classNamesGit,
    classNamesLink,
    title,
    description,
    tecnologies,
    tecnologies2,
    tecnologies3,
    tecnologies4,
}) => {
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
                            className={ `${ classNamesGit } hover:text-septenary transition duration-300 ease-in-out`}
                        >
                            <FiGithub />
                        </a>
                        <a 
                            href="https://github.com/ImJars"
                            target="_blank"
                            rel="noreferrer"
                            className={ `${ classNamesLink } hover:text-septenary transition duration-300 ease-in-out`}
                        >
                            <FiExternalLink />
                        </a>
                    </div>
                </div>
                <h1
                    className='text-xl font-bold mt-8 flex'
                >
                    { title }
                </h1> 
                <h2
                    className='text-sm mt-4 flex'
                >
                    { description }
                </h2>
                <ol
                    className='flex space-x-2 mt-8 text-xs text-text-mini'
                >
                    <li>
                        { tecnologies }
                    </li>
                    <li>
                        { tecnologies2 }
                    </li>
                    <li>
                        { tecnologies3 }
                    </li>
                    <li>
                        { tecnologies4 }
                    </li>
                </ol>
            </div>
        </>
     );
}
 
export default WorkCard;