import React from 'react'
import { motion } from 'framer-motion';

const AboutCard = ({ icon, description, animateElement }) => {
    return ( 
        <>
            <motion.div
                animate={ animateElement }
                className='rounded-lg px-4 py-10
                        bg-secondary text-white'
            >
                <div
                    className='flex justify-center
                            text-3xl mb-4'
                >
                    { icon }
                </div>
                <h1
                    className='flex justify-center text-center font-sans text-xs tracking-wider'
                >
                    { description }
                </h1>
            </motion.div>
        </>
     );
}
 
export default AboutCard;