"use client"
import React, { useState, useRef } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { useRouter } from 'next/navigation';
import Link from 'next/link.js';

export default function Contact() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
    const form = useRef();

    async function onSubmit(event) {
        event.preventDefault();
        emailjs.sendForm('default_service', 'template_u52c2oi', form.current)
            .then(() => {
                alert('Sent!');
                console.log('SUCCESS!');
                router.push('/');
            }, (error) => {
                alert("Whoops! Something went wrong. Please trying emailing us directly.");
                console.log('FAILED...', error);
            });
    }

    return (
        <>
            <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
            </script>
            <script type="text/javascript">
                emailjs.init('JiExRLDDeW_K8vjmM')
            </script>
            <div className="bg-lightblue lg:bg-contain bg-cover bg-no-repeat bg-skaterguy bg-bottom-right">
                <Navbar />
                <div className="min-h-screen mt-8">
                    <h1 className="text-4xl mt-2 text-center font-tutifruti">Contact Us</h1>
                    <div className="container mx-auto flex justify-center">
                        <form ref={form} onSubmit={onSubmit} className="text-white text-lg sm:w-1/2 w-3/4">
                            <label htmlFor="name">Name</label><br></br>
                            <input className="mb-2 text-black px-1 w-full" type="text" id="name" name="name" required></input>
                            <br></br>
                            <label htmlFor="email">Email</label><br></br>
                            <input className="mb-2 text-black px-1 w-full" type="email" id="email" name="email" required></input>
                            <br></br>
                            <label htmlFor="subject">Subject</label><br></br>
                            <input className="mb-2 text-black px-1 w-full" type="text" id="subject" name="subject" required></input>
                            <br></br>
                            <label htmlFor="message">Message</label>
                            <br></br>
                            <textarea className="mb-2 text-black w-full" id="message" name="message" rows="4" cols="50" required></textarea>
                            <br></br>
                            <div className="flex justify-center text-black px-1">
                                <button type="submit" value={isLoading} className="border-2 border-black text-xl px-1 rounded hover:border-darkblue font-bold font-tutifruti">
                                    {isLoading ? 'SENDING...' : 'SEND'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <h1 className="text-2xl mt-10 mx-auto text-center text-white font-tutifruti">Or email us directly at <Link href="mailto:tutifrutiskate@gmail.com">tutifrutiskate@gmail.com</Link></h1>
                </div>
                <Footer />
            </div>
        </>
    )
};