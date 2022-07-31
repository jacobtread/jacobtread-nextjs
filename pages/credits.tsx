import type { NextPage } from 'next'
import Dots from "../components/Dots";
import Navigation from "../components/Navigation";

/**
 * Credits page (/credits) this page contains attributions / credits
 * for assets used in this website to ensure copyright compliance.
 */
const Credits: NextPage = () => {
    return (
        <div className="section">
            <h1 className="section__title projects__title">Credits / Attributions</h1>
            <Navigation>
                [<a href="/" className="nav__button">Home</a>]
            </Navigation>
            <Dots/>
            <main className="main section__content ">
                <div className="block">
                    <h2 className="block__title">Flaticon Icons</h2>
                    <p className="block__text">
                        Github icons created by Pixel perfect - Flaticon<br/>
                        Instagram icons created by Freepik - Flaticon<br/>
                        Discord icons created by Freepik - Flaticon<br/>
                        Email icons created by Those Icons - Flaticon<br/>
                        Typescript, Javascript, HTML, CSS, SASS icons created by Freepik - Flaticon<br/>
                    </p>
                    <div className="block__buttons">
                        <a className="block__button" href="https://www.flaticon.com/free-icons/github"
                           rel="noopener noreferrer">Github Icon</a>

                        <a className="block__button" href="https://www.flaticon.com/free-icons/instagram"
                           rel="noopener noreferrer">Instagram Icon</a>

                        <a className="block__button" href="https://www.flaticon.com/free-icons/discord"
                           rel="noopener noreferrer">Discord Icon</a>

                        <a className="block__button" href="https://www.flaticon.com/free-icons/email"
                           rel="noopener noreferrer">Email Icon</a>
                    </div>
                </div>

                <div className="block ">
                    <h2 className="block__title">Jetbrains Product Icons</h2>
                    <p className="block__text">
                        Copyright © 2000-2022 JetBrains s.r.o. JetBrains and the JetBrains logo are registered
                        trademarks of JetBrains s.r.o.
                    </p>
                    <div className="block__buttons">
                        <a className="block__button" href="https://www.jetbrains.com/company/brand/"
                           rel="noopener noreferrer">Link</a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Credits
