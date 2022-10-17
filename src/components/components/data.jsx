import React from 'react'

const Data = ({ data, children }) => {
    return ( 
        <>
            <div className='flex text-sm font-sans mb-2'>
                <h1
                    className='font-semibold'
                >
                    { data }
                </h1>
                <h2
                    className='ml-2 text-text-mini'
                >
                    { children }
                </h2>
            </div>
        </>
     );
}
 
export default Data;