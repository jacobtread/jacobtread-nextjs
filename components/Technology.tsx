// Types
import type { FunctionComponent } from "react";

// Components
import Image from "next/image";
import Dots from "./Dots";

// Images
import LangBImage from "../public/img/langb-small.png"
import LangFImage from "../public/img/langf-small.png"
import EditorsImage from "../public/img/editors-small.png"
import FrameBImage from "../public/img/framb-small.png"
import FrameFImage from "../public/img/framf-small.png"

/**
 * Technology Block Component. This component contains a list of
 * technologies / languages / tooling that I use / am comfortable
 * using in projects.
 */
const Technology: FunctionComponent = () => (
    <section className="section">
        <h1 className="section__title">Technology</h1>
        <Dots />
        <div className="section__content technology" id="technology">

            <article className="block technology__block">
                <div className="technology__block__image">
                    <Image src={LangBImage} alt="Backend Languages" />
                </div>
                <div>
                    <h2 className="block__title">Backend Languages</h2>
                    <p className="block__text">
                        I am very familiar with languages such as Java and Kotlin having roughly 5 years
                        experience programming with Java, 2 years with Kotlin, and 3 years with PHP.
                        Since march of last year I have been making great strides with and am now able
                        to comfortably use the Rust programming language and expect to use it quite often
                        in future projects.
                    </p>
                </div>
            </article>


            <article className="block technology__block">
                <div className="technology__block__image">
                    <Image src={LangFImage} alt="Frontend Languages" />
                </div>
                <div>
                    <h2 className="block__title">Frontend Languages</h2>
                    <p className="block__text">
                        I am very well accustomed to popular frontend languages like Javascript and Typescript with
                        around 5 years experienced in them both added up. I have been using them a lot throughout many
                        of my projects.
                    </p>
                </div>
            </article>

            <article className="block technology__block">
                <div className="technology__block__image">
                    <Image src={EditorsImage} alt="Editors" />
                </div>
                <div>
                    <h2 className="block__title">IDE & Editors</h2>
                    <p className="block__text">
                        Previously I would have preferred to develop my applications using the JetBrains collections of IDE&apos;s
                        however I've since grown away from these as my usage of the Rust language has increased and have since started
                        preferring to use VSCode for most projects. However for writing code in Java and Kotlin I will use JetBrains
                        IDE&apos;s still as they are a well designed tool for the right job. I have also been experimenting with modal
                        text editors such as NeoVim and Helix in my off time.
                    </p>
                </div>
            </article>


            <article className="block technology__block">
                <div className="technology__block__image">
                    <Image src={FrameBImage} alt="Backend Frameworks" />
                </div>
                <div>
                    <h2 className="block__title">Backend Frameworks & Tooling</h2>
                    <p className="block__text">
                        I am very familiar with the Laravel php framework having shipped multiple production
                        projects using it in the past. NuxtJS was the framework which I previously developed my personal
                        website in among other side projects. I have used NodeJS to make bots as well as other useful tools
                        and full on server systems. This current iteration of my website makes use of the NextJS React framework.
                        Recently I have come to use the Actix and Axum web frameworks while developing my Rust applications
                    </p>
                </div>
            </article>


            <article className="block technology__block">
                <div className="technology__block__image">
                    <Image src={FrameFImage} alt="Frontend Frameworks" />
                </div>
                <div>
                    <h2 className="block__title">Frontend Frameworks & Tooling</h2>
                    <p className="block__text">
                        I am quite familiar with a number of front-end frameworks my favorite of which is VueJS. I have
                        a few other assorted frameworks mixed in throughout my project but VueJS tends to be the one I
                        rely on the most. However recently I&apos;ve been using React more often.
                    </p>
                </div>
            </article>
        </div>
    </section>
)


export default Technology