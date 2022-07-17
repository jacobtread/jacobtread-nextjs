import type { NextPage } from 'next'
import { createGitHubLink, createWebsiteLink, Project } from "../components/Project";
import { NZGMIcon, PondIcon, QRLIcon, QuizlerIcon, StudentIcon, TRIcon } from "../components/Icons";
import Dots from "../components/Dots";
import Navigation from "../components/Navigation";


const Projects: NextPage = () => {

    return (
        <div className="section">
            <h1 className="section__title projects__title">My Projects</h1>
            <Navigation>
                <a href="/" className="nav__button">Home</a>
                <a href="https://github.com/jacobtread" rel="noreferrer noopener" className="nav__button">GitHub</a>
            </Navigation>
            <Dots/>
            <main className="main section__content flex-cols">

                <Project
                    title="KME3"
                    links={[createGitHubLink('jacobtread/KME3')]}
                    tags={['Kotlin', 'Mass Effect 3', 'Game Server', 'Netty', 'VueJS', 'SASS', 'Typescript', 'Docker']}>
                    A custom game server for Mass Effect 3 which emulates the functionality of the official
                    EA servers but allows home hosting or lan play and editing of player data. Also features
                    a MITM (Man-in-the-middle) functionality for connecting to the official servers and
                    logging the packets.
                </Project>


                <Project
                    icon={QRLIcon}
                    title="QRLS"
                    links={[
                        createGitHubLink('jacobtread/QRLS'),
                        createGitHubLink('jacobtread/QRLS-v2', 'V2 Github'),
                    ]}
                    tags={['VueJS', 'SASS', 'TypeScript', 'JavaScript', 'HTML', 'NodeJS', 'Docker']}>
                    QRLS is a kiosk system for the Questionable Research Labs which allows members and guests to sign in
                    when entering the building and also manage and view who has been in the building. There has been
                    multiple iterations of this website first of which was not created by me but since then there has
                    been two new remakes by me.
                </Project>


                <Project
                    icon={NZGMIcon}
                    title="NZGM"
                    links={[
                        createGitHubLink('jacobtread/NZGM'),
                        createWebsiteLink('https://grapher.jacobtread.com/'),
                        createWebsiteLink('https://grapher.nz/', 'NZGrapher'),
                    ]}
                    tags={['VueJS', 'SASS', 'TypeScript']}>
                    NZGM (NZGrapher Modern) is a modern alternative to the NZGrapher web graphing application
                    which has many improvements of NZGrapher such as live editing data and the ability to run offline.
                </Project>


                <Project
                    icon={PondIcon}
                    title="Pond"
                    links={[createGitHubLink('jacobtread/Pond')]}
                    tags={['Kotlin', 'Java', 'Flex (Lexer)']}>
                    Pond is a custom scripting language for writing scripts for a USB Rubber ducky it improves a
                    lot upon the existing ducky code language providing variables and macros.
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KNI"
                    links={[createGitHubLink('jacobtread/KNI')]}
                    tags={['Python', 'Java', 'PHP', 'Javascript', 'Kotlin', 'Rust', 'Typescript', '.NET']}>
                    KNI (KAMAR Notices Interface) is a collection of libraries in different programming languages
                    that all have the one purpose of fetching notices from the KAMAR portal application.
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KJP"
                    links={[createGitHubLink('jacobtread/KJP')]}
                    tags={['Go', 'JSON']}>
                    KJP (KAMAR JSON Pass-through) is a server written in Go which provides a way to connect to
                    and use KAMAR portal APIs through the web with easy to use JSON REST API
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KPM"
                    links={[createGitHubLink('jacobtread/KPM')]}
                    tags={['VueJS', 'SASS', 'Typescript']}>
                    KPM (KAMAR Portal Modern) An unfinished custom KAMAR portal web interface that uses more modern
                    technologies it runs all in the browser using a SPA and accesses KAMAR through KJP
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KAMAR-Notices"
                    links={[createGitHubLink('jacobtread/KAMAR-Notices')]}
                    tags={['PHP', 'HTML', 'CSS', 'Laravel']}>
                    A web application for pulling notices from KAMAR and displaying them in a nice easy to read view
                    that will cache results from KAMAR. Retrieves notices from KAMAR API using a PHP backend.
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KAMAR2"
                    links={[createGitHubLink('jacobtread/KAMAR2')]}
                    tags={['Kotlin', 'Android', 'Jetpack Compose', 'XML', 'JSON']}>
                    KAMAR2 is a very early unfinished project which aims to provide an open source alternative
                    to the KAMAR android app however its in a very early state.
                </Project>


                <Project
                    icon={QuizlerIcon}
                    title="Quizler"
                    links={[
                        createGitHubLink('jacobtread/Quizler'),
                        createGitHubLink('jacobtread/Quizler-rust', 'Rust Re-write'),
                        createWebsiteLink('https://quizler.jacobtread.com/'),
                    ]}
                    tags={['VueJS', 'Typescript', 'Go', 'Rust', 'Docker']}>
                    A real time quiz application for quickly and easily making quizzes with an extremely small
                    deployment size of 1.82mb making it extra portable. There is an in progress rewrite in the Rust
                    language.
                </Project>


                <Project
                    icon={TRIcon}
                    title="TrueRandom"
                    links={[
                        createGitHubLink('Questionable-Research-Labs/TrueRandom-MainServer'),
                        createWebsiteLink('https://tr.host.qrl.nz/'),
                    ]}
                    tags={['Typescript', 'HTML', 'SASS', 'NodeJS', 'ExpressJS', 'Docker']}>
                    A joke website designed for a Hackathon. Centered around a dice rolling machine
                    as a service. For generating random numbers by a physically rolled dice
                </Project>

                <Project
                    title="Dream"
                    links={[createWebsiteLink('https://dreamclient.xyz/')]}
                    tags={['VueJS', 'PHP', 'SASS', 'Typescript', 'Laravel']}>
                    Dream is a WEB-GUI Minecraft Cheat that is controlled via your web browser and can be access from
                    any device that can use a web browser its written in VueJS with a PHP backend
                </Project>


                <Project
                    title="Dream"
                    links={[
                        createGitHubLink('AltoClient'),
                        createWebsiteLink('https://alto.jacobtread.com/'),
                    ]}
                    tags={['Kotlin', 'Java', 'VueJS', 'Minecraft', 'Go', 'OpenGL']}>
                    Alto is a high performance Minecraft client written in Kotlin which greatly out performs
                    many clients available today. This project is pending rewrite
                </Project>


                <Project
                    title="Hour.ly"
                    links={[createGitHubLink('jacobtread/Hour.ly')]}
                    tags={['Javascript', 'CSS', 'HTML', 'Electron']}>
                    A small desktop electron app for keeping track of how many hours you&apos;ve worked for.
                    Stores the information in a JSON file and displays a small counter in the corner of your screen.
                </Project>


                <Project
                    title="Malduino-W Firmware"
                    links={[createGitHubLink('jacobtread/MalDuino-W')]}
                    tags={['Svelte', 'C++', 'Typescript', 'Javascript', 'SCSS', 'ESP8266', 'WebSocket', 'Arduino']}>
                    A custom fork of the Malduino Wireless Bad-USB firmware with a more modern embedded
                    website which has a nice SPA which uses the Svelte frontend framework
                </Project>


                <Project
                    title="DuckCentral"
                    links={[createGitHubLink('jacobtread/DuckCentral')]}
                    tags={['Kotlin', 'C++', 'Android', 'Jetpack Compose', 'ESP8266', 'WebSocket', 'Ardunio']}>
                    An app for controlling the Malduino Wireless Bad-USB using a Android app with a
                    lightweight firmware that removes the embedded website for extra space.
                </Project>


                <Project
                    title="TetriVersal"
                    links={[createGitHubLink('jacobtread/TetriVersal')]}
                    tags={['Typescript', 'Shell', 'NodeJS']}>
                    An unfinished game of multiplayer tetris intended for use as the game for a school project.
                    Although unfinished it is completely playable it is only unfinished in terms of not having
                    a proper client completed the only way to play is through the testing client which is a terminal
                    client
                </Project>


                <Project
                    title="Freddy's Fast Food"
                    links={[createGitHubLink('jacobtread/Freddys-Fast-Food')]}
                    tags={['Python', 'Assessment', 'Ordering System']}>
                    A python application submitted for an internal assessment in Digital Technologies for Achievement
                    Standard 91896.
                    A advanced ordering system written in python
                </Project>


                <Project
                    title="Computron"
                    links={[createGitHubLink('jacobtread/Computron')]}
                    tags={['VueJS', 'NuxtJS', 'SCSS', 'Javascript', 'Website', 'Assessment']}>
                    A website designed, built and submitted for an internal assessment in Digital Technologies
                    for &quot;Web Design 2.4 AS91893&quot;.
                </Project>


                <Project
                    title="InstaViewer"
                    links={[createGitHubLink('jacobtread/InstaViewer')]}
                    tags={['Java', 'Android']}>
                    A simple app for viewing the full message contents of Instagram without opening actual direct
                    message.
                </Project>


                <Project
                    title="Spew"
                    links={[createGitHubLink('jacobtread/spew')]}
                    tags={['Rust', 'Language']}>
                    A very early stages custom language the linked repository is the parser which is written in rust.
                </Project>


                <Project
                    title="jacobtread.github.io"
                    links={[
                        createGitHubLink('jacobtread/jacobtread.github.io'),
                        createWebsiteLink('https://jacobtread.github.io')
                    ]}
                    tags={['VueJS', 'NuxtJS', 'Javascript', 'Docker']}>
                    One of the first iterations of my personal website this one is hosted on github pages
                </Project>

                <Project
                    title="jacobtread.com"
                    links={[createGitHubLink('jacobtread/jacobtread.com')]}
                    tags={['VueJS', 'NuxtJS', 'Typescript']}>
                    The previous design / iteration of this website
                </Project>
            </main>
        </div>
    )
}

export default Projects
