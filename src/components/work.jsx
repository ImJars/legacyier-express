import React from 'react'
import Title from './components/title';
import WorkCard from './components/works-card';
import { FiExternalLink } from 'react-icons/fi';

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
                        className='grid grid-cols-3 gap-10 mt-14'
                    >
                        <WorkCard 
                            nameImg={ 'img-1.webp' }
                            title={'Graphic Design'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ 'img-2.webp' }
                            title={'Mobile Application'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ 'img-3.webp' }
                            title={'Blockchain Application'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ 'img-4.webp' }
                            title={'Web Design'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ 'img-5.webp' }
                            title={'Legacyier Website'}
                            link={'#'}
                            icon={<FiExternalLink />}
                        />
                        <WorkCard 
                            nameImg={ 'img-6.webp' }
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