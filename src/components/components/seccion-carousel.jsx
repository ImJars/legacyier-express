import React from 'react'

const Seccion = ({ 
    ref, 
    date, 
    business, 
    worked, 
    title, 
    description,
}) => {
    return ( 
        <>
            <div
                ref={ ref }
                className='max-w-250 no-seleccionable font-roboto mt-5 sm:mx-14'
            >
                <div
                    className='text-center'
                >
                    <h4
                        className='text-xs tracking-widest mb-2 text-text-mini'
                    >
                        { date }
                    </h4>
                    <h1
                        className='text-2xl sm:text-3xl font-bold tracking-wide'
                    >
                        { business }
                    </h1>
                    <h2
                        className='text-sm sm:text-lg text-septenary tracking-wider
                                    font-medium mb-4'
                    >
                        &#60; { worked } &#47; &#62;
                    </h2>
                    <h3
                        className='text-sm sm:text-base font-bold tracking-wide'
                    >
                        { title }
                    </h3>
                    <div>
                        <p
                            className='px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm tracking-wider flex text-center'
                        >
                            { description }
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Seccion;