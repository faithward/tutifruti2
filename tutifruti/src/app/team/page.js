import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default function Team() {
    return (
        <div className="bg-tan h-full mx-auto">
            <Navbar />
            <div className='flex flex-col min-h-screen mx-auto w-5/6'>
                <div className='flex flex-col h-screen mx-auto'>
                    <h1 className="text-center text-5xl font-tutifruti mt-2">Meet Our Team</h1>
                    <div className="container max-h-screen md:h-3/4 p-8 mx-auto mt-6 mb-10">
                        <Image className="object-cover max-h-screen mx-auto" src="/blueShapeTeam.png" alt="Leadership" fill={true} />
                    </div>
                </div>
                <div className='text-center text-4xl font-tutifruti my-4 w-full'>
                    <Image className="object-cover mx-auto justify-between" src="/gallery/volunteers.png" alt="Volunteers" width={600} height={300} />
                </div>
                <div id="volGrid" className='min-h-screen w-full mx-auto grid grid-cols-1 grid-rows-15 gap-8 md:grid-cols-3 md:grid-rows-5 mb-12'>
                    <div id="rozy" className='bg-darkblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Rozy!" src="/volunteers/rozy.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Rozy</p>
                        <p className='mx-auto text-center text-lg'>Movement Coach</p>
                    </div>
                    <div id="faith" className='bg-darkred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Faith!" src="/volunteers/faith.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Faith</p>
                        <p className='mx-auto text-center text-lg/5'>Web Developer & <br />Movement Coach</p>
                    </div>
                    <div id="clara" className='bg-tan aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Clara!" src="/volunteers/clara.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Clara</p>
                        <p className='mx-auto text-center text-lg'>Movement Coach</p>
                    </div>
                    <div id="madison" className='bg-lightred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Madison!" src="/volunteers/madison.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Madison</p>
                        <p className='mx-auto text-center text-lg'>Movement Coach</p>
                    </div>
                    <div id="pauli" className='bg-tan aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Pauli!" src="/volunteers/pauli.jpeg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Pauli</p>
                        <p className='mx-auto text-center text-lg'>Movement Coach</p>
                    </div>
                    <div id="sav" className='bg-lightblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Savannah!" src="/volunteers/sav.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Savannah</p>
                        <p className='mx-auto text-center text-lg'>Movement Coach</p>
                    </div>
                    <div id="mel" className='bg-lightblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Mel!" src="/volunteers/mel.jpeg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Mel</p>
                        <p className='mx-auto text-center text-lg'>Social Media Coordinator</p>
                    </div>
                    <div id="andi" className='bg-darkblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Andi!" src="/volunteers/andi.jpeg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Andi</p>
                        <p className='mx-auto text-center text-lg'>Event & Program Facilitator</p>
                    </div>
                    <div id="avion" className='bg-lightred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Avion!" src="/volunteers/avion.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Avion</p>
                        <p className='mx-auto text-center text-lg'>Event & Program Facilitator</p>
                    </div>
                    <div id="allison" className='bg-lightred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Allison!" src="/volunteers/allison.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Allison</p>
                        <p className='mx-auto text-center text-lg'>Event & Program Facilitator</p>
                    </div>
                    <div id="vicky" className='bg-tan aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Vicky!" src="/volunteers/vicky.jpeg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Vicky</p>
                        <p className='mx-auto text-center text-lg'>Event & Program Facilitator</p>
                    </div>
                    <div id="mario" className='bg-darkblue aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Mario!" src="/volunteers/mario.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Mario</p>
                        <p className='mx-auto text-center text-lg'>Fundraising</p>
                    </div>
                    <div id="kiley" className='bg-lightred aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Kiley!" src="/volunteers/kiley.jpg" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Kiley</p>
                        <p className='mx-auto text-center text-lg'>Fundraising</p>
                    </div>
                    <div id="georgina" className='bg-tan aspect-square row-span-1 col-span-1 p-4'>
                        <div className='relative h-3/4 w-3/4 mx-auto'>
                            <Image className="rounded-full object-cover" alt="An image of Georgina!" src="/strawb.png" fill />
                        </div>
                        <p className='font-tutifruti mx-auto text-center pt-2 text-2xl'>Georgina</p>
                        <p className='mx-auto text-center text-lg'>Fundraising</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

/*<div className='flex flex-col md:flex-row h-full md:h-5/6 p-2 md:p-6 md:mt-14 gap-4 mx-auto'>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/4 p-2 md:p-6">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-contain md:object-cover" alt="An Isa Doodle" src="/gallery/isa.png" fill />
                                </div>
                                <h1 className="text-center text-lg md:text-2xl font-tutifruti">ISA <br className='invisible md:visible' />OSTOS</h1>
                                <h4 className="text-center text-md md:text-xl font-tutifruti">Co-Director</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/4 p-2 md:p-6">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-contain md:object-cover" alt="A Romina Doodle" src="/gallery/romina.png" fill />
                                </div>
                                <h1 className="text-center text-lg md:text-2xl font-tutifruti">ROMINA PALMERO</h1>
                                <h4 className="text-center text-md md:text-xl font-tutifruti">Co-Director</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/4 p-2 md:p-6">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-contain md:object-cover" alt="A Thania Doodle" src="/gallery/thania.png" fill />
                                </div>
                                <h1 className="text-center text-lg md:text-2xl font-tutifruti">THANIA SEGURA</h1>
                                <h4 className="text-center text-md md:text-xl font-tutifruti">Board Member</h4>
                            </div>
                            <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6 h-full mx-auto md:w-1/4 p-4 md:p-8">
                                <div className='relative block h-2/3 mx-auto'>
                                    <Image className="object-contain md:object-cover" alt="A Susan Doodle" src="/gallery/susan.png" fill />
                                </div>
                                <h1 className="text-center text-lg md:text-2xl font-tutifruti">SUSAN <br className='invisible md:visible' />LEE-CHUN</h1>
                                <h4 className="text-center text-md md:text-xl font-tutifruti">Board Member</h4>
                            </div>
                        </div>
                        */

