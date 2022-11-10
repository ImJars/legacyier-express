import React, { useState } from 'react'
import Title from './components/title';
import Seccion from './components/seccion-carousel';
import styled from 'styled-components';

const TabContent = styled.div`
    &.inactive{
        position: absolute;
        transition: all 600ms ease-in-out;
        opacity: 0;
    }
    &.active {
        opacity: 1;
        transition: all 600ms ease-in-out;
    }  
`
const Button = styled.button`
    &.activeButton{
        width: 0.5rem;
        height: 0.5rem;
        background-color: #7B90FB;
        border-radius: 50%;
        transition: all 500ms ease-in-out;
    }
    &.inactiveButton{
        width: 0.5rem;
        height: 0.5rem;
        background-color: #7B90FB;
        border-radius: 50%;
        transition: all 500ms ease-in-out;
    }
    .activeText{
        transform: rotate(90deg) translateX(20px);
        font-weight: 700;
        color: #7B90FB;
        font-size: 15px;
        letter-spacing: 2px;
        transition: all 500ms ease-in-out;
    }
    .inactiveText{
        transform: rotate(90deg) translateX(20px);
        color: #7B90FB;
        font-size: 10px;
        letter-spacing: 2.5px;
        transition: all 500ms ease-in-out;
    }
`

const Work = ({ refWork }) => {

    const [tab, setTab] = useState(1);

    function changeTab( index ){
        setTab(index);
    }
    return ( 
        <>
            <section
                ref={ refWork }
                id='Works'
                className="w-full h-screen bg-primary text-white
                font-roboto flex justify-center items-center pb-20"
            >
                <div
                    className='w-250 flex flex-col'
                >
                    <Title 
                        title={'Where I’ve Worked'}
                        subtitle={'A latest creative works in design and web'}
                    />
                    <div
                        className='w-full flex justify-center mt-20'
                    >
                        <TabContent
                            className={tab === 1 ? 'active': 'inactive'}
                        >
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
                        </TabContent>
                        <TabContent
                            className={tab === 2 ? 'active': 'inactive'}
                        >
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
                        </TabContent>
                        <TabContent
                            className={tab === 3 ? 'active': 'inactive'}
                        >
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
                        </TabContent>
                        <TabContent
                            className={tab === 4 ? 'active': 'inactive'}
                        >
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
                        </TabContent>
                        <TabContent
                            className={tab === 5 ? 'active': 'inactive'}
                        >
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
                        </TabContent>
                    </div>
                    <div
                        className='mt-20 flex justify-center mx-80 sm:mx-40'
                    >
                        <div
                            className='w-full h-1px bg-septenary justify-between grid grid-cols-5 content-center'
                        >
                            <Button
                                onClick={() => changeTab(1)}
                                className={tab === 1 ? 'activeButton': 'inactiveButton'}
                            >
                                <div
                                    className={tab === 1 ? 'activeText': 'inactiveText'}
                                >
                                    2022
                                </div>
                            </Button>
                            <Button
                                onClick={() => changeTab(2)}
                                className={tab === 2 ? 'activeButton': 'inactiveButton'}
                            >
                                <div
                                    className={tab === 2 ? 'activeText': 'inactiveText'}
                                >
                                    2021
                                </div>
                            </Button>
                            <Button
                                onClick={() => changeTab(3)}
                                className={tab === 3 ? 'activeButton': 'inactiveButton'}
                            >
                                <div
                                    className={tab === 3 ? 'activeText': 'inactiveText'}
                                >
                                    2020
                                </div>
                            </Button>
                            <Button
                                onClick={() => changeTab(4)}
                                className={tab === 4 ? 'activeButton': 'inactiveButton'}
                            >
                                <div
                                    className={tab === 4 ? 'activeText': 'inactiveText'}
                                >
                                    2019
                                </div>
                            </Button>
                            <Button
                                onClick={() => changeTab(5)}
                                className={tab === 5 ? 'activeButton': 'inactiveButton'}
                            >
                                <div
                                    className={tab === 5 ? 'activeText': 'inactiveText'}
                                >
                                    2018
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Work;