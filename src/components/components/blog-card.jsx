import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const BlogCard = ({ 

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
                            src="img-1.webp" 
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
                                Featured Project
                            </h1>
                            <h2
                                className='text-2xl font-bold'
                            >
                                Legacyier Express
                            </h2>
                            <div
                                className='bg-secondary py-6 px-8 rounded-md text-sm'
                            >
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vitae officiis quae aut eligendi eveniet, ducimus autem nulla iure officia debitis saepe laudantium laborum tempore fuga incidunt? Praesentium, rem consequuntur.
                                </p>
                            </div>
                            <ol
                                className='flex justify-end text-xs space-x-4 text-text-mini
                                            tracking-wide mt-2'
                            >
                                <li>
                                    VS Code
                                </li>
                                <li>
                                    React
                                </li>
                                <li>
                                    TailwindCSS
                                </li>
                                <li>
                                    GatsbyJS
                                </li>
                                <li>
                                    Styled Components
                                </li>
                            </ol>
                            <div
                                className='flex justify-end space-x-4 mt-4
                                            text-xl'
                            >
                                <a
                                    href="#"
                                    className='hover:text-septenary transition duration-300 ease-in-out'
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href="#"
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