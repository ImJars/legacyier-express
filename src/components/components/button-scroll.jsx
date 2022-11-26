import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

function ButtonScroll() {
    return (
        <>
            <button
                className='fixed block sm:hidden bottom-10 
                        right-5 z-50 bg-secondary text-white 
                        rounded-full p-4'
            >
                <AiOutlineArrowUp 
                    className='text-2xl font-bold'
                />
            </button>
        </>
    )
}

export default ButtonScroll
