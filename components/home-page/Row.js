import React, { useRef, useCallback } from "react";
import Card from "./Card";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import EpisodeCard from "../global/EpisodeCard";

export default function Row({ title, data, type }) {
    const divScrollRef = useRef();

    const scrollHandler = useCallback((direction) => {
        if (divScrollRef.current) {
            const { scrollLeft, clientWidth } = divScrollRef.current;

            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            divScrollRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth",
            });
        }
    }, []);

    return (
        <div className="space-y-2">
            <div className="paddingElements flex items-center justify-between">
                <h1 className="text-xl sm:text-2xl md:text-3xl">{title}</h1>

                <div className="space-x-2">
                    <HiChevronLeft
                        className="w-8 h-8 z-40 m-auto cursor-pointer transition hover:scale-125 group-hover:opacity-100 hidden md:inline"
                        onClick={() => scrollHandler("left")}
                    />

                    <HiChevronRight
                        className="w-8 h-8 z-40 m-auto cursor-pointer transition hover:scale-125 group-hover:opacity-100 hidden md:inline"
                        onClick={() => scrollHandler("right")}
                    />
                </div>
            </div>

            {/* Thumbnail */}
            <div className="sm:paddingElements relative group">
                <div
                    className="flex items-center space-x-3 md:space-x-6 px-[1em] py-[0.3em] sm:p-[0.5em] hideScroll overflow-x-scroll overflow-y-hidden"
                    ref={divScrollRef}
                >
                    {type === "Card" &&
                        data.map((element) => {
                            return (
                                <div key={element.id}>
                                    <Card
                                        animeId={element.id}
                                        image={element.image}
                                    />
                                </div>
                            );
                        })}

                    {type === "Episode" &&
                        data.map((episode) => {
                            if (episode.id) {
                                return (
                                    <div key={episode.id}>
                                        <EpisodeCard
                                            thumbnail={episode.image}
                                            episodeId={episode.id}
                                            episodeName={episode.title}
                                            episodeNumber={episode.number}
                                        />
                                    </div>
                                );
                            }
                        })}
                </div>
            </div>
        </div>
    );
}
