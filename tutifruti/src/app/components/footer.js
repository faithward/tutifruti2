import React from "react";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <header className="flex flex-col justify-center text-black font-tutifruti py-2 bg-lightblue bg-opacity-60 hover:bg-opacity-100">
                <p className="mx-auto text-sm">tutifruti is a registered 501(c)(3).</p>
                <p className="mx-auto text-sm">website by faith ward.</p>
            </header>
        </>
    )
}