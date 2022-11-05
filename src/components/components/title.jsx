import React from 'react'
import { motion } from 'framer-motion';

const Title = ({ animateTitle, title, subtitle}) => {
    return ( 
        <>
            <motion.div
                animate={ animateTitle }
                className='font-roboto tracking-wider border-l-4 border-septenary pl-4'
            >
                <h1
                    className='text-2xl font-bold'
                >
                    { title }
                </h1>
                <h2
                    className='text-xs'
                >
                    { subtitle }
                </h2>
            </motion.div>
        </>
     );
}
 
export default Title;