import React from 'react';
import BlogCard from './components/blog-card';
import Title from './components/title';
import BlogCardDouble from './components/blog-card-doble';

export const Blog = ({ refBlog }) => {
    return ( 
        <>
            <section
                ref={ refBlog }
                id='Blog'
                className="w-full h-sfull bg-primary text-white
                font-sans flex justify-center items-center py-20"
            >   
                <div
                    className='max-w-pantalla flex flex-col'
                >
                    <Title 
                        title={'Some Things I’ve Built'}
                        subtitle={'Some of my projects over the years'}
                    />
                    <div
                        className='grid grid-cols-1 gap-10 mt-14'
                    >
                        <BlogCard 
                            imgProject={ 'img-3.webp' }
                            statusProject={ 'Latest Project' }
                            titleProject={ 'Legacyier Express' }
                            descriptionProject={
                                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vitae officiis quae aut eligendi eveniet, ducimus autem nulla iure officia debitis saepe laudantium laborum tempore fuga incidunt? Praesentium, rem consequuntur.'
                            }
                            tecnologiesProject={ 'GatsbyJS' }
                            tecnologiesProject2={ 'TailwindCSS' }
                            tecnologiesProject3={ 'Framer Motion' }
                            tecnologiesProject4={ 'VS Code' }
                            tecnologiesProject5={ 'Github' }
                            urlGithubRepo={ 'https://github.com/ImJars' }
                            urlProject={ 'https://github.com/ImJars' }
                        />
                        <BlogCardDouble 
                            imgProject={ 'img-2.webp' }
                            statusProject={ 'Latest Project' }
                            titleProject={ 'Legacyier Expert' }
                            descriptionProject={
                                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vitae officiis quae aut eligendi eveniet, ducimus autem nulla iure officia debitis saepe laudantium laborum tempore fuga incidunt? Praesentium, rem consequuntur.'
                            }
                            tecnologiesProject={ 'ReactJS' }
                            tecnologiesProject2={ 'TailwindCSS' }
                            tecnologiesProject3={ 'Styled Components' }
                            tecnologiesProject4={ 'VS Code' }
                            tecnologiesProject5={ 'Github' }
                            urlGithubRepo={ 'https://github.com/ImJars' }
                            urlProject={ 'https://github.com/ImJars' }
                        />
                        <BlogCard 
                            imgProject={ 'img-5.webp' }
                            statusProject={ 'Latest Project' }
                            titleProject={ 'Legacyier Express' }
                            descriptionProject={
                                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos vitae officiis quae aut eligendi eveniet, ducimus autem nulla iure officia debitis saepe laudantium laborum tempore fuga incidunt? Praesentium, rem consequuntur.'
                            }
                            tecnologiesProject={ 'GatsbyJS' }
                            tecnologiesProject2={ 'TailwindCSS' }
                            tecnologiesProject3={ 'Framer Motion' }
                            tecnologiesProject4={ 'VS Code' }
                            tecnologiesProject5={ 'Github' }
                            urlGithubRepo={ 'https://github.com/ImJars' }
                            urlProject={ 'https://github.com/ImJars' }
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Blog;