import React from 'react'

const Title = ({ title, subtitle}) => {
    return ( 
        <>
            <div
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
            </div>
        </>
     );
}
 
export default Title;