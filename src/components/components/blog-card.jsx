import React, { useEffect } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const animateSection = useAnimation();

    useEffect(() => {
        if (inView) {
            animateSection.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2
                }
            });
        }
        if (!inView) {
            animateSection.start({
                opacity: 0,
                y: '5vw'
            });
        }
    }, [inView, animateSection]);
    
    return ( 
        <>
            <motion.div
                ref={ ref }
                animate={ animateSection }
                className='max-w-pantalla min-h-pantalla font-roboto'
            >
                <div
                    className='flex relative md:static'
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
                        className='md:w-project-card flex items-center h-full
                                absolute md:static bg-secondary md:bg-inherit'
                    >
                        <div
                            className='md:transform md:-translate-x-10
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
                                className='bg-secondary py-4 md:px-8 rounded-md text-sm'
                            >
                                <p>
                                    { descriptionProject }
                                </p>
                            </div>
                            <ol
                                className='font-mono flex justify-end text-xs md:space-x-4 space-x-2 text-text-mini
                                            mt-2'
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
            </motion.div>
        </>
     );
}
 
export default BlogCard;