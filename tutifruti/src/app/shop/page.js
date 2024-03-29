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
                    <div className='h-screen w-full flex flex-col mx-auto'>
                        <h1 className="text-4xl mt-2 text-center font-tutifruti">Shop</h1>
                        <div className='w-full h-1/2 lg:h-full bg-smallshop lg:bg-shop bg-no-repeat bg-contain bg-center mx-auto'></div>
                        <div className='flex mb-4 justify-center'>
                            <Link className="mx-auto" target="_blank" href="https://tutifruti.bigcartel.com"><Image alt="Shop All!" src="shopallbutton.svg" width={170} height={85} /></Link>
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