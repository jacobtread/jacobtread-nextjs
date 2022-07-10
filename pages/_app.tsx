import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Heading from "../components/Heading";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <Heading/>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
