import React, { useEffect, useRef, useState } from "react";
import EpisodeDescription from "./EpisodeDescription";

const NUMBER_OF_EPISODES_PER_PAGE = 10;

export default function EpisodeList({ episodes, episodeCount }) {
    const inputRef = useRef();

    const [episodeDataPerPage, setEpisodeDataPerPage] = useState(
        episodes.slice(0, NUMBER_OF_EPISODES_PER_PAGE)
    );

    useEffect(() => {
        // Code specially for recommendation section whenever episodes change
        setEpisodeDataPerPage(episodes.slice(0, NUMBER_OF_EPISODES_PER_PAGE));
    }, [episodes]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (
            inputRef.current.value <=
            Math.ceil(episodeCount / NUMBER_OF_EPISODES_PER_PAGE)
        ) {
            const startIndex =
                parseInt(inputRef.current.value) * NUMBER_OF_EPISODES_PER_PAGE -
                NUMBER_OF_EPISODES_PER_PAGE;
            const endIndex = startIndex + NUMBER_OF_EPISODES_PER_PAGE;

            setEpisodeDataPerPage(episodes.slice(startIndex, endIndex));
        }
    };

    return (
        <section className="px-[0.5em] sm:px-[1.5em] md:px-[2em] max-w-[1750px] m-auto lg:px-[3em] space-y-4 py-[1em] md:py-[3em] mb-[3em]">
            <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-3xl">Episodes</h1>
                <div>
                    <form
                        className="space-x-2 sm:space-x-4"
                        onSubmit={submitHandler}
                    >
                        <label className="hidden sm:inline">Page</label>
                        <input
                            type="number"
                            min="1"
                            max={Math.ceil(episodeCount / 10)}
                            ref={inputRef}
                            className="rounded-md p-1 text-black w-[65px]"
                        />
                        <button className="border-2 border-[rgba(242,238,242,0.75)] py-1 px-2 rounded-[0.25em]">
                            Show
                        </button>
                    </form>
                </div>
            </div>
            <div className="h-[450px] py-[1em] px-[1em] overflow-y-scroll overflow-x-hidden border-2 border-[#1c1f31] rounded-tl-[1em] rounded-bl-[1em] relative bg-[#0d0d14]">
                <div className="space-y-2">
                    {episodeDataPerPage.map((episode) => {
                        if (episode.id) {
                            return (
                                <EpisodeDescription
                                    key={episode.id}
                                    episodeId={episode.id}
                                    episodeInfo={episode}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
