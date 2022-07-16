import type { NextPage } from 'next'
import About from "../components/About";
import Contact from "../components/Contact";
import Technology from "../components/Technology";

const Home: NextPage = () => {
    return (
        <div>
            <About/>
            <Contact/>
            <Technology/>
        </div>
    )
}

export default Home
