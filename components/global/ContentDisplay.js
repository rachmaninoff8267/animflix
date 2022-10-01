import Card from "../home-page/Card";
import { HiChevronDown } from "react-icons/hi";
import { usePaginatedAnime } from "../../custom hooks/usePaginatedAnime";
import Loadicator from "./Loadicator";

export default function ContentDisplay({ title, subtype }) {
    const { anime, error, isLoadingMore, size, setSize, isReachingEnd } =
        usePaginatedAnime(subtype);

    console.log(anime);

    if (error) return <h1>Something went wrong!</h1>;
    if (!anime) return <Loadicator />;

    return (
        <main className="pt-[3.85em] sm:pt-[4.85em] paddingElements min-h-screen pb-[2em] relative max-w-[1920px] m-auto overflow-x-hidden">
            <h1 className="font-semibold text-[3rem] 2xl:text-[4.5rem] mb-[0.25em]">
                {title}
            </h1>
            <div className="gridDisplay sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(125px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(140px,1fr))]  mb-[1em] md:mb-[2em]">
                {anime.map((element) => {
                    return element.results.map((anime) => {
                        return (
                            <div key={anime.id} className="m-auto">
                                <Card
                                    isMovie={
                                        anime.type === "movie" ||
                                        anime.totalEpisodes === 1
                                    }
                                    animeId={anime.id}
                                    image={anime.image}
                                />
                            </div>
                        );
                    });
                })}
            </div>

            {/* Load More Button */}
            {isLoadingMore ? (
                <Loadicator />
            ) : isReachingEnd ? (
                <p className="text-[rgba(255,238,242,0.55)] text-center">
                    You&apos;ve reached the end
                </p>
            ) : (
                <button
                    disabled={isLoadingMore || isReachingEnd}
                    onClick={() => setSize(size + 1)}
                    className="m-auto block  border-2 border-[rgba(255,238,242,0.85)] hover:border-[#1c50d4] hover:text-[#1c50d4] rounded-full transition duration-300 ease-in"
                >
                    <HiChevronDown className="w-6 h-6 m-1 md:w-8 md:h-8 lg:w-10 lg:h-10 lg:m-2" />
                </button>
            )}
        </main>
    );
}
