import React from 'react'

const Title = ({ title, subtitle}) => {
    return ( 
        <>
            <div
                className='border-l-2 border-tertiary pl-2'
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
            </div>
        </>
     );
}
 
export default Title;