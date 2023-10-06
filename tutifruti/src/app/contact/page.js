import React from 'react';
import { Navbar } from '../navbar';

export default function Contact () {
    return (
        <>
        <Navbar />
        <div class="bg-lightblue">
            <h1 class="text-4xl text-center">Contact Us</h1>
            <div class="container mx-auto flex justify-center">
                <form>
                    <label for="name">Name:</label><br></br>
                    <input type="text" id="name" name="name"></input>
                    <br></br>
                    <label for="mail">Email</label><br></br>
                    <input type="email" id="mail" name="mail"></input>
                    <br></br>
                    <label for="subj">Subject:</label><br></br>
                    <input type="text" id="subj" name="subj"></input>
                    <br></br>
                    <label for="message">Message:</label>
                    <br></br>
                    <textarea id="message" name="message" rows="4" cols="50"></textarea>
                    <br></br>
                    <input type="submit" value="Submit" class="border-2 border-black hover:border-darkblue"></input>
                </form>
            </div>
        </div>
        </>
    )
};