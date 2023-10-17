import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Link from 'next/link';

export default function Shop() {
    return (
        <>
            <div class="bg-white min-h-screen">
                <Navbar />
                <h1 class="text-4xl mt-2 text-center font-tutifruti">Shop</h1>
                <div>
                    <div class="flex flex-col container mx-auto mb-4">
                        <img alt="..." src="shop.png"></img>
                        <Link class="md:w-1/6 w-1/4 mx-auto mb-6" target="_blank" href="https://tutifruti.bigcartel.com"><img alt="shop all!" src="shopallbutton.svg"></img></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};