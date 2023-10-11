import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

//style={{backgroundImage: './tutifruti/public/skaterguy.png',}}

export default function Contact() {
    return (
        <>
            <div class="bg-lightblue lg:bg-contain bg-cover bg-no-repeat bg-skaterguy bg-right-top">
                <Navbar />
                <div class="min-h-screen">
                    <h1 class="text-4xl mt-2 text-center font-mono">Contact Us</h1>
                    <div class="container mx-auto flex justify-center">
                        <form class="text-white text-lg font-mono sm:w-1/2 w-3/4" action="mailto:faithytest@yopmail.com">
                            <label for="name">NAME</label><br></br>
                            <input class="mb-2 text-black px-1 w-full" type="text" id="name" name="name"></input>
                            <br></br>
                            <label for="mail">EMAIL</label><br></br>
                            <input class="mb-2 text-black px-1 w-full" type="email" id="mail" name="mail" required></input>
                            <br></br>
                            <label for="subj">SUBJECT</label><br></br>
                            <input class="mb-2 text-black px-1 w-full" type="text" id="subj" name="subj"></input>
                            <br></br>
                            <label for="message">MESSAGE</label>
                            <br></br>
                            <textarea class="mb-2 text-black w-full" id="message" name="message" rows="4" cols="50" required></textarea>
                            <br></br>
                            <div class="flex justify-center text-black font-mono px-1">
                            <input type="submit" value="SEND" class="border-2 border-black px-1 rounded hover:border-darkblue"></input>
                            </div>                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};