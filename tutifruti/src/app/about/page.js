import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-white h-full mx-auto">
            <Navbar />
            <div className='flex flex-col min-h-screen mx-auto w-5/6'>
                <div className='flex flex-col h-screen mx-auto'>
                    <h1 className="text-center text-4xl font-tutifruti mt-2">Meet Our Team</h1>
                    <div className="container bg-center bg-longBlue md:bg-blueSquare bg-no-repeat bg-contain p-8 h-5/6 mx-auto">
                        <div className='flex flex-col md:flex-row h-full md:h-5/6 p-6 md:mt-10 gap-6 md:gap-4 mx-auto'>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/3 p-4 md:p-6">
                                <div className='relative block h-3/4 md:h-2/3 mx-auto'>
                                    <Image className="object-cover" src="/gallery/isa.png" fill />
                                </div>
                                <h1 className="text-center text-2xl font-tutifruti">ISA OSTOS</h1>
                                <h4 className="text-center text-xl font-tutifruti">Co-Director</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/3 p-4 md:p-6">
                                <div className='relative block h-3/4 md:h-2/3 mx-auto'>
                                    <Image className="object-cover" src="/gallery/romina.png" fill />
                                </div>
                                <h1 className="text-center text-2xl font-tutifruti">ROMINA PALMERO</h1>
                                <h4 className="text-center text-xl font-tutifruti">Co-Director</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/3 p-4 md:p-6">
                                <div className='relative block h-3/4 md:h-2/3 mx-auto'>
                                    <Image className="object-cover" src="/gallery/thania.png" fill />
                                </div>
                                <h1 className="text-center text-2xl font-tutifruti">THANIA SEGURA</h1>
                                <h4 className="text-center text-xl font-tutifruti">Board Member</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='font-tutifruti text-3xl text-center mb-6'>Our Volunteers</h1>
                <div id="volGrid" className='min-h-screen w-5/6 md:aspect-square mx-auto grid grid-cols-1 grid-rows-9 gap-4 md:grid-cols-3 md:grid-rows-3 mb-8'>
                    <div className='bg-lightred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/star.png" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Star</p>
                    </div>
                    <div className='bg-lightblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/shirley.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Shirley</p>
                    </div>
                    <div className='bg-darkred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/olivia.JPG" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Violet</p>
                    </div>
                    <div className='bg-tan aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/rozy.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Rozy</p>
                    </div>
                    <div className='bg-darkred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/ashley.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Ashley</p>
                    </div>
                    <div className='bg-darkblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/mari.jpeg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Mari</p>
                    </div>
                    <div className='bg-lightblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/ailish.PNG" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Ailish</p>
                    </div>
                    <div className='bg-lightred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/ana.JPG" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Ana</p>
                    </div>
                    <div className='bg-tan aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-5/6 w-5/6 mx-auto'>
                            <Image className="rounded-full object-cover" src="/volunteers/faith.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-1 text-2xl'>Faith</p>
                    </div>
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