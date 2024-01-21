import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function What() {
    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='w-100 h-screen'>
                <div className='w-full flex flex-col bg-yellow mx-auto justify-center p-6'>
                    <h1 className="text-5xl my-8 text-center font-tutifruti">What We Do</h1>
                    <div className='w-3/4 h-full text-center mx-auto gap-12 grid grid-cols-3 grid-rows-1'>
                        <div className='col-span-1'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Mission</h1>
                            <p className='p-4'>To educate on and advocate for the importance of mental health through skateboarding, rollerskating, and creative arts.</p>
                        </div>
                        <div className='col-span-1'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Vision</h1>
                            <p className='p-4'>We hope to encourage individuals, particularly from marginalized communities, to prioritize their mental and physical health through diverse means and utilize tools learned in our programs to overcome challenges in their lives.</p>
                        </div>
                        <div className='col-span-1'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Values</h1>
                            <p className='p-4'>We value integrity, education, and inclusivity, by providing opportunities to participate, learn, and collaborate with your local skate and art communities.</p>
                        </div>
                    </div>
                    <Link className="mx-auto mt-6" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><Image alt="support us" src="supportusbutton.svg" width={120} height={60}/></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}