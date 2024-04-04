import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <nav className="bg-opacity-40 sticky top-0 backdrop-filter backdrop-blur-lg z-10">
      <div className="h-24 mx-auto px-5 flex items-center w-full">
        <Link className="hover:shadow-darkblue transition-opacity flex gap-2 cursor-pointer w-1/6" href="/">
          <Image className="hidden md:flex" src="/logofruit.png" alt="logo" width={300} height={150} />
          <Image className="md:hidden" src="/strawb.png" alt="strawbaby" width={30} height={45} />
        </Link>
        <div className="w-4/6 flex justify-center">
          <ul className="flex body-font text-center items-center gap-7">
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-md md:text-lg" href="/what">What We Do</Link></li>
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-md md:text-lg" href="/about">Our Team</Link></li>
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-md md:text-lg" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-lightred text-black font-tutifruti transition-colors text-md md:text-lg" href="/shop">Shop</Link></li>
          </ul>
        </div>
        <div className="w-1/6 flex justify-end">
          <Link className="hover:text-darkblue transition-colors font-mono pr-1" target="blank" href="https://www.instagram.com/tutifruti.sk8/"><Image src="/instagram.svg" alt="Instagram" width={30} height={30} /></Link></div>
      </div>
    </nav>
  );
};

//          <li><Link className="hover:text-darkblue transition-colors" href="/media">Media</Link></li>

