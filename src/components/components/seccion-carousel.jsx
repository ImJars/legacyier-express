import React from 'react'

const Seccion = ({ business, worked, title, description }) => {
    return ( 
        <>
            <div
                className='w-250 min-h-250 no-seleccionable'
            >
                <div>
                    <h1>
                        { business }
                    </h1>
                    <h2>
                        { worked }
                    </h2>
                    <h3>
                        { title }
                    </h3>
                    <p>
                        { description }
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Seccion;