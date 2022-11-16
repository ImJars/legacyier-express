import React from 'react'

const BlogCard = ({ 
    img, 
    date, 
    hastag01, 
    hastag02, 
    hastag03,
    title,
    description,
    link,
}) => {
    return ( 
        <>
            <div
                className='max-w-pantalla min-h-pantalla static'
            >
                <div
                    className='relative h-full w-full flex'
                >
                    <div className='static'>
                        <img
                            className='z-0 relative w-project-img' 
                            src="img-1.webp" 
                            alt="" 
                        />
                        <div
                            className='absolute bg-septenary z-10 
                                     h-full top-0 opacity-30'
                        />
                    </div>
                    <div
                        className='relative w-project-card'
                    >
                        <div
                            className='absolute z-20 top-0 left-0 w-full h-full flex flex-col justify-center items-center'
                        >
                            <h1>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores consequuntur pariatur quaerat hic numquam eos provident obcaecati ex, doloremque deleniti quibusdam dignissimos et animi? Deleniti exercitationem similique officia rem! Sed.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BlogCard;