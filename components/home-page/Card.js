import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ image, animeId }) {
    return (
        <Link href={`/anime/${animeId}`} passHref>
            <div
                className="relative w-[98px] h-[140px] sm:w-[105px] sm:h-[155px] md:w-[120px] md:h-[175px] lg:w-[140px] lg:h-[215px] rounded-[0.75em] cursor-pointer transition-[transform] duration-300 ease-in hover:scale-105 bg-[#1c1f31]"
                key={animeId}
            >
                <Image
                    src={image}
                    className="object-cover rounded-[0.75em]"
                    layout="fill"
                    alt=""
                />
            </div>
        </Link>
    );
}
