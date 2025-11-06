import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';


export default function Work() {
    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='w-3/4 mx-auto h-full text-black'>
                <div id="topSection" className='w-full flex flex-col bg-yellow mx-auto justify-center p-6'>
                    <div className='w-full h-full text-center px-2 mx-auto gap-4 md:gap-8 flex md:flex-row flex-col'>
                        <div className='w-full md:w-1/3'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Mission</h1>
                            <p className='p-4 text-lg'>Tutifruti promotes mental health and physical wellness in disenfranchised communities through movement and art.</p>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Vision</h1>
                            <p className='p-4 text-lg'>We hope to encourage individuals, particularly from marginalized communities, to prioritize their mental and physical health through diverse means and utilize tools learned in our programs to overcome challenges in their lives.</p>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Values</h1>
                            <p className='p-4 text-lg'>We value integrity, education, and inclusivity, by providing opportunities to participate, learn, and collaborate with your local community.</p>
                        </div>
                    </div>
                    <Link id="buttonLink" className="mx-auto mt-6" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><Image alt="support us" src="supportusbutton.svg" width={180} height={90} /></Link>
                </div>
                <div id="bottomSection" className="w-full min-h-screen mx-auto grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-6 my-4 px-6 md:px-12">
                    <div id="move" className="order-1 row-span-1 col-span-1 relative block">
                        <Image className="object-cover" src="/gallery/yoga.jpg" fill alt="People doing yoga image" />
                    </div>
                    <div className="order-2 text-center md:text-left row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                        <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Movement Programs</h1>
                        <p className='text-xl'>We host movement-based programs that we present with a beginner-friendly, trauma-informed, and inclusive focus. All of our movement workshops have an emphasis on connection in one of three lenses: connecting to your environment, connecting to others, and connecting to yourself. By separating movement into these three categories, we are able to target specific organizational goals with utmost precision and care. All three are equally important in improving participants’ mental and physical health.</p>
                    </div>
                    <div className="order-4 text-center md:text-left md:order-3 row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                        <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Creative Art Programs</h1>
                        <p className='text-xl'>One of our main goals in Tutifruti is to encourage diverse coping mechanisms or emotional outlets, and creative art is an incredible way to learn valuable skills in mental health. We conduct low cost, accessible art workshops that teach unique techniques and mediums for all ages. From screenprinting to bookmaking, block printing to painting, we utilize the arts as a vehicle for emotional wellness, creative expression, and self-esteem.</p>
                        <br />
                    </div>
                    <div id="art" className="order-3 md:order-4 row-span-1 col-span-1 relative block">
                        <Image className="object-cover" src="/gallery/workshop.jpg" fill alt="Art workshop image" />
                    </div>
                    <div id="mental" className="order-5 row-span-1 col-span-1 relative block">
                        <Image className="object-cover" src="/gallery/class.png" fill alt="Mental health workshop image" />
                    </div>
                    <div className="order-6 text-center md:text-left row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                        <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Mental Health Education</h1>
                        <p className='text-xl'>We offer peer-led guided discussions related to various mental health topics, in order to maintain safe spaces to talk with like-minded people about complex and impactful circumstances. These discussions may include aspects of mental health education sourced from reputable, evidence-based writing on the topics at hand.</p>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}