import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export default function About () {
    return (
        <div class="bg-white h-full">
            <Navbar />
            <h1 class="text-center text-4xl">Meet Our Team</h1>
            <div class="container bg-lightblue rounded-md my-4 mx-auto">
                <div class="grid grid-cols-4 grid-rows-1 gap-4 p-6">
                    <div class="bg-tan border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                    <div class="bg-tan border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                    <div class="bg-tan border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                    <div class="bg-tan border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};