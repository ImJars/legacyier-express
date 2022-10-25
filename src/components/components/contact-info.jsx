import React from 'react'

const ContactInfo = ({ title, icon, children }) => {
    return ( 
        <>
            <div
                className='flex flex-col font-sans mt-4'
            >
                <h1
                    className='text-base font-semibold'
                >
                    { title }
                </h1>
                <div
                    className='flex content-center mt-1'
                >
                    <div
                        className='mr-1 text-septenary text-xl flex items-center'
                    >
                        { icon }
                    </div>
                    <h2
                        className='text-sm text-text-mini tracking-wider'
                    >
                        { children }
                    </h2>
                </div>
            </div>
        </>
     );
}
 
export default ContactInfo;