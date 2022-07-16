import type { NextPage } from 'next'
import About from "../components/About";
import Contact from "../components/Contact";
import Technology from "../components/Technology";
import Heading from "../components/Heading";

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
