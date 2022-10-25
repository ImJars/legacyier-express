import React from 'react';
import ContactInfo from './components/contact-info';
import Title from './components/title';
import { AiTwotonePhone, AiOutlineTwitter } from 'react-icons/ai';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contact = ({ refContact }) => {
    return ( 
        <>
            <section
                ref={ refContact }
                id='Contact'
                className="w-full h-screen bg-primary text-white
                font-sans flex justify-center items-center"
            >
                <div
                    className='max-w-250 flex flex-col'
                >
                    <Title 
                        title='Contact Me'
                        subtitle='Feel free to contact me any time'
                    />
                    <div
                        className='grid grid-cols-2 mt-14'
                    >
                        <div
                            className='bg-secondary p-6 rounded-xl'
                        >
                            <form 
                                action=""
                                className='flex flex-col gap-6'
                            >
                                <div
                                    className='flex flex-col'
                                >
                                    <input 
                                        id='name' 
                                        type="text" 
                                        placeholder="Name" 
                                        className='bg-transparent p-1 border rounded-md border-primary outline-none 
                                                focus:border-septenary text-sm tracking-wider transition-all duration-500 ease-in-out'
                                    />
                                </div>
                                <div
                                    className='flex flex-col'
                                >
                                    <input 
                                        id='email' 
                                        type="text" 
                                        placeholder="Email" 
                                        className='bg-transparent p-1 border rounded-md border-primary outline-none 
                                                focus:border-septenary text-sm tracking-wider transition-all duration-500 ease-in-out'
                                    />
                                </div>
                                <div
                                    className='flex flex-col'
                                >
                                    <input 
                                        id='subject' 
                                        type="text" 
                                        placeholder="Subject" 
                                        className='bg-transparent p-1 border rounded-md border-primary outline-none 
                                                focus:border-septenary text-sm tracking-wider transition-all duration-500 ease-in-out'
                                    />
                                </div>
                                <div
                                    className='flex flex-col'
                                >
                                    <textarea 
                                        id='messaje' 
                                        rows='8' 
                                        type="text" 
                                        placeholder="Message" 
                                        className='bg-transparent p-1 border rounded-md border-primary outline-none 
                                                focus:border-septenary text-sm tracking-wider transition-all duration-500 ease-in-out'    
                                    />
                                </div>
                                <a
                                    className='bg-septenary text-sm text-white mt-2 py-1 px-8 rounded-md font-semibold
                                                w-24 flex justify-center items-center' 
                                    href="https://github.com/ImJars"
                                >
                                    Send
                                </a>
                            </form>
                        </div>
                        <div
                            className='py-4 pl-5'
                        >
                            <h1
                                className='text-xl font-semibold'
                            >
                                Lets talk about your everything
                            </h1>
                            <p
                                className='mt-4 text-sm text-text-mini'
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                                Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                            </p>
                            <div>
                                <ContactInfo 
                                    title={'Phone:'}
                                    icon={<AiTwotonePhone />}
                                    children={'+52 773-151-1761'}
                                />
                                <ContactInfo 
                                    title={'Email:'}
                                    icon={<MdEmail />}
                                    children={'hi.legacyier@gmail.com'}
                                />
                                <ContactInfo 
                                    title={'Adress:'}
                                    icon={<MdLocationOn />}
                                    children={'Hidalgo, Mexico'}
                                />
                                <ContactInfo 
                                    title={'Social media:'}
                                    icon={<AiOutlineTwitter />}
                                    children={'@Im_Jars'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Contact;