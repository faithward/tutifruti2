"use client"
import { Navbar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import React from "react";
import Image from 'next/image.js';
import Link from 'next/link.js';

function App() {
  return (
    <div class="bg-white">
      <Navbar />
      <div class="min-h-screen bg-white grid grid-cols-1">
        <div id="topSection" class="grid grid-cols-5 grid-rows-1 h-full">
          <div class="col-span-3 bg-blueSquare bg-no-repeat rounded-lg h-fit m-4 p-4 grid grid-cols-1 justify-center">
            <h1 class="text-center text-3xl pb-1 pt-2 font-tutifruti">What We Do</h1>
            <p class="font-default text-lg mx-1 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed lacus urna. Nunc sollicitudin tristique arcu ac mollis. Sed ultricies, mauris id pellentesque imperdiet, ante nunc pretium lacus, ullamcorper volutpat lacus purus non lacus. Quisque et sollicitudin lectus, eget interdum odio. Fusce tortor magna, tristique eu eleifend in, tristique ac est. Vestibulum a velit eu nunc laoreet fermentum. Praesent at velit quam. Maecenas finibus vehicula elit at porttitor. Duis nulla nulla, molestie a ante vel, sollicitudin ultrices ex.</p>
            <p class="font-default text-lg mx-1 pb-3 text-center">Vivamus justo mi, pulvinar ornare feugiat sit amet, ornare vitae libero. Mauris sagittis dapibus felis, vel tincidunt tortor elementum tincidunt. Aliquam nec metus et justo malesuada viverra ac eget ante.</p>
            <Link class="md:w-1/6 w-1/4 mx-auto mb-6" target="_blank" href="https://linktr.ee/tutifruti.sk8?lt_utm_source=lt_share_link#302007025"><img alt="support us" src="supportusbutton.svg"></img></Link>
          </div>
          <div class="col-span-2 h-100 m-2 relative z-0">
            <Image alt="..." src="/pic1.png" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div id="photoSection" class="grid grid-rows-2 grid-cols-2 gap-2 m-2">
            <div class="row-span-1 col-span-1"><img class="" src="/gallery/skatergirl.jpg" /><p>These photos need manual resizing to match each other.</p></div>
            <div class="row-span-1 col-span-1"><img class="" src="/gallery/painting2.jpg" /></div>
            <div class="row-span-1 col-span-1"><img class="" src="/gallery/class.png" />We also need input on photo choice and captions.</div>
            <div class="row-span-1 col-span-1"><img class="" src="/gallery/helmet.png" />The grid also needs to be made responsive for smaller screens.</div>
        </div>
        <div id="calendarSection">
          <h1 class="text-center text-3xl font-tutifruti">Calendar</h1>
          <div class="flex flex-row h-2/3 w-5/6 justify-center mx-auto">
            <div class="flex flex-col">
              <p>fruit key</p>
              <p>fruit 1</p>
              <p>fruit 2</p>
              <p>fruit 3</p>
            </div>
            <img alt="Calendar isn't loading :(" src="october.png"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

/**        <div id="calSection">
<h1 class="text-center text-3xl">Organization Calendar</h1>
<div class="grid grid-cols-8 grid-rows-1 gap-4">
  <div class="col-span-2 m-2">
    <h1 class="text-center text-xl underline">Key</h1>
  </div>
  <div class="col-span-6 m-2">
    <img class="max-h-full" src="may .png" alt="calendar missing :("></img>
  </div>
</div>
</div> */