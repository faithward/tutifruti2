import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default function About() {
    return (
        <div class="bg-white h-full">
            <Navbar />
            <h1 class="text-center text-4xl font-tutifruti">Meet Our Team</h1>
            <div class="container bg-lightblue rounded-md my-4 mx-auto">
                <div class="flex flex-col gap-4 p-6">
                    <div class="">
                        <img class="rounded-md" src="/gallery/isaromina2.png" alt="The photo is shy but I swear they look cool" />
                    </div>
                    <div class="flex sm:flex-row flex-col gap-4">
                        <div class="bg-tan border-2 border-solid border-darkblue rounded-lg">
                            <h1 class="text-center text-2xl mt-2 font-tutifruti">ISA OSTOS</h1>
                            <h4 class="text-center pb-3 text-xl font-tutifruti">President</h4>
                            <p class="text-center pb-1 px-4 font-mono">Hi! I am Isa and I am a Colombian artist based in South Florida.  I have a Bachelors degree in Anthropology and International Affairs from Florida State University, and an MFA in Documentary Filmmaking from Northwestern University.</p>
                            <p class="text-center pb-2 px-4 font-mono">As the President of tutifruti, my vision is to maintain safe spaces for BIPOC, women/girls, and LGBTQ+ skaters where internal growth and physical wellness are encouraged and nurtured.</p>
                        </div>
                        <div class="bg-tan border-2 border-solid border-darkblue rounded-lg">
                            <h1 class="text-center text-2xl mt-2 font-tutifruti">ROMINA PALMERO</h1>
                            <h4 class="text-center pb-3 text-xl font-tutifruti">Vice President</h4>
                            <p class="text-center pb-1 px-4 font-mono">I’m Romina, a Venezuelan artist raised in South Florida. I received a BA in Studio Art from Florida State University, with a focus on photography and printmaking. I am passionate about writing, bookmaking, film photography, mental health, and of course, skating!</p>
                            <p class="text-center pb-2 px-4 font-mono">As Vice President of tutifruti, I bring my academic experiences and life experiences to my work in order to lead with integrity, compassion, and intentionality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};