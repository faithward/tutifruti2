import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <nav className="bg-opacity-40 sticky top-0 backdrop-filter backdrop-blur-lg z-10">
      <div className="h-24 mx-auto px-5 flex items-center w-full">
        <Link className="hover:shadow-darkblue transition-opacity cursor-pointer w-1/6" href="/"><Image src="/tfblack.png" alt="logo" width={200} height={100} /></Link>
        <div className="w-full flex justify-center">
          <ul className="flex body-font items-center gap-5">
          <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-lg" href="/what">What We Do</Link></li>
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-lg" href="/about">Our Team</Link></li>
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-lg" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-lg" href="/shop">Shop</Link></li>
          </ul>
        </div>
        <div className="w-1/6 flex justify-end">
          <Link className="hover:text-darkblue transition-colors font-mono pr-1" target="blank" href="https://www.instagram.com/tutifruti.sk8/"><Image src="/instagram.svg" alt="Instagram" width={30} height={30} /></Link></div>
      </div>
    </nav>
  );
};

//          <li><Link className="hover:text-darkblue transition-colors" href="/media">Media</Link></li>

