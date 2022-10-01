import React, { useContext, useMemo } from "react";
import VideoPlayer from "./VideoPlayer";
import { AnimeContext } from "../../pages/anime/[animeId]/[watch]";
import { useRouter } from "next/router";

export default function VideoPlayerWithEpisodeInfo() {
    const { episodes, episodeStreamingLinks, animeInfo } =
        useContext(AnimeContext);

    const {
        query: { v: episodeId },
    } = useRouter();

    const currentEpisode = useMemo(() => {
        return episodes.find((element) => element.id === episodeId);
    }, [episodeId, episodes]);

    const currentEpisodeLink = useMemo(() => {
        return episodeStreamingLinks.sources.find((element) =>
            element.url.includes("gogo")
        );
    }, [episodeStreamingLinks.sources]);

    return (
        <section className="space-y-4 lg:space-y-0 relative lg:flex lg:gap-[2em] lg:pt-[2em] lg:paddingElements mb-[3em]">
            <VideoPlayer src={currentEpisodeLink.url} />
            <div className="lg:max-w-[30%] paddingElements lg:p-0">
                <div>
                    {episodes.length > 1 && (
                        <div className="space-y-1 mb-[1.45em]">
                            <h4 className="text-[rgba(255,238,242,0.55)] text-md sm:text-lg 2xl:text-xl">
                                {`Episode ${currentEpisode.number}`}
                            </h4>
                            <h1 className="text-[1.65rem] sm:text-[2.3rem] 2xl:text-[3.34rem] leading-[1.13]">
                                {currentEpisode.title || `(Title Unavailable)`}
                            </h1>
                        </div>
                    )}

                    {episodes.length === 1 && (
                        <div className="space-y-1 mb-[1.45em]">
                            <h4 className="text-[rgba(255,238,242,0.55)] text-md sm:text-lg 2xl:text-xl">
                                {`${animeInfo.type}`}
                            </h4>
                            <h1 className="text-[1.65rem] sm:text-[2.3rem] 2xl:text-[3.34rem] leading-[1.13]">
                                {animeInfo.title.english ||
                                    animeInfo.title.romaji}
                            </h1>
                        </div>
                    )}

                    <div className="lg:border-4 border-[#1c1f31] lg:relative lg:addFixedBgGradient lg:before:rounded-[1em] rounded-[1em]">
                        <div className="lg:overflow-y-auto lg:max-h-[150px] 2xl:max-h-[200px] hideScroll lg:p-4">
                            {episodes.length > 1 && (
                                <p className="text-[rgba(255,238,242,0.55)] leading-[1.65] tracking-[0.075ch]">
                                    {currentEpisode.description ||
                                        "(Description Unavailable)"}
                                </p>
                            )}
                            {episodes.length === 1 && (
                                <p className="text-[rgba(255,238,242,0.55)] leading-[1.65] tracking-[0.075ch]">
                                    {animeInfo.description ||
                                        "(Description Unavailable)"}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
