import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

//style={{backgroundImage: './tutifruti/public/skaterguy.png',}}

export default function Contact() {
    return (
        <>
            <div className="bg-lightblue lg:bg-contain bg-cover bg-no-repeat bg-skaterguy bg-right-bottom">
                <Navbar />
                <div className="min-h-screen mt-8">
                    <h1 className="text-4xl mt-2 text-center font-tutifruti">Contact Us</h1>
                    <div className="container mx-auto flex justify-center">
                        <form className="text-white text-lg sm:w-1/2 w-3/4" action="mailto:faithytest@yopmail.com">
                            <label for="name">Name</label><br></br>
                            <input className="mb-2 text-black px-1 w-full" type="text" id="name" name="name"></input>
                            <br></br>
                            <label for="mail">Email</label><br></br>
                            <input className="mb-2 text-black px-1 w-full" type="email" id="mail" name="mail" required></input>
                            <br></br>
                            <label for="subj">Subject</label><br></br>
                            <input className="mb-2 text-black px-1 w-full" type="text" id="subj" name="subj"></input>
                            <br></br>
                            <label for="message">Message</label>
                            <br></br>
                            <textarea className="mb-2 text-black w-full" id="message" name="message" rows="4" cols="50" required></textarea>
                            <br></br>
                            <div className="flex justify-center text-black px-1">
                            <input type="submit" value="SEND" className="border-2 border-black text-xl px-1 rounded hover:border-darkblue font-bold font-tutifruti"></input>
                            </div>                        
                        </form>
                    </div>
                    <h1 className="text-2xl mt-10 text-center text-white font-tutifruti">Or email us directly at tutifrutiskate@gmail.com</h1>
                </div>
                <Footer />
            </div>
        </>
    )
};