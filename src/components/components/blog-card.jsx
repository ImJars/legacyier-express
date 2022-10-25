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
                className='static font-sans pb-40'
            >
                <div
                    className='relative'
                >
                    <img 
                        src={ img } 
                        alt="blog" 
                        className='rounded-sm'
                    />
                    <div
                        className='absolute rounded-2xl bg-secondary mx-4 px-6 py-6
                        -bottom-44 left-0'
                    >
                        <div
                            className='flex space-x-2 text-xs 
                                    text-text-mini tracking-wide'
                        >
                            <h3
                                className='border-l-2 border-septenary pl-2'
                            >
                                { date }
                            </h3>
                            <font>
                                &#8226;
                            </font>
                            <h2>
                                { hastag01}
                            </h2>
                            <h2>
                                { hastag02 }
                            </h2>
                            <h2>
                                { hastag03 }
                            </h2>
                        </div>
                        <h1
                            className='text-base font-semibold mt-2'
                        >
                            { title }
                        </h1>
                        <p
                            className='text-xs mt-2 text-text-mini'
                        >
                            { description }
                        </p>
                        <div>
                            <a
                                className='rounded-md bg-septenary text-sm
                                        text-white px-4 py-2 mt-4 inline-block
                                        font-semibold' 
                                href={ link }
                            >
                                Read more &#8594;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default BlogCard;