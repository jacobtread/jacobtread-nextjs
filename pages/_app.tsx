import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Footer from "../components/Footer";
import Head from "next/head";

/**
 * This is the page template which defines the outer structure
 * of how each individual page is rendered. This also adds the
 * information to the page head for SEO and basic page meta
 *
 * @param Component The page component to render
 * @param pageProps Properties for the page component
 */
function MyApp({Component, pageProps}: AppProps) {
    // Description about me
    const description: string = "This website is my personal / portfolio website. It contains information about me, my contact information, and a list of projects."
    return (
        <div>
            <Head>
                {/* Icon Links */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>

                {/* Open Graph Protocol Meta Tags (See https://ogp.me/)*/}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Jacobtread | Full-stack Developer"/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content="https://jacobtread.com"/>
                <meta property="og:image" content="/img/jacobtread.png"/>

                {/* Basic Meta Tags */}
                <meta name="author" content="Jacobtread"/>
                <meta name="description" content={description}/>
                <meta name="keywords" content="developer,jacobtread,jacob,programming,software,fullstack,web"/>
                <meta name="theme-color" color="#7ed380"/>

                {/* Page Title */}
                <title>Jacobtread | Full-stack Developer</title>
            </Head>
            <span id="top"></span>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}

export default MyApp
