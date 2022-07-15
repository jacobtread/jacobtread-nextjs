import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import About from "../components/About";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <About/>
        </div>
    )
}

export default Home
