import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Typer from "../components/Typer";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Typer values={["Test", "Hello World", "Another Value"]} duration={1000}/>
        </div>
    )
}

export default Home
