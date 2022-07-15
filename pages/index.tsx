import type { NextPage } from 'next'
import About from "../components/About";
import Contact from "../components/Contact";

const Home: NextPage = () => {
    return (
        <div>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home
