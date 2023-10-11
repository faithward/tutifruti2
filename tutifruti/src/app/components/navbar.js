import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <nav class="bg-opacity-40 sticky top-0 backdrop-filter backdrop-blur-lg z-10">
      <div class="h-24 mx-auto px-5 flex items-center w-full">
        <Link class="hover:shadow-darkblue transition-opacity cursor-pointer w-1/6" href="/"><Image src="/tfblack.png" alt="logo" width={200} height={100} /></Link>
        <div class="w-full flex justify-center">
        <ul class="flex items-center gap-5">
          <li><Link class="hover:text-darkblue transition-colors font-mono" href="/about">About Us</Link></li>
          <li><Link class="hover:text-darkblue transition-colors font-mono" href="/contact">Contact</Link></li>
          <li><Link class="hover:text-darkblue transition-colors font-mono" target="blank" href="https://tutifruti.bigcartel.com">Shop</Link></li>
        </ul>
        </div>
      <div class="w-1/6 flex justify-end">
        <Link class="hover:text-darkblue transition-colors font-mono pr-1" target="blank" href="https://www.instagram.com/tutifruti.sk8/"><Image src="/instagram.svg" alt="Instagram" width={30} height={30} /></Link></div>
      </div>
    </nav>
  );
};

//          <li><Link class="hover:text-darkblue transition-colors" href="/media">Media</Link></li>

