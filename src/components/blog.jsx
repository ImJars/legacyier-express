import React from 'react';
import BlogCard from './components/blog-card';
import Title from './components/title';
import Img01 from '../images/designer-01.jpg';
import Img02 from '../images/designer-02.jpg';
import Img03 from '../images/designer-03.jpg';
import Img06 from '../images/designer-06.jpg';


const Blog = () => {
    return ( 
        <>
            <section
                id='Blog'
                className="w-full h-sfull bg-primary text-white
                font-sans flex justify-center items-center py-20"
            >   
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title={'My Blog'}
                        subtitle={'The last posts about graphic design and web design'}
                    />
                    <div
                        className='grid grid-cols-2 gap-10 mt-14'
                    >
                        <BlogCard 
                            img={ Img01 }
                            date={'09 March 2020'}
                            hastag01= { '#design' }
                            hastag02={ '#web' }
                            hastag03={ '#graphic' }
                            title={'Whats the difference between graphic design and web design?'}
                            description={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                            link={'https://github.com/ImJars'}
                        />
                        <BlogCard 
                            img={ Img02 }
                            date={'09 March 2020'}
                            hastag01= { '#design' }
                            hastag02={ '#web' }
                            hastag03={ '#graphic' }
                            title={'How to create successful website for yout business and brand?'}
                            description={
                                'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                            link={'https://github.com/ImJars'}
                        />
                        <BlogCard 
                            img={ Img03 }
                            date={'09 March 2020'}
                            hastag01= { '#design' }
                            hastag02={ '#web' }
                            hastag03={ '#graphic' }
                            title={'How to create successful website for yout business and brand?'}
                            description={
                                'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                            link={'https://github.com/ImJars'}
                        />
                        <BlogCard 
                            img={ Img06 }
                            date={'09 March 2020'}
                            hastag01= { '#design' }
                            hastag02={ '#web' }
                            hastag03={ '#graphic' }
                            title={'How to create successful website for yout business and brand?'}
                            description={
                                'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                            link={'https://github.com/ImJars'}
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Blog;