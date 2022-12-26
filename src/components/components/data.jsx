import React from 'react'

const Data = ({ data, children, classNames, link }) => {
    return ( 
        <>
            <div className='flex text-xs sm:text-sm font-sans mb-2'>
                <h1
                    className='font-semibold'
                >
                    <font className="text-septenary">
                        &#x25B8;&nbsp;
                    </font>
                    { data }
                </h1>
                <a
                    className={`${ classNames } sm:ml-2 text-text-mini sm:tracking-wider`}
                    href={ link }
                    target="_blank"
                    rel="noreferrer"
                >
                    &nbsp;{ children }
                </a>
            </div>
        </>
     );
}
 
export default Data;