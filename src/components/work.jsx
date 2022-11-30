import React, { useState } from 'react'
import Title from './components/title';
import Seccion from './components/seccion-carousel';
import styled from 'styled-components';

const Tablas = styled.div`

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 

@media screen and (max-width: 900px) {
    overflow: hidden;
}

    .tabs {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 500px;
        overflow: hidden;
        margin-top: 7rem;
        
        .tab-header > div {
            margin-bottom: 15px;
            height: 50px;
            cursor: pointer;
            padding-left: 0px;
            display: grid;
            align-content: center;

            @media (max-width: 640px) {
                font-size: 14px;
            }
        }
        .tab-header > div:hover,
        .tab-header > div.active {
            transition: all 500ms ease-in-out;
            color: #8150FF;
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
            text-align: start;
            transition: all 600ms ease-in-out;
            align-content: center;
            align-items: center;
        }
        .tab-content > div.active {
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
        }
        .indicator {
            position: absolute;
            width: 20px;
            height: 4px;
            background: #8150FF;
            left: 2%;
            top: 10%;
            transition: all 500ms ease-in-out;
            @media (max-width: 640px) {
                right: 117.5px;

            }
        }
    }
`
const Work = ({ refWork }) => {
    const [tab, setTab] = useState(1);
    function changeTab(index) {
        setTab(index);
        if ( index === 1 ) {
            document.querySelector('.indicator').style.left = '6%';
        } else if ( index === 2 ) {
            document.querySelector('.indicator').style.left = '27%';
        } else if ( index === 3 ) {
            document.querySelector('.indicator').style.left = '58%';
        } else if ( index === 4 ) {
            document.querySelector('.indicator').style.left = '225px';
        } else if ( index === 5 ) {
            document.querySelector('.indicator').style.left = '100%';
        }
    }
    return ( 
        <>
            <section
                ref={ refWork }
                id='Works'
                className="w-full sm:h-screen h-screen bg-primary text-white
                font-roboto flex justify-center items-center"
            >
                <div
                    className='max-w-250 grid grid-cols-1 my-20 sm:my-0 mx-4 sm:mx-0'
                >
                    <Title 
                        title={'Where I’ve Worked'}
                        subtitle={'A latest creative works in design and web'}
                    />
                    <Tablas>
                        <div className="tabs font-open-sans">
                            <div 
                                className="grid grid-cols-5 justify-between cursor-pointer 
                                 text-xs sm:text-sm text-center gap-2 sm:gap-20 sm:mx-4 tab-header"
                            >
                                <div
                                    onClick={() => changeTab(1)}
                                    className={tab === 1 ? 'active' : ''}
                                >
                                    Legacyier
                                </div>
                                <div
                                    onClick={() => changeTab(2)}
                                    className={tab === 2 ? 'active' : ''}
                                >
                                    Bliss DDM
                                </div>
                                <div
                                    onClick={() => changeTab(3)}
                                    className={tab === 3 ? 'active' : ''}
                                >
                                    UAEH
                                </div>
                                <div
                                    onClick={() => changeTab(4)}
                                    className={tab === 4 ? 'active' : ''}
                                >
                                    SQD & Holcim
                                </div>
                                <div
                                    onClick={() => changeTab(5)}
                                    className={tab === 5 ? 'active' : ''}
                                >
                                    SQD & Bonafont
                                </div>
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
                                <div className={tab === 4 ? 'active': ''}>
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
                                <div className={tab === 5 ? 'active': ''}>
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
                            </div>
                        </div>
                    </Tablas>
                </div>
            </section>
        </>
     );
}
 
export default Work;