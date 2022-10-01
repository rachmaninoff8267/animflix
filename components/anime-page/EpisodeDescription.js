import Link from "next/link";
import { useRouter } from "next/router";

export default function EpisodeDescription({ episodeInfo, episodeId }) {
    const {
        query: { animeId },
    } = useRouter();

    return (
        <Link href={`/anime/${animeId}/watch?v=${episodeId}`}>
            <div className="p-[1em] space-y-4 border-2 border-[#1c1f31] rounded-[1em] cursor-pointer hover:border-[#1c50d4] transition duration-300 ease-in bg-[#090a10]">
                <h1 className="text-lg md:text-2xl space-x-3">
                    <span>{episodeInfo.number}.</span>
                    <span>{episodeInfo.title || `{Title Unavailable}`}</span>
                </h1>
                <div>
                    <p className="text-[rgba(255,238,242,0.55)]">
                        {episodeInfo.description || `(Synopsis Unavailable)`}
                    </p>
                </div>
            </div>
        </Link>
    );
}
