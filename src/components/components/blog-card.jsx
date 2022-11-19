import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const BlogCard = ({
    imgProject,
    statusProject,
    titleProject,
    descriptionProject,
    tecnologiesProject,
    tecnologiesProject2,
    tecnologiesProject3,
    tecnologiesProject4,
    tecnologiesProject5,
    urlGithubRepo,
    urlProject,
}) => {
    return ( 
        <>
            <div
                className='max-w-pantalla min-h-pantalla static font-roboto'
            >
                <div
                    className='flex'
                >
                    <div className='relative cursor-pointer'>
                        <img
                            className='z-0 w-project-img' 
                            src={ imgProject }
                            alt="" 
                        />
                        <div
                            className='absolute top-0 w-full h-full 
                                    bg-septenary bg-opacity-70 hover:bg-inherit
                                    transition duration-500 ease-in-out'
                        />
                    </div>
                    <div
                        className='w-project-card flex items-center'
                    >
                        <div
                            className='transform -translate-x-10
                                        p-5 text-end'
                        >
                            <h1
                                className='text-sm text-septenary'
                            >
                                { statusProject }
                            </h1>
                            <h2
                                className='text-2xl font-bold'
                            >
                                { titleProject }
                            </h2>
                            <div
                                className='bg-secondary py-6 px-8 rounded-md text-sm'
                            >
                                <p>
                                    { descriptionProject }
                                </p>
                            </div>
                            <ol
                                className='flex justify-end text-xs space-x-4 text-text-mini
                                            tracking-wide mt-2'
                            >
                                <li>
                                    { tecnologiesProject }
                                </li>
                                <li>
                                    { tecnologiesProject2 }
                                </li>
                                <li>
                                    { tecnologiesProject3 }
                                </li>
                                <li>
                                    { tecnologiesProject4 }
                                </li>
                                <li>
                                    { tecnologiesProject5 }
                                </li>
                            </ol>
                            <div
                                className='flex justify-end space-x-4 mt-4
                                            text-xl'
                            >
                                <a
                                    href={ urlGithubRepo }
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hover:text-septenary transition duration-300 ease-in-out'
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href={ urlProject }
                                    target='_blank'
                                    rel='noreferrer'
                                    className='hover:text-septenary transition duration-300 ease-in-out'
                                >
                                    <FiExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BlogCard;