import React from 'react';

const SliderComponet = ({ min, max, value, handleChange, step}) => {
    return ( 
        <>
            <input
                type="range" 
                className='w-full mx-40 transition duration-500 ease-in-out'
                min={ min }
                max={ max }
                defaultValue={ value }
                onChange= { handleChange }
                step={ step }
            />
        </>
     );
}
 
export default SliderComponet;