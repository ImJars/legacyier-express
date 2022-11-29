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
                className='no-seleccionable font-roboto p-20'
            >
                <div
                    className='max-w-250 text-center'
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
                                    font-medium mb-4'
                    >
                        &#60; { worked } &#47; &#62;
                    </h2>
                    <h3
                        className='font-bold tracking-wide mb-2'
                    >
                        { title }
                    </h3>
                    <div>
                        <p
                            className='p-5 text-sm tracking-wider flex text-center'
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