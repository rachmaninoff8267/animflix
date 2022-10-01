import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItems() {
    const router = useRouter();

    return (
        <div>
            <ul className="hidden space-x-4 lg:space-x-6 md:flex">
                <Link href="/">
                    <li
                        className={`navLink ${
                            router.pathname === "/"
                                ? "text-[rgba(255,238,242,0.85)]"
                                : ""
                        }`}
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
                    >
                        Movies
                    </li>
                </Link>
                {/* <Link href="/popular">
                    <li
                        className={`navLink ${
                            router.pathname === "/anime/popular"
                                ? "text-[rgba(255,238,242,0.85)]"
                                : ""
                        }`}
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
                    >
                        Watchlist
                    </li>
                </Link> */}
            </ul>
        </div>
    );
}
