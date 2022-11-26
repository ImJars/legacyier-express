import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'

function ButtonScroll({ animateButton, classNames }) {
    return (
        <>
            <motion.a 
                href="#Home"
                animate={ animateButton }
                className={`${ classNames } fixed block sm:hidden bottom-10 
                            right-5 z-50 bg-secondary text-white 
                            rounded-full p-5`}
            >
                <button
                    className='flex items-center justify-center'
                >
                    <AiOutlineArrowUp 
                        className='text-2xl font-bold animate-pulse'
                    />
                </button>
            </motion.a>
        </>
    )
}

export default ButtonScroll
