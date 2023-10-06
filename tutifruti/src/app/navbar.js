import React from "react";
import Link from "next/link";

export const Navbar = () => {
  //we have to initiate useNavigate
  //const navigate = useNavigate();

  return (
    <div class="shadow bg-white">
      <div class="h-16 mx-auto px-5 flex items-center justify-between">
        <a class="text-2xl hover:text-darkblue transition-colors cursor-pointer" href="/">Tuti Fruti</a>

        <ul class="flex items-center gap-5">
          <li><Link class="hover:text-darkblue transition-colors" href="/about">About Us</Link></li>
          <li><Link class="hover:text-darkblue transition-colors" href="/media">Media</Link></li>
          <li><Link class="hover:text-darkblue transition-colors" href="/contact">Contact</Link></li>
          <li><Link class="hover:text-darkblue transition-colors" href="/shop">Shop</Link></li>
          <li><Link class="hover:text-darkblue transition-colors" target="blank" href="https://www.instagram.com/tutifruti.sk8/">Instagram</Link></li>
        </ul>
        <a class="hover:text-darkblue transition-colors" href="/shop">Cart</a>
      </div>
    </div>
  );
};

