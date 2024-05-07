import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <header className="flex flex-col justify-center text-black font-medium font-tutifruti py-2 bg-lightblue">
                <p className="mx-auto text-md">tutifruti is a registered 501(c)(3).</p>
                <p className="mx-auto text-md">FEIN: 92-1511448</p>
                <Link className="mx-auto text-md hover:text-lightred" target="_blank" href="https://www.linkedin.com/in/faithwardtech">website by faith ward.</Link>
            </header>
        </>
    )
}