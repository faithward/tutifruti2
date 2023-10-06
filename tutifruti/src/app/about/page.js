import React from 'react';
import { Navbar } from '../navbar';

export default function About () {
    return (
        <div>
            <Navbar />
            <h1 class="text-center text-4xl">Meet Our Team</h1>
            <div class="container bg-lightblue mx-auto">
                <div class="grid grid-cols-4 grid-rows-1 gap-4 p-6">
                    <div class="bg-white border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                    <div class="bg-white border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                    <div class="bg-white border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                    <div class="bg-white border-2 border-solid border-darkblue h-40 rounded-lg">
                        <h1 class="text-center text-xl">Team</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};