import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-white h-full">
            <Navbar />
            <h1 className="text-center text-4xl font-tutifruti">Meet Our Team</h1>
            <div className="container bg-blueSquare bg-no-repeat bg-cover mb-2 w-5/6 min-h-screen mx-auto">
                <div className='flex p-11 gap-3'>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg h-full w-5/6">
                        <h1 className="text-center text-xl mt-2 font-tutifruti">ISA OSTOS</h1>
                        <div className='relative block w-3/4 m-2'>
                            <Image className="object-cover" src="/gallery/isa.png" fill />
                        </div>
                        <h4 className="text-center pb-3 text-lg font-tutifruti">Co-Director</h4>
                        <p className="text-center text-sm pb-1 px-4">Hi! I am Isa and I am a Colombian artist based in South Florida.  I have a Bachelors degree in Anthropology and International Affairs from Florida State University, and an MFA in Documentary Filmmaking from Northwestern University.  As the Co-Director of tutifruti, my vision is to maintain safe spaces for BIPOC, women/girls, and LGBTQ+ skaters where internal growth and physical wellness are encouraged and nurtured.</p>
                    </div>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-xl mt-2 font-tutifruti">ROMINA PALMERO</h1>
                        <h4 className="text-center pb-3 text-lg font-tutifruti">Co-Director</h4>
                        <p className="text-center text-sm pb-1 px-4">I’m Romina, a Venezuelan artist raised in South Florida. I received a BA in Studio Art from Florida State University, with a focus on photography and printmaking. I am passionate about writing, bookmaking, film photography, mental health, and of course, skating! As Co-Director of tutifruti I bring my life experiences, as well as my academic ones, to my work in order to lead with integrity, compassion, and intentionality.</p>
                    </div>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-xl mt-2 font-tutifruti">ROZY</h1>
                        <h4 className="text-center pb-3 text-lg font-tutifruti">Community Outreach Volunteer</h4>
                        <p className="text-center text-sm pb-1 px-4">Hey, my name is Rozaly. I’m a rollerskater who is new to skateboarding. I’m super excited to be working with tutifruti. I hope to add my fun and optimistic personality to help further the important work that this organization is doing. I truly value mental health. I want to help create safe spaces for people, provide resources for those in need, and facilitate kindness within the skate community.</p>
                    </div>
                    <div className="bg-tan border-2 border-solid border-darkblue rounded-lg w-5/6">
                        <h1 className="text-center text-xl mt-2 font-tutifruti">THANIA</h1>
                        <h4 className="text-center pb-3 text-lg font-tutifruti">Board Member</h4>
                        <p className="text-center text-sm pb-1 px-4">Thania helps run the organization. We love her very much.</p>
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