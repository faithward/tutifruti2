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
                <div className='h-full'>
                    <div className='h-screen w-full flex flex-col mx-auto relative block'>
                        <h1 className="text-4xl mt-2 text-center font-tutifruti">Shop</h1>
                        <Image priority fill className='object-contain' alt="..." src="/shop.png" />
                    </div>
                    <div className='flex justify-center'>
                        <Link className="mx-auto mb-6" target="_blank" href="https://tutifruti.bigcartel.com"><Image alt="Shop All!" src="shopallbutton.svg" width={200} height={100} /></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

/**
 *                 <div>
                    <div className="flex flex-col container mx-auto relative">
                        <h1 className="text-4xl mt-2 text-center font-tutifruti">Shop</h1>
                        <div className='block'>
                            <Image className='object-fit' priority alt="..." src="/shop.png" fill />
                        </div>
                        <div className='mx-auto'>
                            <Link className="md:w-1/6 w-1/4 mx-auto mb-6" target="_blank" href="https://tutifruti.bigcartel.com"><Image alt="Shop All!" src="shopallbutton.svg" width={200} height={100} /></Link>
                        </div>
                    </div>
                </div>
 */