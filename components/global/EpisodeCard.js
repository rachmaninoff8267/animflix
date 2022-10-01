import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { GiSpeaker } from "react-icons/gi";

export default function EpisodeCard({
    episodeName,
    episodeNumber,
    thumbnail,
    episodeId,
}) {
    const router = useRouter();

    return (
        <div
            className={`w-[250px] h-[155px] bg-[#1c1f31] rounded-[0.5em] flex items-center justify-center cursor-pointer transition duration-300 ease-in hover:scale-[1.03] cardHover ${
                router.query.v === episodeId &&
                "pointer-events-none cursor-default"
            }`}
            onClick={() =>
                router.push(
                    `/anime/${router.query.animeId}/watch?v=${episodeId}`
                )
            }
        >
            <div className="w-full h-full relative">
                {thumbnail && (
                    <Image
                        src={thumbnail}
                        layout="fill"
                        className="rounded-[0.5em]"
                        alt="EpisodeCard"
                    />
                )}
                {!thumbnail && (
                    <div>
                        <h1>No Thumbnail</h1>
                    </div>
                )}
                <div className="absolute top-[0.45em] left-[0.5em] px-[1em] py-[0.15em] bg-[#1c1f31] rounded-[1em] transition-[opacity] duration-300 ease-in removeOnHover">
                    <h3>{episodeNumber}</h3>
                </div>
                <div
                    className={`relative w-full h-full ${
                        router.query.v !== episodeId && "opacity-0"
                    } hover:opacity-100 focus:opacity-100 transition-[opacity] duration-300 ease-in bg-[rgba(9,10,17,0.65)]`}
                >
                    <div className="absolute flex items-center justify-center inset-0 px-[1em] py-[0.15em] text-lg text-center">
                        {router.query.v !== episodeId ? (
                            <h3 className="leading-[1.2]">{episodeName}</h3>
                        ) : (
                            <GiSpeaker className="w-14 h-14" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
