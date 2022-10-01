import "../styles/globals.css";
import Navbar from "../components/global/Navbar";

function MyApp({ Component, pageProps }) {
    if (Component.getLayout)
        return Component.getLayout(<Component {...pageProps} />);

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
