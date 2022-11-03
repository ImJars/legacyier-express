import React from 'react';

const WorkCard = ({ nameImg, title, link, icon}) => {
    return ( 
        <>
            <div
                className='rounded-2xl font-roboto'
            >
                <img
                    className='rounded-lg' 
                    src={ nameImg } 
                    alt="" 
                />
                <div
                    className='flex justify-between items-center mt-4
                    bg-secondary p-4 rounded-2xl'
                >
                    <h1
                        className='text-text-mini text-sm tracking-wider'
                    >
                        { title }
                    </h1>
                    <a
                        href={ link }
                        className='text-septenary flex justify-center items-center
                                text-xl'
                    >
                        { icon }
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default WorkCard;