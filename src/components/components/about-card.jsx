import React from 'react'

const AboutCard = ({ icon, description }) => {
    return ( 
        <>
            <div
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
            </div>
        </>
     );
}
 
export default AboutCard;