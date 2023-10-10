import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Image from 'next/image';

//style={{backgroundImage: './tutifruti/public/skaterguy.png',}}

export default function Contact() {
    return (
        <>
            <div class="bg-lightblue bg-contain bg-no-repeat bg-skaterguy bg-right">
                <Navbar />
                <div class="min-h-screen">
                    <h1 class="text-4xl mt-2 text-center">Contact Us</h1>
                    <div class="container mx-auto flex justify-center">
                        <form class="flex-col text-white" action="mailto:faithytest@yopmail.com">
                            <label for="name">NAME</label><br></br>
                            <input class="w-full mb-2 text-black px-1" type="text" id="name" name="name"></input>
                            <br></br>
                            <label for="mail">EMAIL</label><br></br>
                            <input class="w-full mb-2 text-black px-1" type="email" id="mail" name="mail" required></input>
                            <br></br>
                            <label for="subj">SUBJECT</label><br></br>
                            <input class="w-full mb-2 text-black px-1" type="text" id="subj" name="subj"></input>
                            <br></br>
                            <label for="message">MESSAGE</label>
                            <br></br>
                            <textarea class="mb-2 text-black" id="message" name="message" rows="4" cols="50" required></textarea>
                            <br></br>
                            <div class="w-full flex justify-center text-black px-1">
                            <input type="submit" value="SEND" class="border-2 border-black px-1 rounded hover:border-darkblue"></input>
                            </div>                        
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};