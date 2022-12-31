import React, { useState, useEffect } from 'react'
import Title from './components/title';
import Seccion from './components/seccion-carousel';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const Tablas = styled.div`
    display: flex;
    justify-content: center;

@media screen and (max-width: 900px) {
    overflow: hidden;
}
    .tabs {
        position: relative;
        width: 70rem;
        height: 500px;
        padding: 30px 0px;
        overflow: hidden;
        .tab-header{
            float: left;
            width: 125px;
            height: 100%;
            border-right: 1px solid #A4A4A4;
            @media (max-width: 640px) {
                width: 100px;
            }
        }
        .tab-header > button {
            margin-bottom: 15px;
            height: 50px;
            font-size: 15px;
            font-weight: 500;
            color: #A4A4A4;
            cursor: pointer;
            padding-left: 0px;
            display: grid;
            align-items: center;
            @media (max-width: 640px) {
                font-size: 12px;
                font-weight: 400;
            }
        }
        .tab-header > button:hover,
        .tab-header > button.active {
            transition: all 500ms ease-in-out;
            color: #7B90FB;
        }
        .tab-content{
            position: relative;
            height: 100%;
            overflow: hidden;
            visibility: hidden;
        }
        .tab-content > div {
            position: absolute;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            text-align: start;
            transition: all 600ms ease-in-out;
        }
        .tab-content > div.active {
            opacity: 1;
            visibility: visible;
        }
        .indicator {
            position: absolute;
            width: 4px;
            height: 50px;
            background: #7B90FB;
            left: 122px;
            top: 30px;
            border-radius: 10px 10px 10px 10px;
            transition: all 500ms ease-in-out;
            @media (max-width: 640px) {
                left: 97px;

            }
        }
    }
`
const Work = ({ refWork }) => {
    const [tab, setTab] = useState(1);
    function changeTab(index) {
        setTab(index);
        if ( index === 1 ) {
            document.querySelector('.indicator').style.top = '30px';
        } else if ( index === 2 ) {
            document.querySelector('.indicator').style.top = '95px';
        } else if ( index === 3 ) {
            document.querySelector('.indicator').style.top = '157px';
        } else if ( index === 4 ) {
            document.querySelector('.indicator').style.top = '225px';
        } else if ( index === 5 ) {
            document.querySelector('.indicator').style.top = '290px';
        }
    }
    const {ref: refTab, inView: inviewTab} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    
    const animateSectionTitle = useAnimation();
    const animateTable = useAnimation();

    useEffect(() => {
        if (inviewTab) {
        animateSectionTitle.start({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring' ,duration: 2, delay: 0.2
            }
        });
        animateTable.start({
            opacity: 1,
            transition: {
                type: 'spring' ,duration: 2, delay: 1
            }
        });
        }

        if (!inviewTab) {
        animateSectionTitle.start({
            opacity: 0,
            x: '-5vw',
        });
        animateTable.start({
            opacity: 0,
        });
    }
    }, [inviewTab, animateSectionTitle, animateTable])
    
    return ( 
        <>
            <section
                ref={ refWork }
                id='Works'
                className="w-full sm:h-screen h-screen bg-primary text-white
                font-roboto flex justify-center items-center"
            >
                <div
                    ref={ refTab }
                    className='max-w-250 grid grid-cols-1 py-20 mx-4 xl:mx-0'
                >
                    <Title
                        animateTitle={ animateSectionTitle } 
                        title={'Where I’ve Worked'}
                        subtitle={'A latest creative works in design and web'}
                    />
                        <Tablas>
                            <motion.div 
                                animate = { animateTable }
                                className="tabs my-20"
                            >
                                <div className="tab-header">
                                    <button
                                        onClick={() => changeTab(1)}
                                        className={tab === 1 ? 'active' : ''}
                                    >
                                        Legacyier
                                    </button>
                                    <button
                                        onClick={() => changeTab(2)}
                                        className={tab === 2 ? 'active' : ''}
                                    >
                                        Bliss DDM
                                    </button>
                                    <button
                                        onClick={() => changeTab(3)}
                                        className={tab === 3 ? 'active' : ''}
                                    >
                                        UAEH
                                    </button>
                                    <button
                                        onClick={() => changeTab(4)}
                                        className={tab === 4 ? 'active' : ''}
                                    >
                                        SQD & Holcim
                                    </button>
                                    <button
                                        onClick={() => changeTab(5)}
                                        className={tab === 5 ? 'active' : ''}
                                    >
                                        SQD & Bonafont
                                    </button>
                                </div>
                                <div className="indicator">
                                </div>
                                <div className="tab-content">
                                    <div className={tab === 1 ? 'active': ''}>
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
                                        />
                                    </div>
                                    <div className={tab === 2 ? 'active': ''}>
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
                                        />
                                    </div>
                                    <div className={tab === 3 ? 'active': ''}>
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
                                    </div>
                                    <div className={tab === 4 ? 'active': ''}>
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
                                        />
                                    </div>
                                    <div className={tab === 5 ? 'active': ''}>
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
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </Tablas>
                </div>
            </section>
        </>
     );
}
 
export default Work;