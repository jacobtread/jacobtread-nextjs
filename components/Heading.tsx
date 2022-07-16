import { FunctionComponent } from "react";
import Typer from "./Typer";
import Image from "next/image";
import JacobRead from "../public/jacobread.png"
import Navigation from "./Navigation";


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
            <Navigation/>
        </div>
    </div>
)

export default Heading;

