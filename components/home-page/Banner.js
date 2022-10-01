import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { bannerData } from "../../utils/bannerData";
import { useTrailerBanner } from "../../custom hooks/bannerHooks";
import { IoPlaySharp } from "react-icons/io5";
import ReactPlayer from "react-player";

export default function Banner() {
    const [hasWindow, setHasWindow] = useState(false);
    const [trailerNumber, showNextTrailerHandler] = useTrailerBanner();
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    return (
        <section>
            <div>
                <div className="relative">
                    <div className="bannerDisplay pointer-events-none w-[100%] sm:w-[65%]"></div>
                    <div className="-z-1000 addBgGradientBefore addBgGradientAfter min-w-[600px] sm:w-full aspect-video">
                        {hasWindow && (
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                playing={true}
                                muted={true}
                                onEnded={showNextTrailerHandler}
                                url={bannerData[trailerNumber].videoUrl}
                            />
                        )}
                    </div>

                    <div className="absolute top-[27.5%] 2xl:top-[32.5%] paddingElements max-w-[275px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] 2xl:max-w-[550px]">
                        <div className="space-y-3 mb-[2em]">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-[1.085] max-w-[100%] truncate font-medium">
                                {bannerData[trailerNumber].animeName}
                            </h1>
                            <div className="h-[55px] sm:h-[90px] md:h-[110px] 2xl:h-[150px] text-ellipsis overflow-hidden">
                                <p className="text-[rgba(255,238,242,0.5)] text-xs sm:text-base 2xl:text-lg">
                                    {bannerData[trailerNumber].synopsis}
                                </p>
                            </div>
                        </div>
                        <button
                            className="flex items-center justify-center space-x-2 bg-[#1c50d4] px-[0.75em] py-[0.5em] rounded-md hover:opacity-60 transition-[opacity] duration-300 ease-in"
                            onClick={() =>
                                router.push(
                                    bannerData[trailerNumber].animeInfoUrl
                                )
                            }
                        >
                            <IoPlaySharp />
                            <p>Play</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
