import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function What() {
    return (
        <div className='bg-white min-h-screen'>
            <Navbar />
            <div className='w-100 h-full text-black'>
                <div id="topSection" className='w-full flex flex-col bg-yellow mx-auto justify-center p-6'>
                    <h1 className="text-5xl my-8 text-center font-tutifruti">What We Do</h1>
                    <div className='w-full h-full text-center px-2 mx-auto gap-4 md:gap-8 flex md:flex-row flex-col'>
                        <div className='md:w-1/3'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Mission</h1>
                            <p className='p-4 text-lg'>To educate on and advocate for the importance of mental health through skateboarding, rollerskating, and creative arts.</p>
                        </div>
                        <div className='md:w-1/3'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Vision</h1>
                            <p className='p-4 text-lg'>We hope to encourage individuals, particularly from marginalized communities, to prioritize their mental and physical health through diverse means and utilize tools learned in our programs to overcome challenges in their lives.</p>
                        </div>
                        <div className='md:w-1/3'>
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti'>Values</h1>
                            <p className='p-4 text-lg'>We value integrity, education, and inclusivity, by providing opportunities to participate, learn, and collaborate with your local skate and art communities.</p>
                        </div>
                    </div>
                    <Link id="privateLessons" className="mx-auto mt-6" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><Image alt="support us" src="supportusbutton.svg" width={180} height={90} /></Link>
                </div>
                <div id="pairs" className='px-8 py-4'>
                    <div id="pair1" className="grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4 m-4 min-h-screen">
                        <div className="order-1 row-span-1 col-span-1 relative block">
                            <Image className="object-cover" src="/gallery/skatergirl.jpg" fill />
                        </div>
                        <div id="clinics" className="order-2 text-center md:text-left row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Private Lessons</h1>
                            <p className='text-xl'>We offer private individual and group lessons for all ages, all identities, and all levels. Our lessons last an hour and we meet our students at local skateparks– there’s always two coaches on site for additional support. Our coaching is trauma-informed, based on our personal work in mental health, trauma, and our experiences as skaters. As part of our mission, we help students navigate through the emotional blocks that are part of life including those that come up during skating. Private lessons are available every week, 7 days a week. The aim of the private lessons is to offer a structured, safe environment where we focus on specific tricks, lines, and personal goals that our students want to achieve.</p>
                        </div>
                        <div className="order-4 text-center md:text-left md:order-3 row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Skate Clinics</h1>
                            <p className='text-xl'>We host free or low cost skate clinics (skateboarding and rollerskating) across South Florida. The focus of these clinics is to offer accessible coaching to our local community. The clinics are primarily for beginner level skaters, but we encourage anyone who wants to participate to show up as a participant or volunteer! All clinics are hosted at local skateparks  throughout Miami-Dade, Broward, and Palm Beach counties. Loaner gear is available for participants to borrow, and refreshments (water and snacks) are always part of our programming. Our clinics run for an average of 3 hours which include an hour of active coaching and 2 hours of open skate with coaches present as a resource.</p>
                        </div>
                        <div id="events" className="order-3 md:order-4 row-span-1 col-span-1 relative block">
                            <Image className="object-cover" src="/gallery/skateflower.jpg" fill />
                        </div>
                    </div>
                    <div id="pair2" className="grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4 m-4 min-h-screen">
                        <div className="order-1 row-span-1 col-span-1 relative block">
                            <Image className="object-cover" src="/gallery/justice.png" fill />
                        </div>
                        <div className="order-2 text-center md:text-left row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Community Events</h1>
                            <p className='text-xl'>Community skate events are opportunities for Tutifruti to “take over a skatepark” and give back to the community. These are structured as a social meet up where people show up and skate, make art, and meet new people. Our community events are centered around women, BIPOC, and LGBTQ+ individuals, but all ages and identities are welcome. We often host giveaways at our community events, thanks to our generous partners!</p>
                        </div>
                        <div className="order-4 text-center md:text-left md:order-3 row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Creative Art Workshops</h1>
                            <p className='text-xl'>One of our main goals in Tutifruti is to encourage diverse coping mechanisms or emotional outlets, and creative art is an incredible way to learn valuable skills in mental health. We conduct low cost, accessible art workshops that teach unique techniques and mediums for all ages. From screenprinting to bookmaking, block printing to painting, we utilize the arts as a vehicle for emotional wellness, creative expression, and self-esteem.</p>
                        </div>
                        <div className="order-3 md:order-4 row-span-1 col-span-1 relative block">
                            <Image className="object-cover" src="/gallery/juliapaints.jpg" fill />
                        </div>
                    </div>
                    <div id="pair3" className="grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4 m-4 min-h-screen">
                        <div className="order-1 row-span-1 col-span-1 relative block">
                            <Image className="object-cover" src="/gallery/class.png" fill />
                        </div>
                        <div className="order-2 text-center md:text-left row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Mental Health Education</h1>
                            <p className='text-xl'>We offer peer-led guided discussions related to various mental health topics, in order to maintain safe spaces to talk with like-minded people about complex and impactful circumstances. These discussions may include aspects of mental health education sourced from reputable, evidence-based writing on the topics at hand.</p>
                        </div>
                        <div className="order-4 text-center md:text-left md:order-3 row-span-2 col-span-1 md:row-span-1 md:col-span-2 relative block">
                            <h1 className='text-2xl underline underline-offset-4 font-tutifruti mb-2'>Skate Advocacy</h1>
                            <p className='text-xl'>Part of our work to promote the sport of skating involves municipal advocacy for skateable spaces and skateparks. We attend and speak at commission meetings and town halls whenever possible, to ensure cities and government officials are aware of the positive impacts of skateparks, keep existing ones open, and build more. Decriminalizing and destigmatizing skating is a central tenet of Tutifruti’s work, as it is vital for the sport to be accessible and free of judgment (whether from the law or from individuals) to provide full benefits to a community.</p>
                        </div>
                        <div className="order-3 md:order-4 row-span-1 col-span-1 relative block">
                            <Image className="object-cover" src="/gallery/advocacy.jpg" fill />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}