import React from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Shop() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Navbar />
                <div>
                    <div className="grid grid-rows-6 grid-cols-1 container mx-auto mb-4 relative">
                        <h1 className="text-4xl row-span-1 mt-2 text-center font-tutifruti">Shop</h1>
                        <div className='relative block row-span-4'>
                            <Image className='object-cover' priority alt="..." src="/shop.png" fill />
                        </div>
                        <div className='row-span-1 mx-auto'>
                            <Link className="md:w-1/6 w-1/4 mx-auto mb-6" target="_blank" href="https://tutifruti.bigcartel.com"><Image alt="Shop All!" src="shopallbutton.svg" width={300} height={150} /></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};