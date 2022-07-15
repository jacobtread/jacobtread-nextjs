import { FunctionComponent } from "react";
import Typer from "./Typer";
import Image from "next/image";
import JacobRead from "../public/jacobread.png"


const Heading: FunctionComponent = () => (
    <div className="heading">
        <div className="heading__content-wrapper">
            <div className="heading__content">
                <Image src={JacobRead} alt="JR" className="heading__content__image"/>
                <div>
                    <p className="heading__content__role">
                        <Typer values={[
                            'Full-Stack', 'Web', 'Kotlin', 'Front-end',
                            'Back-end', 'Stonks™', 'JS', 'PHP', 'Go', 'Rust',
                            'Cool', 'Bad', 'Cheat', 'HTML', 'CSS', '!Good',
                        ]} duration={1000}/>
                        <span className="heading__content__role__suffix">Developer</span>
                    </p>
                </div>
            </div>
            <nav className="heading__nav">
                <a href="#about" className="heading__nav__button">About</a>
                <a href="#contact" className="heading__nav__button">Contact</a>
                <a href="" className="heading__nav__button">Technology</a>
                <a href="" className="heading__nav__button">Projects</a>
            </nav>
        </div>
    </div>
)

export default Heading;

