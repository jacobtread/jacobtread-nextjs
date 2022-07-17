import { FunctionComponent } from "react";
import Dots from "../components/Dots";
import Image from "next/image";

import LangBImage from "../public/img/langb-small.png"
import LangFImage from "../public/img/langf-small.png"
import EditorsImage from "../public/img/editors-small.png"
import FrameBImage from "../public/img/framb-small.png"
import FrameFImage from "../public/img/framf-small.png"

const Technology: FunctionComponent = () => (
    <div className="section">
        <h1 className="section__title">Technology</h1>
        <Dots/>
        <div className="section__content technology" id="technology">

            <div className="block technology__block">
                <div className="technology__block__image">
                    <Image src={LangBImage} alt="Backend Languages"/>
                </div>
                <div>
                    <h2 className="block__title">Backend Languages</h2>
                    <p className="block__text">
                        I am very familiar with languages such as Java and Kotlin having roughly 5 years experience
                        programming with Java and around 1 and a half years with kotlin. I’ve recently been getting into
                        the mix of Rust and Go which have been a pleasure to use. I also have 2 years experience in PHP.
                    </p>
                </div>
            </div>


            <div className="block technology__block">
                <div className="technology__block__image">
                    <Image src={LangFImage} alt="Frontend Languages"/>
                </div>
                <div>
                    <h2 className="block__title">Frontend Languages</h2>
                    <p className="block__text">
                        I am very well accustomed to popular frontend languages like Javascript and Typescript with
                        around 4 years experienced in them both added up. I have been using them a lot throughout many
                        of my projects.
                    </p>
                </div>
            </div>

            <div className="block technology__block">
                <div className="technology__block__image">
                    <Image src={EditorsImage} alt="Editors"/>
                </div>
                <div>
                    <h2 className="block__title">IDE & Editors</h2>
                    <p className="block__text">
                        When it comes to IDE’s my platform of choice is the JetBrains collection of IDE’s i’ve grown
                        accustom to them and I am very comfortable using them and navigating them with ease. For common
                        every day text editing and some smaller projects I like to use VSCode.
                    </p>
                </div>
            </div>


            <div className="block technology__block">
                <div className="technology__block__image">
                    <Image src={FrameBImage} alt="Backend Frameworks"/>
                </div>
                <div>
                    <h2 className="block__title">Backend Frameworks & Tooling</h2>
                    <p className="block__text">
                        I am very familiar with the Laravel php framework having shipped multiple production
                        projects
                        using it in the past. NuxtJS was the framework which I previously developed my personal
                        website
                        in among other side projects. I have used NodeJS to make bots as well as other useful tools
                        and
                        full on server systems.
                    </p>
                </div>
            </div>


            <div className="block technology__block">
                <div className="technology__block__image">
                    <Image src={FrameFImage} alt="Frontend Frameworks"/>
                </div>
                <div>
                    <h2 className="block__title">Frontend Frameworks & Tooling</h2>
                    <p className="block__text">
                        I am quite familiar with a number of front-end frameworks my favorite of which is VueJS. I have
                        a few other assorted frameworks mixed in throughout my project but VueJS tends to be the one I
                        rely on the most.
                    </p>
                </div>
            </div>
        </div>
    </div>
)


export default Technology