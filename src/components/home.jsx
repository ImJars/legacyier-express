import React from 'react';

const Home = () => {
    return ( 
        <>
            <div
                className='w-full h-screen bg-secondary'
            >
                <div 
                    className='flex items-center justify-center h-full'
                >
                    <div
                        className='text-white font-sans'
                    >
                        <h1
                            className='text-sm'
                        >
                            Hi There,
                        </h1>
                        <h2
                            className='text-3xl font-bold'
                        >
                            I Am a Developer
                        </h2>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor sit <br/> amet 
                            consectetur adipisicing elit. Possimus

                        </h3>
                        <button
                            className='border-2 border-tertiary 
                                    px-4 py-2 mt-4 rounded-md bg-tertiary
                                    hover:bg-secondary hover:transition-all 
                                    hover:duration-500'
                        >
                            More About Me
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
     );
}
 
export default Home;