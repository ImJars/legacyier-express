import React from 'react';

const Contact = ({ refContact }) => {
    return ( 
        <>
            <section
                ref={ refContact }
                id='Contact'
                className="w-full h-screen bg-primary text-white font-sans"
            >
                <div
                    className="flex justify-center text-center items-center h-full"
                >
                    <div>
                        <h1
                            className='text-5xl font-bold'
                        >
                            Get In Touch
                        </h1>
                        <h2
                            className='w-1/2 mx-auto mt-8 mb-8 text-text-mini tracking-wide'
                        >
                            Although I’m not currently looking for any new 
                            opportunities, my inbox is always open. Whether 
                            you have a question or just want to say hi, I’ll 
                            try my best to get back to you!
                        </h2>
                        <a href="mailto:hi.legacyier@gmail.com">
                            <button
                               className='border bg-primary py-4 px-8 mt-5
                                        rounded-md hover:bg-septenary hover:bg-opacity-25
                                        hover:transition hover:duration-300 hover:ease-in-out' 
                            >
                                Say Hello
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Contact;