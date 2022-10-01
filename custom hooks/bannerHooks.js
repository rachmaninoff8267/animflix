import { useState } from "react";
import { bannerData } from "../utils/bannerData";

export function useTrailerBanner() {
    const [trailerNumber, setTrailerNumber] = useState(0);

    const showNextTrailerHandler = () => {
        if (trailerNumber === bannerData.length - 1) {
            setTrailerNumber(0);
            return;
        }

        setTrailerNumber((number) => number + 1);
    };

    return [trailerNumber, showNextTrailerHandler];
}
