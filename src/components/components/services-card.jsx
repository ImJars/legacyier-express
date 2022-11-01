import React from 'react';

const ServicesCard = ({ number, title, children}) => {
    return ( 
        <>
            <div
                className='bg-secondary px-4 py-10 rounded-lg flex 
                            flex-col justify-center text-center
                            font-roboto items-center hover:scale-105
                            transition duration-200 ease-in-out'
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
                    className='text-lg font-bold mb-2 tracking-wide'
                >
                    { title }
                </h1>
                <p
                    className='text-sm text-text-mini'
                >
                    { children }
                </p>
            </div>
        </>
     );
}
 
export default ServicesCard;