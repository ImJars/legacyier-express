import React from 'react';
import ServicesCard from './components/services-card';
import Title from './components/title';

const Services = ({ refServices }) => {
    return ( 
        <>
            <section
                ref= { refServices }
                id='Services'
                className="w-full h-screen bg-primary text-white
                        font-poppins flex justify-center items-center"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title='My Services'
                        subtitle='I have worked with a number of clients'
                    />
                    <div
                        className='grid grid-cols-3 gap-10 mt-14'
                    >
                        <ServicesCard 
                            number='01'
                            title='Web Development'
                            children='Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Quisquam, services and
                                    more. Lorem ipsum dolor sit amet'
                        />
                        <ServicesCard 
                            number='02'
                            title='Blockchain Developer'
                            children='Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Quisquam, services and
                                    more. Lorem ipsum dolor sit amet'
                        />
                        <ServicesCard 
                            number='03'
                            title='Software Developer'
                            children='Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Quisquam, services and
                                    more. Lorem ipsum dolor sit amet'
                        />
                        <ServicesCard 
                            number='04'
                            title='Designer professional'
                            children='Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Quisquam, services and
                                    more. Lorem ipsum dolor sit amet'
                        />
                        <ServicesCard 
                            number='05'
                            title='Marketing'
                            children='Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Quisquam, services and
                                    more. Lorem ipsum dolor sit amet'
                        />
                        <ServicesCard 
                            number='06'
                            title='Data Analyst'
                            children='Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Quisquam, services and
                                    more. Lorem ipsum dolor sit amet'
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Services;