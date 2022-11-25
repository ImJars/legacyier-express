import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = ({ refContact }) => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    const animateText = useAnimation();
    const animateDescription = useAnimation();
    const animateButton = useAnimation();

    useEffect(() => {
        if (inView) {
            animateText.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 0.4
                }
            });
            animateDescription.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 0.6
                }
            });
            animateButton.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: 1
                }
            });
        }

        if (!inView) {
            animateText.start({
                opacity: 0,
                y: '5vw'
            });
            animateDescription.start({
                opacity: 0,
                y: '5vw'
            });
            animateButton.start({
                opacity: 0,
                y: '5vw'
            });
        }
    }, [inView, animateText, animateDescription, animateButton]);
    
    return ( 
        <>
            <section
                ref={ refContact }
                id='Contact'
                className="static w-full h-screen bg-primary text-white font-sans"
            >
                <div
                    ref={ ref }
                    className="relative flex justify-center text-center items-center h-full"
                >
                    <div
                    >
                        <motion.h1
                            animate={ animateText }
                            className='text-5xl font-bold'
                        >
                            Get In Touch
                        </motion.h1>
                        <motion.h2
                            animate={ animateDescription }
                            className='w-1/2 mx-auto mt-8 mb-8 text-text-mini tracking-wide'
                        >
                            Although I’m not currently looking for any new 
                            opportunities, my inbox is always open. Whether 
                            you have a question or just want to say hi, I’ll 
                            try my best to get back to you!
                        </motion.h2>
                        <motion.a
                            href="mailto:hi.legacyier@gmail.com"
                            animate={ animateButton }
                        >
                            <button
                               className='border-septenary border text-septenary 
                                      bg-primary py-4 px-8 mt-5 rounded-md hover:bg-septenary 
                                        hover:bg-opacity-20 hover:transition hover:duration-300 
                                        hover:ease-in-out' 
                            >
                                Say Hello
                            </button>
                        </motion.a>
                    </div>
                    <footer
                        className='absolute w-full h-14 bg-primary bottom-0'
                    >   
                        <div
                            className='font-sans flex justify-center items-center h-full'
                        >
                            <a
                                href="https://twitter.com/Im_Jars"
                                target="_blank"
                                rel="noreferrer"
                                className='text-text-mini text-xs tracking-widest
                                            hover:text-septenary hover:transition
                                            hover:duration-500 hover:ease-in-out'
                            >
                                <h1>
                                    Designed & Built by Angel Ramirez
                                </h1>
                                <h2>
                                    © 2022 ImJars
                                </h2>
                            </a>
                        </div>
                    </footer>
                </div>
            </section>
        </>
     );
}
 
export default Contact;