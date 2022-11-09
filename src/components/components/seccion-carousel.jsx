import React from 'react'

const Seccion = ({ date, business, worked, title, description }) => {
    return ( 
        <>
            <div
                className='w-250 h-full no-seleccionable flex 
                        justify-center font-roboto'
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
                        className='text-3xl font-bold tracking-wide'
                    >
                        { business }
                    </h1>
                    <h2
                        className='text-lg text-septenary tracking-wider
                                    font-medium mb-6'
                    >
                        &#60; { worked } &#47; &#62;
                    </h2>
                    <h3
                        className='font-medium tracking-wide mb-2'
                    >
                        { title }
                    </h3>
                    <p
                        className='w-text text-sm tracking-wider flex justify-center'
                    >
                        { description }
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Seccion;