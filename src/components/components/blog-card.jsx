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
                    className='flex'
                >
                    <div className='relative'>
                        <img
                            className='z-0 w-project-img' 
                            src="img-1.webp" 
                            alt="" 
                        />
                        <div
                            className='absolute top-0 w-full h-full 
                                    bg-septenary bg-opacity-70 hover:bg-inherit
                                    transition duration-500 ease-in-out'
                        />
                    </div>
                    <div
                        className='w-project-card grid content-center'
                    >
                        <div
                            className='bg-secondary transform -translate-x-10
                                        p-5'
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