import React, { useState } from 'react'
import Title from './components/title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Seccion from './components/seccion-carousel';
import SliderComponet from './components/slider-component';

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

    const [value, setvalue] = useState(0)
    const [valueCarousel, setvalueCarousel] = useState(0)
 

    const handleChange = (e) => {
        setvalue(setvalueCarousel(e.target.value)) 
    }


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
                            autoWidth
                            mouseTracking
                            activeIndex={valueCarousel}
                                                        
                        />
                    </div>
                    <div
                        className='w-full flex justify-center'
                    >
                        <SliderComponet
                            value={ value }
                            min={ 0 }
                            max={ 5 }
                            step={ 1 }
                            handleChange={ handleChange }
                        />
                        {console.log(value)}
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Work;