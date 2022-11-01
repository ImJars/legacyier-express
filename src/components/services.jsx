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
                        font-roboto flex justify-center items-center"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title='My Services'
                        subtitle='My work with several clients'
                    />
                    <div
                        className='grid grid-cols-3 gap-8 mt-14'
                    >
                        <ServicesCard 
                            number='01'
                            title='Web Development'
                            children='We professionally design, redesign and 
                                    continuously support customer-facing and 
                                    enterprise web apps to achieve high conversion 
                                    and adoption rates.'
                        />
                        <ServicesCard 
                            number='02'
                            title='Mobile Development'
                            children='We help global brands design and create digital 
                                    products, enabling seamless user experiences on all 
                                    modern devices.'
                        />
                        <ServicesCard 
                            number='03'
                            title='Blockchain Development'
                            children='We develop applications based on blockchain. 
                                    Develop a new blockchain project or upgrade your project
                                    with our help.'
                        />
                        <ServicesCard 
                            number='05'
                            title='Python Development '
                            children='We provide bespoke Python development services that 
                                    target unique business needs and problems.'
                        />
                        <ServicesCard 
                            number='04'
                            title='Digital Marketing'
                            children='We plan, implement, evaluate the control of digital 
                                    marketing strategies that will allow and meet the 
                                    objectives and sales of your company.'
                        />
                        <ServicesCard 
                            number='06'
                            title='Designer professional'
                            children='Custom Designer Interfaces to Meet Your Specific Requirements'
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Services;