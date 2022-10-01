import { useState, useEffect } from "react";
import { HiSearch, HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";
import NavItems from "./NavItems";
import NavItemDropDown from "./NavItemDropDown";
import ModalOverlay from "../search-modal/SearchModal";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const [showSearchModal, setShowSearchModal] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setIsScrolled(window.scrollY > 0 ? true : false);
        };

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <header
            className={`${
                isScrolled && `bg-[#090a10] shadow-[7px_7px_20px_#1c50d4]`
            }`}
        >
            <nav className="flex items-center justify-between">
                {/* logo */}
                <div className="flex items-center justify-center space-x-4 md:space-x-8">
                    <div>
                        {/* Smaller Logo */}
                        <Link href="/" passHref>
                            <div className="cursor-pointer md:hidden">
                                <svg
                                    width="76"
                                    height="18"
                                    viewBox="0 0 76 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.418 18L4.202 0.179999H6.6L10.406 18H8.052L7.238 13.512H3.608L2.75 18H0.418ZM3.938 11.73H6.908L5.412 3.7L3.938 11.73ZM12.2141 18V0.179999H13.9081L18.9681 12.016V0.179999H21.0361V18H19.4521L14.3261 5.834V18H12.2141ZM23.7932 18V5.284H26.1472V18H23.7932ZM23.7932 3.392V0.927999H26.1472V3.392H23.7932ZM28.8205 18L29.1505 0.179999H31.5925L34.7385 14.634L37.9065 0.179999H40.3265L40.6565 18H38.6545L38.4565 5.064L35.4425 18H34.0345L31.0425 5.064L30.8445 18H28.8205ZM43.388 18V0.179999H50.274V1.962H45.874V7.902H49.284V9.662H45.874V18H43.388ZM51.9817 18V0.179999H54.4677V16.218H59.0217V18H51.9817ZM60.8578 18V0.179999H63.2998V18H60.8578ZM65.0829 18L68.8009 8.672L65.1489 0.179999H67.4589L70.1649 6.472L72.6289 0.179999H74.9389L71.1989 8.87L75.1149 18H72.8049L69.9009 11.29L67.3929 18H65.0829Z"
                                        fill="#1C50D5"
                                    />
                                </svg>
                            </div>
                        </Link>
                        {/* Larger Logo */}
                        <Link href="/" passHref>
                            <div className="hidden md:block cursor-pointer">
                                <svg
                                    width="110"
                                    height="26"
                                    viewBox="0 0 110 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.608 26L6.112 0.079998H9.6L15.136 26H11.712L10.528 19.472H5.248L4 26H0.608ZM5.728 16.88H10.048L7.872 5.2L5.728 16.88ZM17.766 26V0.079998H20.23L27.59 17.296V0.079998H30.598V26H28.294L20.838 8.304V26H17.766ZM34.6083 26V7.504H38.0323V26H34.6083ZM34.6083 4.752V1.168H38.0323V4.752H34.6083ZM41.9208 26L42.4008 0.079998H45.9528L50.5288 21.104L55.1368 0.079998H58.6568L59.1368 26H56.2248L55.9368 7.184L51.5528 26H49.5048L45.1528 7.184L44.8648 26H41.9208ZM63.1098 26V0.079998H73.1258V2.672H66.7258V11.312H71.6858V13.872H66.7258V26H63.1098ZM75.6098 26V0.079998H79.2258V23.408H85.8498V26H75.6098ZM88.5205 26V0.079998H92.0725V26H88.5205ZM94.666 26L100.074 12.432L94.762 0.079998H98.122L102.058 9.232L105.642 0.079998H109.002L103.562 12.72L109.258 26H105.898L101.674 16.24L98.026 26H94.666Z"
                                        fill="#1C50D5"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <NavItems />

                    {/* Only visible on smaller screens */}
                    <NavItemDropDown />
                </div>

                <div className="flex  space-x-4 sm:space-x-8 items-center justify-center">
                    <HiSearch
                        className="sm:h-6 sm:w-6 h-5 w-5 navLink"
                        onClick={() => setShowSearchModal((show) => !show)}
                    />
                    <HiOutlineUserCircle className="sm:h-7 sm:w-7 h-5 w-5 cursor-pointer text-[#1c50d4]" />
                </div>
            </nav>

            <ModalOverlay
                show={showSearchModal}
                onClose={() => setShowSearchModal(false)}
            />
        </header>
    );
}

export default Navbar;
