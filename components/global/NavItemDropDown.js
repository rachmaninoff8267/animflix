import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiChevronDown } from "react-icons/hi";

export default function NavItemDropDown() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="md:hidden">
            <div
                className="rounded-full"
                onClick={() => setOpen((open) => !open)}
            >
                <HiChevronDown
                    className={`w-6 h-6 inline ${open && "-rotate-180 "} ${
                        !open && "rotate-0 "
                    } transition-[transform] duration-300 ease-in-out`}
                />
            </div>

            <div
                className={`rounded-[1em] bg-[#090a10] px-3 py-2 border-2 border-[#1c1f31] w-[120px] absolute top-[45px] ${
                    !open && "hidden"
                } -translate-x-1`}
            >
                <ul className="space-y-3">
                    <Link href="/">
                        <li
                            className={`navLink ${
                                router.pathname === "/"
                                    ? "text-[rgba(255,238,242,0.85)]"
                                    : ""
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </li>
                    </Link>
                    <Link href="/anime/series">
                        <li
                            className={`navLink ${
                                router.pathname === "/anime/series"
                                    ? "text-[rgba(255,238,242,0.85)]"
                                    : ""
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            Series
                        </li>
                    </Link>
                    <Link href="/anime/movies">
                        <li
                            className={`navLink ${
                                router.pathname === "/anime/movies"
                                    ? "text-[rgba(255,238,242,0.85)]"
                                    : ""
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            Movies
                        </li>
                    </Link>
                    <Link href="/anime/popular">
                        <li
                            className={`navLink ${
                                router.pathname === "/anime/popular"
                                    ? "text-[rgba(255,238,242,0.85)]"
                                    : ""
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            Popular
                        </li>
                    </Link>
                    <Link href="/watchlist">
                        <li
                            className={`navLink ${
                                router.pathname === "/watchlist"
                                    ? "text-[rgba(255,238,242,0.85)]"
                                    : ""
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            Watchlist
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
