"use client"
import { Navbar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import React from "react";
import Image from 'next/image.js';
import Link from 'next/link.js';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col">
        <div className='w-full flex flex-col bg-haulover bg-no-repeat bg-cover bg-center mx-auto justify-between p-10 lg:p-16'>
          <h1 className="text-3xl rounded-md backdrop-blur-sm my-8 mx-auto w-3/4 text-center text-font font-tutifruti">tutifruti promotes mental health and physical wellness in disenfranchised communities through skate and art.</h1>
          <Link className="mx-auto mt-28" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><Image alt="support us" src="supportusbutton.svg" width={180} height={90} /></Link>
        </div>
        <p className='mx-auto mt-4 mb-2 text-xl w-3/4 text-center text-black p-2'>Welcome to Tutifruti, where we blend the vibrant worlds of skateboarding, rollerskating, and creative arts to champion the cause of mental health education and advocacy. We host a spectrum of experiences in South Florida, from dynamic community events and creative art workshops to skate clinics and private lessons, igniting dialogues and fostering support networks. Tutifruti stands firm in embracing and empowering diverse demographics, especially women, girls, BIPOC, and LGBTQ+ individuals. Join us on this transformative journey, where every contribution fuels a brighter, more mentally resilient world!</p>
        <div className='font-tutifruti text-3xl w-full my-4 mx-auto justify-between flex flex-col gap-2 h-fit px-8 lg:px-12 lg:h-screen lg:flex-row'>
          <Link href="/what/#events" className='text-center w-full lg:w-1/3 p-6 lg:p-14 h-128 flex flex-col justify-between bg-blue350 md:max-lg:bg-blue704 bg-contain bg-no-repeat bg-center'>
            <h1 className='pt-3 lg:pt-1'>Community Events</h1>
            <div className='relative block h-full m-4 md:max-lg:w-5/6 md:max-lg:mx-auto'>
              <Image className="object-cover" src="/gallery/justice.png" fill />
            </div>
          </Link>
          <Link href="/what/#clinics" className='text-center w-full lg:w-1/3 p-6 lg:p-14 h-128 flex flex-col justify-between bg-blue350B md:max-lg:bg-blue704 bg-contain bg-no-repeat bg-center'>
            <h1 className='pt-3 lg:pt-1'>Skate Clinics</h1>
            <div className='relative block h-full m-6 md:max-lg:w-5/6 md:max-lg:mx-auto'>
              <Image className="object-cover" src="/gallery/skateflower.jpg" fill />
            </div>
          </Link>
          <Link href="/what/#privateLessons" className='text-center w-full lg:w-1/3 p-6 lg:p-14 h-128 flex flex-col justify-between bg-blue350 md:max-lg:bg-blue704 bg-contain bg-no-repeat bg-center'>
            <h1 className='pt-3 lg:pt-1'>Private Lessons</h1>
            <div className='relative block h-full m-6 md:max-lg:w-5/6 md:max-lg:mx-auto'>
              <Image className="object-cover" src="/gallery/skatergirl.jpg" fill />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/**        
 * 
 *         <div id="calendarSection">
          <h1 className="text-center text-3xl font-tutifruti">Calendar</h1>
          <div className="flex flex-row h-2/3 w-5/6 justify-center mx-auto">
            <div className="flex flex-col">
              <p>fruit key</p>
              <p>fruit 1</p>
              <p>fruit 2</p>
              <p>fruit 3</p>
            </div>
            <img alt="Calendar isn't loading :(" src="october.png"></img>
          </div>
        </div>
 */