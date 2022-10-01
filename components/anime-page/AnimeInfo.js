import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { IoPlaySharp } from "react-icons/io5";
// import { MdWatchLater } from "react-icons/md";

export default function AnimeInfo({ data }) {
    const router = useRouter();

    return (
        <section className="px-[0.5em] sm:px-[1.5em] md:px-[2em] lg:px-[3em] max-w-[1750px] m-auto sm:flex -translate-y-[100px] sm:-translate-y-[60px] sm:space-x-6 md:space-x-8 lg:space-x-10">
            <div className="flex justify-center sm:block rounded-[0.75em] mb-[2.5em]">
                {/* Poster Image */}
                <div className="relative w-[175px] h-[260px] md:w-[200px] md:h-[285px] 2xl:w-[250px] 2xl:h-[345px] rounded-[0.75em] bg-[#1c1f31]">
                    <Image
                        src={data.image}
                        className="object-cover rounded-[0.75em]"
                        layout="fill"
                        alt="Anime Poster Image"
                    />
                </div>
            </div>
            {/* Anime Info with title and synopsis */}
            <div className="mt-[1em] sm:mt-[2.75em]">
                <div>
                    <h1 className="max-w-[80%] text-3xl font-semibold md:text-4xl lg:text-[2.5rem] 2xl:text-[3.5rem] 2xl:leading-[1em] mb-[0.15em]">
                        {data.title.english || data.title.romaji}
                    </h1>
                    <h3 className="text-[rgba(255,238,242,0.55)] mb-[0.55em] sm:mb-[0.25em]">
                        {data.title.native}
                    </h3>

                    <div className="flex space-x-4 mb-[0.75em] text-s">
                        <h2>{data.type}</h2>
                        <h2>
                            {data.totalEpisodes ||
                                data.episodes.length}{" "}
                            episodes
                        </h2>
                    </div>

                    <div className="mb-[1.75em] flex items:center space-x-5">
                        <button
                            className="flex items-center justify-center space-x-2 bg-[#1c50d4] px-[0.75em] py-[0.5em] rounded-md hover:opacity-60 transition-[opacity] duration-300 ease-in"
                            onClick={() =>
                                router.push(
                                    `/anime/${router.query.animeId}/watch?v=${data.episodes[0].id}`
                                )
                            }
                        >
                            <IoPlaySharp />
                            <p>Play</p>
                        </button>
                        {/* <button className="flex items:center justify-center space-x-2 border-2 border-[rgba(255,238,242,0.88)] px-[0.75em] py-[0.5em] rounded-md text-[rgba(255,238,242,0.88)] hover:text-[rgba(255,238,242,0.55)] transtion-[text] duration-300 ease-in">
                            <MdWatchLater className="mt-[0.25em]" />
                            <p>Watch Later</p>
                        </button> */}
                    </div>

                    <p className="text-[rgba(255,238,242,0.55)] leading-[1.65] tracking-[0.075ch] mb-[1em]">
                        {data.description}
                    </p>

                    <div className="max-w-[250px] space-x-10">
                        <span>Start Date</span>
                        <span className="text-xl tracking-wide">
                            {data.startDate.day}-
                            {data.startDate.month}-
                            {data.startDate.year}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
