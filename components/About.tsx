import { FunctionComponent } from "react";
import Dots from "../components/Dots";


const About: FunctionComponent = () => {
    return (
        <div className="section">
            <h1 className="section__title">Getting to know me</h1>
            <Dots/>
            <div className="section__content blocks blocks--col-2" id="about">
                <div className="block" data-block="history">
                    <h2 className="block__title">
                        History
                    </h2>
                    <p className="block__text">
                        New Zealand is where I was born and so far I’ve spent my entire life here. From the ripe young
                        age of 11, I’ve always had a great interest in programming and have spent a majority of my time
                        learning and building up my skills with different programming languages, frameworks, and
                        toolsets. My earliest programming adventures came about from the early days of Minecraft
                        modding.
                    </p>
                </div>
                <div className="block" data-block="interests">
                    <h2 className="block__title">
                        Interests
                    </h2>
                    <p className="block__text">
                        I am very interested in learning topics relating to programming. I have spent almost of all my
                        education career following the programming pathways. I quite enjoy working with other peoples
                        code through reverse engineering and other collaboration. Outside of programming I am also
                        interested in body building and I like to keep a strict routine with my exercise.
                    </p>
                </div>
                <div className="block block--col-2-span" data-block="projects">
                    <h2 className="block__title">
                        Projects
                    </h2>
                    <p className="block__text">
                        I’ve worked on many projects throughout the years, many of which are readily available on my
                        Github the projects listed on my github are majority under the MIT license. My projects come in
                        all kinds of varieties in all different kinds of languages and frameworks. Feel free to take a
                        look around and see if any of them spark your interests
                    </p>
                    <div className="block__buttons">
                        <a href="/projects" className="block__button">
                            View Projects
                        </a>

                        <a
                            href="https://github.com/jacobtread"
                            rel="noreferrer nooppener"
                            target="_blank"
                            className="block__button">
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
            <Dots/>
        </div>
    )
}

export default About