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
        <div className='w-full flex flex-col bg-haulover bg-no-repeat bg-cover bg-center mx-auto justify-center p-6'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-3xl rounded-md backdrop-blur-sm my-8 mx-auto w-3/4 text-center text-font font-tutifruti">tutifruti promotes mental health and physical wellness in disenfranchised communities through skate and art.</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link className="mx-auto mt-6" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><Image alt="support us" src="supportusbutton.svg" width={180} height={90} /></Link>
        </div>
        <p className='mx-auto my-4 text-xl w-3/4 text-center text-black font-nun p-4'>Welcome to Tutifruti, where we blend the vibrant worlds of skateboarding, rollerskating, and creative arts to champion the cause of mental health education and advocacy. We host a spectrum of experiences, from dynamic community events and creative art workshops to skate clinics and private lessons, igniting dialogues and fostering support networks. Tutifruti stands firm in embracing and empowering diverse demographics, especially women, girls, BIPOC, and LGBTQ+ individuals. Join us on this transformative journey, where every contribution fuels a brighter, more mentally resilient world!</p>
        <div className='font-tutifruti text-3xl w-full mx-auto justify-center mt-4 px-12 flex flex-row h-screen gap-8'>
            <Link href="/what/#events" className='text-center w-1/3 p-4 h-3/4 bg-lightblue'>
              <h1>Community Events</h1>
              <div className='relative block h-5/6 m-2'>
                <Image className="object-cover" src="/gallery/justice.png" fill />
              </div>
          </Link>
          <Link href="/what/#clinics" className='text-center w-1/3 p-4 h-3/4 bg-lightblue'>
            <h1>Skate Clinics</h1>
            <div className='relative block h-5/6 m-2'>
              <Image className="object-cover" src="/gallery/skateflower.jpg" fill />
            </div>
          </Link>
          <Link href="/what/#privateLessons" className='text-center w-1/3 p-4 h-3/4 bg-lightblue'>
            <h1>Private Lessons</h1>
            <div className='relative block h-5/6 m-2'>
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