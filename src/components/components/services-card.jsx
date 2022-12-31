import React from 'react';
import { motion } from 'framer-motion';

const ServicesCard = ({ animateCardServices, number, title, children}) => {
    return ( 
        <>
            <motion.div
                animate={ animateCardServices }
                className='bg-secondary px-2 py-8 sm:py-10 rounded-lg flex 
                            flex-col justify-center text-center
                            font-roboto items-center hover:scale-105
                            hover:transition hover:duration-200 hover:ease-in-out'
            >
                <div
                    className='flex justify-center items-center'
                >
                    <h1
                        className='border border-septenary 
                                rounded-full py-4 px-5 text-2xl
                                font-bold text-septenary mb-4'
                    >
                        { number }
                    </h1>
                </div>
                <h1
                    className='text-base sm:text-lg font-bold mb-2 tracking-wide'
                >
                    { title }
                </h1>
                <p
                    className='text-xs xl:text-sm text-text-mini'
                >
                    { children }
                </p>
            </motion.div>
        </>
     );
}
 
export default ServicesCard;