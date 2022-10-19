import React from 'react'
import Title from './components/title';
import WorkCard from './components/works-card';
import Img from '../images/gatsby-icon.png';
import { FiExternalLink } from 'react-icons/fi';

const Work = () => {
    return ( 
        <>
            <section
                className="w-full h-screen bg-primary text-white
                font-sans flex justify-center items-center"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title={'My Work'}
                        subtitle={'A latest creative works in design and web'}
                    />
                    <div
                        className='grid grid-cols-3 gap-10 mt-14'
                    >
                        <WorkCard 
                            nameImg={ Img }
                            title={'Graphic Design'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ Img }
                            title={'Mobile Application'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ Img }
                            title={'Blockchain Application'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ Img }
                            title={'Web Design'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ Img }
                            title={'Legacyier Website'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ Img }
                            title={'Project CMO'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Work;