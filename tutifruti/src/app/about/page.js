import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-white h-full mx-auto">
            <Navbar />
            <div className='flex flex-col min-h-screen p-4 mx-auto w-5/6'>
                <div className='flex flex-col h-screen mx-auto'>
                    <h1 className="text-center text-4xl font-tutifruti">Meet Our Team</h1>
                    <div className="container bg-center bg-blueSquare bg-no-repeat bg-contain p-8 h-5/6 mx-auto">
                        <div className='flex flex-col md:flex-row h-5/6 p-6 mt-10 gap-4 mx-auto'>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-1/3 p-6">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-cover" src="/gallery/isa.png" fill />
                                </div>
                                <h1 className="text-center text-2xl font-tutifruti">ISA OSTOS</h1>
                                <h4 className="text-center text-xl font-tutifruti">Co-Director</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-1/3 p-6">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-cover" src="/gallery/romina.png" fill />
                                </div>
                                <h1 className="text-center text-2xl font-tutifruti">ROMINA PALMERO</h1>
                                <h4 className="text-center text-xl font-tutifruti">Co-Director</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-1/3 p-6">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-cover" src="/gallery/thania.png" fill />
                                </div>
                                <h1 className="text-center text-2xl font-tutifruti">THANIA SEGURA</h1>
                                <h4 className="text-center text-xl font-tutifruti">Board Member</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="volGrid" className='h-screen grid grid-cols-1 grid-rows-9 gap-4 md:grid-cols-3 md:grid-rows-3'>
                    <div className='bg-lightred row-span-1 col-span-1 p-4'></div>
                    <div className='bg-lightblue row-span-1 col-span-1 p-4'></div>
                    <div className='bg-darkred row-span-1 col-span-1 p-4'></div>
                    <div className='bg-tan row-span-1 col-span-1 p-4'></div>
                    <div className='bg-darkred row-span-1 col-span-1 p-4'></div>
                    <div className='bg-darkblue row-span-1 col-span-1 p-4'></div>
                    <div className='bg-lightblue row-span-1 col-span-1 p-4'></div>
                    <div className='bg-lightred row-span-1 col-span-1 p-4'></div>
                    <div className='bg-tan row-span-1 col-span-1 p-4'></div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

/**
 *                 <div className='grid grid-rows-1 grid-cols-4 my-2 mx-auto'>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-2xl mt-2 font-tutifruti">ISA OSTOS</h1>
                        <h4 className="text-center pb-3 text-xl font-tutifruti">President</h4>
                        <p className="text-center text-sm pb-1 px-4 font-mono">Hi! I am Isa and I am a Colombian artist based in South Florida.  I have a Bachelors degree in Anthropology and International Affairs from Florida State University, and an MFA in Documentary Filmmaking from Northwestern University.</p>
                        <p className="text-center text-sm pb-2 px-4 font-mono">As the President of tutifruti, my vision is to maintain safe spaces for BIPOC, women/girls, and LGBTQ+ skaters where internal growth and physical wellness are encouraged and nurtured.</p>
                    </div>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-2xl mt-2 font-tutifruti">ROMINA PALMERO</h1>
                        <h4 className="text-center pb-3 text-xl font-tutifruti">Vice President</h4>
                        <p className="text-center text-sm pb-1 px-4 font-mono">I’m Romina, a Venezuelan artist raised in South Florida. I received a BA in Studio Art from Florida State University, with a focus on photography and printmaking. I am passionate about writing, bookmaking, film photography, mental health, and of course, skating!</p>
                        <p className="text-center text-sm pb-2 px-4 font-mono">As Vice President of tutifruti, I bring my academic experiences and life experiences to my work in order to lead with integrity, compassion, and intentionality.</p>
                    </div>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-2xl mt-2 font-tutifruti">ROMINA PALMERO</h1>
                        <h4 className="text-center pb-3 text-xl font-tutifruti">Vice President</h4>
                        <p className="text-center text-sm pb-1 px-4 font-mono">I’m Romina, a Venezuelan artist raised in South Florida. I received a BA in Studio Art from Florida State University, with a focus on photography and printmaking. I am passionate about writing, bookmaking, film photography, mental health, and of course, skating!</p>
                        <p className="text-center text-sm  pb-2 px-4 font-mono">As Vice President of tutifruti, I bring my academic experiences and life experiences to my work in order to lead with integrity, compassion, and intentionality.</p>
                    </div>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-2xl mt-2 font-tutifruti">ROMINA PALMERO</h1>
                        <h4 className="text-center pb-3 text-xl font-tutifruti">Vice President</h4>
                        <p className="text-center text-sm pb-1 px-4 font-mono">I’m Romina, a Venezuelan artist raised in South Florida. I received a BA in Studio Art from Florida State University, with a focus on photography and printmaking. I am passionate about writing, bookmaking, film photography, mental health, and of course, skating!</p>
                        <p className="text-center text-sm pb-2 px-4 font-mono">As Vice President of tutifruti, I bring my academic experiences and life experiences to my work in order to lead with integrity, compassion, and intentionality.</p>
                    </div>
                </div>
 */