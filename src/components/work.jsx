import React from 'react'
import Title from './components/title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
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
    />,
]

const Work = ({ refWork }) => {
    return ( 
        <>
            <section
                ref={ refWork }
                id='Works'
                className="w-full h-screen bg-primary text-white
                font-roboto flex justify-center items-center pt-20 pb-40"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title={'Where I’ve Worked'}
                        subtitle={'A latest creative works in design and web'}
                    />
                    <div
                        className='mt-40 mb-40'
                    >
                        <AliceCarousel
                            animationType="fadeout" 
                            animationDuration={800}
                            disableDotsControls
                            disableButtonsControls
                            items={items}
                            mouseTracking
                            autoWidth
                        />
                    </div>
                    <div>
                        <input type="range" />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Work;