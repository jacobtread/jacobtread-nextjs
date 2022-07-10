import { FC } from "react";
import styles from "../styles/heading.module.scss"
import Typer from "./Typer";
import Image from "next/image";
import JacobRead from "../public/jacobread.png"

const Heading: FC = () => {
    return (
        <div className={styles.heading}>
            <div className={styles.content__wrapper}>
                <nav className={styles.nav}>
                    <a href="" className={styles.nav__button}>About</a>
                    <a href="" className={styles.nav__button}>Contact</a>
                    <a href="" className={styles.nav__button}>Projects</a>
                    <a href="" className={styles.nav__button}>Technology</a>
                </nav>
                <div className={styles.content}>
                    <Image src={JacobRead} alt="JR" className={styles.content__image}/>
                    <div>
                        <p className={styles.content__role}>
                            <Typer values={[
                                'Full-Stack', 'Web', 'Kotlin', 'Front-end',
                                'Back-end', 'Stonks™', 'JS', 'PHP', 'Go', 'Rust',
                                'Cool', 'Bad', 'Cheat', 'HTML', 'CSS', '!Good',
                            ]} duration={1000}/>
                            <span className={styles.content__role__suffix}>Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading;
