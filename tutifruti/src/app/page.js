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
        <div className='w-full flex flex-col bg-skatergirl bg-no-repeat bg-cover bg-center mx-auto justify-center p-6'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="text-3xl backdrop-blur-sm my-8 mx-auto w-3/4 text-center text-white font-tutifruti">tutifruti promotes mental health and physical wellness in disenfranchised communities through skate and art.</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link className="mx-auto mt-6" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><Image alt="support us" src="supportusbutton.svg" width={120} height={60} /></Link>
        </div>
        <p className='mx-auto my-4 text-xl w-1/2 text-center text-black font-bold p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus nibh sit amet turpis egestas imperdiet. Fusce eget dolor ipsum. Pellentesque sodales tempus volutpat. Phasellus ut lectus eros. Praesent eget nunc at sem lacinia rhoncus. Sed sed mi tempor lacus vehicula lacinia. Nam venenatis urna vel maximus.</p>
        <div className='font-tutifruti text-3xl w-full mx-auto justify-center mt-4 px-12 flex flex-row h-screen gap-8'>
          <div className='text-center w-1/3 p-4 h-3/4 bg-lightblue'>
            <h1>Community Skate Events</h1>
            <div></div>
          </div>
          <div className='text-center w-1/3 p-4 h-3/4 bg-lightblue'>
            <h1>Skate Clinic Sign Up</h1>
            <div></div>
          </div>
          <div className='text-center w-1/3 p-4 h-3/4 bg-lightblue'>
            <h1>Private Lessons</h1>
            <div></div>
          </div>
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