import { FunctionComponent } from "react";
import styles from "../styles/dots.module.scss"

const Dots: FunctionComponent = () => {
    return (
        <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </div>
    )
}

export default Dots