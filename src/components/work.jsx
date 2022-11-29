import React from 'react'
import Title from './components/title';
import Seccion from './components/seccion-carousel';


const items = [
    <Seccion
        date={'January 2022 - Present'}
        business={'Legacyier'}
        worked={'Chief Executive Officer'}
        title={'Legacyier Web'}
        description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.'
        }
    />,
    <Seccion
        date={'January 2021 - December 2021'}
        business={'Bliss DDM'}
        worked={'Web Developer'}
        title={'Personal Web Daniel Rocha'}
        description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.'
        }
    />,
    <Seccion
        date={'January 2020 - December 2020'}
        business={'SQDesarrollo & Holcim Mexico'}
        worked={'Software Developer'}
        title={'Labor calculation software'}
        description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.'
        }
    />,
    <Seccion
        date={'January 2019 - December 2019'}
        business={'SQDesarrollo & Bonafont'}
        worked={'Software Developer'}
        title={'Redesign of software and calculation of inputs'}
        description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.'
        }
    />,
    <Seccion 
        date={'January 2018 - December 2018'}
        business={'UAEH'}
        worked={'Software Developer'}
        title={'Project management software'}
        description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.' +
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.'
        }
    />
];

const Work = ({ refWork }) => {
    return ( 
        <>
            <section
                ref={ refWork }
                id='Works'
                className="w-full h-screen bg-primary text-white
                font-roboto flex justify-center items-center"
            >
                <div
                    className='max-w-250 grid grid-cols-1 my-20 sm:my-0 mx-4 sm:mx-0'
                >
                    <Title 
                        title={'Where I’ve Worked'}
                        subtitle={'A latest creative works in design and web'}
                    />
                    <div>
                       
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Work;