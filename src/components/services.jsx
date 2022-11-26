import React, { useEffect } from 'react';
import ServicesCard from './components/services-card';
import Title from './components/title';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Services = ({ refServices }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const animateServicesTitle = useAnimation();
    const animateCard_1 = useAnimation();
    const animateCard_2 = useAnimation();
    const animateCard_3 = useAnimation();
    const animateCard_4 = useAnimation();
    const animateCard_5 = useAnimation();
    const animateCard_6 = useAnimation();

    useEffect(() => {
        if (inView) {
            animateServicesTitle.start({
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring' ,duration: 2, delay: 0.2
                }
            });
            animateCard_1.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 1, delay: 1
                }
            });
            animateCard_2.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 1, delay: 1.2
                }
            });
            animateCard_3.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 1, delay: 1.4
                }
            });
            animateCard_4.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 1, delay: 1.6
                }
            });
            animateCard_5.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 1, delay: 1.8
                }
            });
            animateCard_6.start({
                opacity: 1,
                transition: {
                    type: 'spring' ,duration: 1, delay: 2
                }
            });
        }

        if (!inView) {
            animateServicesTitle.start({
                opacity: 0,
                x: '-5vw'
            });
            animateCard_1.start({
                opacity: 0,
            });
            animateCard_2.start({
                opacity: 0,
            });
            animateCard_3.start({
                opacity: 0,
            });
            animateCard_4.start({
                opacity: 0,
            });
            animateCard_5.start({
                opacity: 0,
            });
            animateCard_6.start({
                opacity: 0,
            });
        }
    }, [inView, animateServicesTitle, animateCard_1, animateCard_2, animateCard_3, animateCard_4, animateCard_5, animateCard_6]);
    
    return ( 
        <>
            <section
                ref= { refServices }
                id='Services'
                className="w-full h-full sm:h-screen bg-primary text-white
                        font-roboto flex justify-center items-center"
            >
                <div
                    ref={ ref }
                    className='max-w-250 flex flex-col my-20 sm:my-0 mx-4 sm:mx-0'
                >
                    <Title
                        animateTitle={ animateServicesTitle }
                        title='My Services'
                        subtitle='My work with several clients'
                    />
                    <div
                        className='grid grid-cols-2 sm:grid-cols-3 gap-4 
                                sm:gap-8 mt-14'
                    >
                        <ServicesCard
                            animateCardServices={ animateCard_1 }
                            number='01'
                            title='Web Development'
                            children='We professionally design, redesign and 
                                    continuously support customer-facing and 
                                    enterprise web apps to achieve high conversion 
                                    and adoption rates.'
                        />
                        <ServicesCard
                            animateCardServices={ animateCard_2 }
                            number='02'
                            title='Mobile Development'
                            children='We help global brands design and create digital 
                                    products, enabling seamless user experiences on all 
                                    modern devices.'
                        />
                        <ServicesCard
                            animateCardServices={ animateCard_3 }
                            number='03'
                            title='Blockchain Development'
                            children='We develop applications based on blockchain. 
                                    Develop a new blockchain project or upgrade your project
                                    with our help.'
                        />
                        <ServicesCard
                            animateCardServices={ animateCard_4 }
                            number='05'
                            title='Python Development '
                            children='We provide bespoke Python development services that 
                                    target unique business needs and problems.'
                        />
                        <ServicesCard
                            animateCardServices={ animateCard_5 }
                            number='04'
                            title='Digital Marketing'
                            children='We plan, implement, evaluate the control of digital 
                                    marketing strategies that will allow and meet the 
                                    objectives and sales of your company.'
                        />
                        <ServicesCard
                            animateCardServices={ animateCard_6 }
                            number='06'
                            title='Designer professional'
                            children='Custom designer interfaces to meet your specific requirements, professional layout and design on your favorite technology.'
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Services;