import type { NextPage } from 'next'
import About from "../components/About";
import Contact from "../components/Contact";
import Technology from "../components/Technology";
import Heading from "../components/Heading";

/**
 * Home page (/) this page is the first page viewers see
 * when they access the website. It contains the heading
 * as well as all the other page sections.
 */
const Home: NextPage = () => {
    return (
        <div>
            <Heading/>
            <main className="main">
                <About/>
                <Contact/>
                <Technology/>
            </main>
        </div>
    )
}

export default Home
