import { useState, useEffect, Fragment, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { HiSearch } from "react-icons/hi";
import Loadicator from "../global/Loadicator";
import { useRouter } from "next/router";

function Backdrop({ onClose }) {
    return (
        <div
            className="z-[1000] fixed inset-0 bg-[rgba(0,0,0,0.7)]"
            onClick={() => onClose()}
        />
    );
}

function SearchModal({ onClose }) {
    const searchInputRef = useRef();
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => (document.body.style.overflow = "unset");
    }, []);

    const fetchAnime = useCallback(async (input) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://consumet-api.herokuapp.com/meta/anilist/advanced-search?query=${input}`
            );

            if (!response.ok) throw new Error("Something went wrong...");

            const data = await response.json();

            const filteredData = data.results.filter(
                (element) => element.status.toLowerCase() === "completed"
            );

            setSearchData(filteredData);
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    }, []);

    console.log("running");

    const searchAnimeHandler = (e) => {
        e.preventDefault();
        fetchAnime(searchInputRef.current.value);
        searchInputRef.current.focus();
    };

    return (
        <Fragment>
            <Backdrop onClose={onClose} />
            <div className="fixed top-[13%] left-[50%] -translate-x-[50%] bg-[#1c1f31] p-3 rounded-[1em] space-y-3  w-[250px] sm:w-[500px] z-[1000]">
                <form
                    className="flex justify-between bg-[#090a10] rounded-[0.5em]"
                    onSubmit={searchAnimeHandler}
                >
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="rounded-[0.5em] px-[0.5em] py-[0.5em] outline-none block w-[150px] grow bg-[#090a10]"
                        placeholder="Search for your favorite anime"
                    />
                    <button className="rounded-full bg-blue-600 m-1 p-2">
                        <HiSearch className="w-6 h-6" />
                    </button>
                </form>

                <div className="h-[200px] bg-[#090a10] overflow-x-hidden overflow-y-auto p-[0.5em]">
                    {loading && <Loadicator />}
                    {/* {!loading && !error && searchData.length === 0 && (
                        <p>No results found</p>
                    )} */}
                    {!loading && !error && searchData.length > 0 && (
                        <div className="px-[0.15em] py-[0.25em] space-y-3">
                            {searchData.map((element) => {
                                return (
                                    <div
                                        className="border-2 px-[0.35em] hover:border-[#1c50d4] transition duration-300 ease-in cursor-pointer py-[0.75em] rounded-[0.5em] border-[#1c1f31]"
                                        onClick={() =>
                                            router.push(`/anime/${element.id}`)
                                        }
                                    >
                                        <h2 className="w-[90%] truncate text-xl">
                                            {element.title.english ||
                                                element.title.romaji}
                                        </h2>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

function ModalOverlay({ show, onClose }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const modal =
        isBrowser && show ? (
            <Fragment>
                {ReactDOM.createPortal(
                    <SearchModal onClose={onClose} />,
                    document.getElementById("modal-root")
                )}
            </Fragment>
        ) : null;

    return modal;
}

export default ModalOverlay;
