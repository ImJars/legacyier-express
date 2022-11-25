import React, { useEffect } from 'react';
import BlogCard from './components/blog-card';
import Title from './components/title';
import BlogCardDouble from './components/blog-card-doble';
import WorkCard from './components/work-card';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const Blog = ({ refBlog }) => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });
    const { ref: sectionRef, inView: inViewRef } = useInView({
        threshold: 0,
        triggerOnce: true
    });
    const { ref: sectionCard, inView: inViewCard } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const animateWorkTitle = useAnimation();
    const animateWorkTitleTwo = useAnimation();

    const animateCard = useAnimation();
    const animateCard2 = useAnimation();
    const animateCard3 = useAnimation();
    const animateCard4 = useAnimation();
    const animateCard5 = useAnimation();
    const animateCard6 = useAnimation();

    useEffect(() => {
        if (inView) {
            animateWorkTitle.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.2
                }
            });
        }
        if (!inView) {
            animateWorkTitle.start({
                opacity: 0,
                x: '-5vw'
            });
      } 
    }, [ inView, animateWorkTitle ]);
    
    useEffect(() => {
        if (inViewRef) {
            animateWorkTitleTwo.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.2
                }
            });
        }
        if (!inViewRef) {
            animateWorkTitleTwo.start({
                opacity: 0,
                x: '-5vw'
            });
      } 
    }, [ inViewRef, animateWorkTitleTwo ]);
    
    useEffect(() => {
        if (inViewCard) {
            animateCard.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.2
                }
            });
            animateCard2.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.4
                }
            });
            animateCard3.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.6
                }
            });
            animateCard4.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.8
                }
            });
            animateCard5.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 1
                }
            });
            animateCard6.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 2, delay: 1.2
                }
            });
        }
        if (!inViewCard) {
            animateCard.start({
                opacity: 0,
            });
            animateCard2.start({
                opacity: 0,
            });
            animateCard3.start({
                opacity: 0,
            });
            animateCard4.start({
                opacity: 0,
            });
            animateCard5.start({
                opacity: 0,
            });
            animateCard6.start({
                opacity: 0,
            });
      } 
    }, [ inViewCard, animateCard, animateCard2, animateCard3, animateCard4, animateCard5, animateCard6 ]);
    return ( 
        <>
            <section
                ref={ refBlog }
                id='Blog'
                className="w-full h-sfull bg-primary text-white
                font-sans flex flex-col justify-center items-center py-20"
            >   
                <div
                    ref={ ref }
                    className='max-w-pantalla flex flex-col'
                >
                    <Title
                        animateTitle={ animateWorkTitle }
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
                    ref={ sectionRef }
                    className='max-w-pantalla flex flex-col mt-28'
                >
                    <Title
                        animateTitle={ animateWorkTitleTwo }
                        title={'Other Noteworthy Projects'}
                        subtitle={'Some of my projects over the years'}
                    />
                    <div
                        ref={ sectionCard }
                        className='grid grid-cols-3 gap-4 mt-14'
                    >
                        <WorkCard
                            animateCard={ animateCard }
                            title={'Legacyier Express'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'GatsbyJS'}
                            tecnologies2={'TailwindCSS'}
                            tecnologies3={'Framer Motion'}
                            tecnologies4={'VS Code'}
                        />
                        <WorkCard 
                            animateCard={ animateCard2 }
                            classNamesLink={'hidden'}
                            title={'Legacyier Expert'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'ReactJS'}
                            tecnologies2={'TailwindCSS'}
                            tecnologies3={'Styled Components'}
                        />
                        <WorkCard 
                            animateCard={ animateCard3 }
                            classNamesGit={'hidden'}
                            title={'Proyecto CMO'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'.NET'}
                            tecnologies2={'MySQL'}
                            tecnologies3={'Visual Studio'}
                        />
                        <WorkCard 
                            animateCard={ animateCard4 }
                            title={'Calculo mano de obra'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'.NET'}
                            tecnologies2={'MySQL'}
                            tecnologies3={'Visual Studio'}
                            tecnologies4={'Excel'}
                        />
                        <WorkCard 
                            animateCard={ animateCard5 }
                            classNamesLink={'hidden'}
                            title={'Gestion de proyectos'}
                            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                            tecnologies={'.NET'}
                            tecnologies2={'MySQL'}
                            tecnologies3={'Visual Studio'}
                            tecnologies4={'Excel'}
                        />
                        <WorkCard 
                            animateCard={ animateCard6 }
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