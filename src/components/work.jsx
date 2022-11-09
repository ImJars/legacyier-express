import React from 'react'
import Title from './components/title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Seccion from './components/seccion-carousel';

const items = [
    <Seccion 
        business={'Legacyier'}
        worked={'CEO'}
        title={'Legacyier Web'}
        description={' Legacyier web by JARS'}
    />,
    <Seccion 
        business={'Bliss DDM'}
        worked={'CEO'}
        title={'Legacyier Web'}
        description={' Legacyier web by JARS'}
    />,
    <Seccion 
        business={'SQDesarrollo'}
        worked={'CEO'}
        title={'Legacyier Web'}
        description={' Legacyier web by JARS'}
    />,
]

const Work = ({ refWork }) => {
    return ( 
        <>
            <section
                ref={ refWork }
                id='Works'
                className="w-full h-full bg-primary text-white
                font-roboto flex justify-center items-center pt-20 pb-40"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title={'My Work'}
                        subtitle={'A latest creative works in design and web'}
                    />
                    <div
                        className='mt-14'
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
                </div>
            </section>
        </>
     );
}
 
export default Work;