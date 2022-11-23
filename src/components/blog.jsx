import React from 'react';
import BlogCard from './components/blog-card';
import Title from './components/title';
import BlogCardDouble from './components/blog-card-doble';
import WorkCard from './components/work-card';

export const Blog = ({ refBlog }) => {
    return ( 
        <>
            <section
                ref={ refBlog }
                id='Blog'
                className="w-full h-sfull bg-primary text-white
                font-sans flex flex-col justify-center items-center py-20"
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
                <div
                    className='max-w-pantalla flex flex-col mt-28'
                >
                    <Title 
                        title={'Other Noteworthy Projects'}
                        subtitle={'Some of my projects over the years'}
                    />
                    <div
                        className='grid grid-cols-3 gap-4 mt-14'
                    >
                        <WorkCard 
                            title={'Legacyier Express'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'GatsbyJS'}
                            tecnologies2={'TailwindCSS'}
                            tecnologies3={'Framer Motion'}
                            tecnologies4={'VS Code'}
                        />
                        <WorkCard 
                            classNamesLink={'hidden'}
                            title={'Legacyier Expert'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'ReactJS'}
                            tecnologies2={'TailwindCSS'}
                            tecnologies3={'Styled Components'}
                        />
                        <WorkCard 
                            classNamesGit={'hidden'}
                            title={'Proyecto CMO'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'.NET'}
                            tecnologies2={'MySQL'}
                            tecnologies3={'Visual Studio'}
                        />
                        <WorkCard 
                            title={'Calculo mano de obra'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'.NET'}
                            tecnologies2={'MySQL'}
                            tecnologies3={'Visual Studio'}
                            tecnologies4={'Excel'}
                        />
                        <WorkCard 
                            classNamesLink={'hidden'}
                            title={'Gestion de proyectos'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'.NET'}
                            tecnologies2={'MySQL'}
                            tecnologies3={'Visual Studio'}
                            tecnologies4={'Excel'}
                        />
                        <WorkCard 
                            classNamesGit={'hidden'}
                            title={'Proyecto Bonafont'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'Excel'}
                            tecnologies2={'Power BI'}
                            tecnologies3={'Visual Basic'}
                            tecnologies4={'SQL Server'}
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Blog;