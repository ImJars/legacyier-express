import React from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const WorkCard = () => {
    return ( 
        <>
            <div
                className='w-full h-full bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center'
            >
                <div>
                    <div>
                        <AiOutlineFolder />
                    </div>
                    <div>
                        <a href="#">
                            <FiGithub />
                        </a>
                        <a href="#">
                            <FiExternalLink />
                        </a>
                    </div>
                </div>
                <h1>
                    Legacyier Express
                </h1> 
                <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <ol>
                    <li>
                        GatsbyJS
                    </li>
                    <li>
                        TailwindCSS
                    </li>
                    <li>
                        Framer Motion
                    </li>
                </ol>
            </div>
        </>
     );
}
 
export default WorkCard;