import type { FunctionComponent } from "react";
import Dots from "./Dots";

/**
 * About Component. This component contains information about me
 * such as my history, interests and projects
 */
const About: FunctionComponent = () => {
    return (
        <section className="section">
            <h1 className="section__title">Getting to know me</h1>
            <Dots />
            <div className="section__content section__content--col-2" id="about">
                <article className="block" data-block="history">
                    <h2 className="block__title">
                        History
                    </h2>
                    <p className="block__text">
                        I was born in New Zealand and have spent my entire life there. I’ve always had a great interest in programming.
                        Since the age of 11 and have spent the majority of my time learning and building up my skills with different
                        programming languages, frameworks, and toolsets. My earliest programming adventures came about in my days of
                        Minecraft modding which was what inspired me to become a programmer by encouraging me to learn the Java
                        programming language.
                    </p>
                </article>
                <article className="block" data-block="interests">
                    <h2 className="block__title">
                        Interests
                    </h2>
                    <p className="block__text">
                        I am very interested in learning about topics related to programming. I have spent almost all my
                        education career following the programming pathways. I quite enjoy working with other peoples
                        code through reverse engineering and other collaboration. Outside of programming, I am also
                        I am interested in bodybuilding, and I like to stick to a strict exercise routine and strive
                        to achieve my goals and improve myself.
                    </p>
                </article>
                <article className="block block--col-2-span" data-block="projects">
                    <h2 className="block__title">
                        Projects
                    </h2>
                    <p className="block__text">
                        I’ve worked on many projects throughout the years, many of which are readily available on my
                        Github. The majority of my GitHub projects are licenced under the MIT license. My projects come in
                        all kinds of varieties in all different kinds of languages and frameworks. Feel free to take a
                        Take a look around and see if any of them pique your interest.
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
                </article>
            </div>
            <Dots />
        </section>
    )
}

export default About