import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Heading from "../components/Heading";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <Heading/>
            <main className="main">
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp
