import React from "react";
import Image from "next/image";

export default function CoverImage({ imageSrc }) {
    return (
        <section className="h-[45vh] md:h-[52vh] relative -z-[100]">
            <div className="relative w-full h-full">
                <Image
                    src={
                        imageSrc || `https://wallpaperaccess.com/full/39035.jpg`
                    }
                    alt="Anime Cover Image"
                    layout="fill"
                    className="object-cover w-full h-full"
                />
                <div className="addBgGradientBefore"></div>
            </div>
        </section>
    );
}
