import React from "react";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <header className="flex flex-col justify-center text-black font-medium font-tutifruti py-2 bg-lightblue">
                <p className="mx-auto text-md">tutifruti is a registered 501(c)(3).</p>
                <p className="mx-auto text-md">FEIN: 92-1511448</p>
                <p className="mx-auto text-md">website by faith ward.</p>
            </header>
        </>
    )
}