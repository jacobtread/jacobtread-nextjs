import type { NextPage } from 'next'
import { createGitHubLink, createWebsiteLink, Project } from "../components/Project";
import { NZGMIcon, PondIcon, QRLIcon, QuizlerIcon, StudentIcon, TRIcon } from "../components/Icons";
import Dots from "../components/Dots";
import Navigation from "../components/Navigation";

/**
 * Projects page (/projects) this page contains a list of
 * some of my projects along with a description, tags, links
 * and icons for each project.
 *
 * This page also contains a link to my GitHub and a return
 * to top button in the navigation.
 */
const Projects: NextPage = () => {
    return (
        <div className="section">
            <h1 className="section__title projects__title">My Projects</h1>
            <Navigation>
                <a href="/" className="nav__button">Home</a>
                {/* Button for returning to the top of the page */}
                <a href="#top" className="nav__button">Back to top</a>
                {/* Link to my GitHub page */}
                <a href="https://github.com/jacobtread" rel="noreferrer noopener" className="nav__button">GitHub</a>
            </Navigation>
            <Dots/>
            <main className="main section__content flex-cols">
                {/* Projects starts here */}

                <Project
                    title="Pocket Relay"
                    links={[createGitHubLink('PocketRelay/ServerKotlin')]}
                    tags={['Kotlin', 'Mass Effect 3', 'Game Server', 'Netty', 'Docker']}>
                    Custom dedicated Mass Effect 3 game server software which emulates the functionality of the
                    official EA servers with the added benefit of allowing &quot;Home Hosting&quot; / LAN play.
                    Because the server is hosted by outside of EA servers you can alter your player data. This
                    server also includes a MITM (Man-in-the-middle) mode which creates a tunnel for connecting to
                    the official servers which decoding all the packets in-between.
                </Project>

                <Project
                    title="Blaze SSL"
                    links={[createGitHubLink('jacobtread/blaze-ssl')]}
                    tags={['Rust', 'Mass Effect 3', 'SSLv3']}>
                    Implementation of the SSLv3 protocol in rust to support the game clients for Mass Effect 3
                    which are only able to use SSLv3 due to its hardcoded implementation so in order to make
                    it possible for the Rust rewrite of PocketRelay and to introduce the new client app I
                    decided to implement the SSLv3 protocol myself as there aren&apos;t any other libraries that
                    support it without modifying key parts of the system such as doing registry edits
                </Project>

                <Project
                    title="Pocket Relay (Rust Rewrite)"
                    links={[createGitHubLink('PocketRelay/ServerRust')]}
                    tags={['Rust', 'Mass Effect 3', 'Game Server', 'Docker']}>
                    I have started completely rewriting my Pocket Relay game server in Rust with a new architecture
                    which moves the Redirect portion of the server into a small Rust client application which in
                    when fully implemented will proxy the remainder of the game traffic to the server. This rewrite
                    greatly improves performance of the server and removes the requirement of having a JVM making it
                    portable and easier to use.
                </Project>

                <Project
                    title="BlazeKt"
                    links={[createGitHubLink('jacobtread/BlazeKt')]}
                    tags={['Kotlin', 'Gradle', 'Maven', 'Annotation Processing', 'Library', 'Packet System', 'Netty']}>
                    BlazeKt is a library which implements the packet system used by Blaze servers which
                    is the server software that EA uses for games such as Mass Effect and Battlefield. The library
                    also has an annotation processor for generating packet routing based on annotation functions.
                </Project>

                <Project
                    title="BlazePK"
                    links={[createGitHubLink('jacobtread/BlazePK-rs')]}
                    tags={['Rust', 'Library', 'Packet System', 'Async']}>
                    BlazePK is an implementation of the Blaze packet system used by EA games such as Mass Effect 3 and
                    Battlefield. This implementation is written in Rust and uses macros for wrapping structs and allowing
                    packets to be encoded and decoded from them. This library features both async and sync reading and writing
                    of packets.
                </Project>

                <Project
                    title="Jarpo"
                    links={[createGitHubLink('jacobtread/Jarpo')]}
                    tags={['Rust', 'React', 'SASS', 'HTTP', 'Typescript']}>
                    This is a work-in progress web application which is intended to be an easily accessible public repository
                    for compiled Minecraft server Jar files. Although this is in very early stages whats currently being
                    implemented is a clone of the Spigot Build Tools in Rust as part of the backend to compile spigot Jars
                    fast and asynchronously
                </Project>

                <Project
                    title="Drive-PI"
                    links={[createGitHubLink('jacobtread/Drive-PI')]}
                    tags={['Rust', 'React', 'SASS', 'Raspberry PI', 'HTTP', 'Typescript']}>
                    Drive-PI is an application I wrote for a school assessment. Drive-PI acts as a network file share running
                    on a Raspberry PI. Drive-PI will share the connected drives over its wireless Hotspot along with providing
                    a management web interface to unmount, mount and remount drives. The backend is written in rust and its
                    frontend is written in Typescript using ReactJS.
                </Project>

                <Project
                    title="Kotlin XML Builder"
                    links={[createGitHubLink('jacobtread/xml-builder-kt')]}
                    tags={['Kotlin', 'Gradle', 'Maven', 'XML', 'Library']}>
                    A library which creates a DSL like builder for creating XML through Kotlin code
                    this is used in other projects to create XML objects at runtime. This project has
                    been optimized quite a bit from its original version.
                </Project>


                <Project
                    title="Kotlin Netty HTTP"
                    links={[createGitHubLink('jacobtread/xml-builder-kt')]}
                    tags={['Kotlin', 'Gradle', 'Maven', 'HTTP', 'Library']}>
                    A library for HTTP routing in Netty with minimal dependencies, This project only depends
                    on the required Netty libraries and can be slapped right onto a Netty channel as a handler.
                    Its a lightweight and easy solution which is used in my KME3 project for routing.
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
                    Pond is a custom scripting language for writing scripts for the USB Rubber Ducky. This language
                    improves a lot upon the existing ducky code language providing variables, macros and lots of ease
                    of use functionality.
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KNI"
                    links={[createGitHubLink('jacobtread/KNI')]}
                    tags={['Python', 'Java', 'PHP', 'Javascript', 'Kotlin', 'Rust', 'Typescript', '.NET']}>
                    KNI (KAMAR Notices Interface) is a collection of libraries in different programming languages
                    that all have the one purpose of fetching notices from the KAMAR portal application. Each library
                    referenced in this repository can be used to fetch KAMAR notices in their respective language.
                </Project>


                <Project
                    icon={StudentIcon}
                    title="KJP"
                    links={[createGitHubLink('jacobtread/KJP')]}
                    tags={['Go', 'JSON']}>
                    KJP (KAMAR JSON Pass-through) is a server written in Go which provides a way to connect to
                    and use KAMAR portal APIs through the web with an easy to use JSON REST API. This Project
                    makes it possible to make Single-Page-Apps or other web apps that interface with KAMAR
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
                    programming language.
                </Project>


                <Project
                    icon={TRIcon}
                    title="TrueRandom"
                    links={[
                        createGitHubLink('Questionable-Research-Labs/TrueRandom-MainServer'),
                        createWebsiteLink('https://tr.host.qrl.nz/'),
                    ]}
                    tags={['Typescript', 'HTML', 'SASS', 'NodeJS', 'ExpressJS', 'Docker']}>
                    A joke website designed for the &quot;Terrible Ideas Hackathon&quot;. This website is
                    centered around a dice rolling machine as a service concept. The project is for generating
                    random numbers by physically rolling a dice with a mechanical arm.
                </Project>

                <Project
                    title="Dream"
                    links={[createWebsiteLink('https://dreamclient.xyz/')]}
                    tags={['VueJS', 'PHP', 'SASS', 'Typescript', 'Laravel']}>
                    Dream is a WEB-GUI Minecraft cheat that is controlled via your web browser and can be access from
                    any device that can use a web browser its written in VueJS with a PHP backend.
                </Project>


                <Project
                    title="Alto"
                    links={[
                        createGitHubLink('AltoClient'),
                        createWebsiteLink('https://alto.jacobtread.com/'),
                    ]}
                    tags={['Kotlin', 'Java', 'VueJS', 'Minecraft', 'Go', 'OpenGL']}>
                    Alto is a high performance Minecraft client written in Kotlin which greatly out performs
                    many clients available today. This project is pending rewrite and currently doesn&apos;t have
                    any publicly available releases.
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
                    website which has a nice SPA which uses the Svelte frontend framework.
                </Project>


                <Project
                    title="DuckCentral"
                    links={[createGitHubLink('jacobtread/DuckCentral')]}
                    tags={['Kotlin', 'C++', 'Android', 'Jetpack Compose', 'ESP8266', 'WebSocket', 'Arduino']}>
                    An app for controlling the Malduino Wireless Bad-USB using a Android app with a
                    lightweight firmware that removes the embedded website for extra space.
                </Project>


                <Project
                    title="TetriVersal"
                    links={[createGitHubLink('jacobtread/TetriVersal')]}
                    tags={['Typescript', 'Shell', 'NodeJS']}>
                    An unfinished game of multiplayer Tetris intended for use as the game for a school project.
                    Although unfinished it is completely playable it is only unfinished in terms of not having
                    a proper client completed the only way to play is through the testing client which is a
                    terminal based client.
                </Project>


                <Project
                    title="Morse Code Kt"
                    links={[createGitHubLink('jacobtread/xml-builder-kt')]}
                    tags={['Kotlin', 'Gradle', 'Maven', 'Morse Code', 'Library']}>
                    A library for encoding and decoding Morse code in Kotlin. The library also has a WIP
                    feature which allows you to play the Morse code through the device speakers however at
                    the moment that feature is quite experimental.
                </Project>


                <Project
                    title="Freddy's Fast Food"
                    links={[createGitHubLink('jacobtread/Freddys-Fast-Food')]}
                    tags={['Python', 'Assessment', 'Ordering System']}>
                    A python application submitted for an internal assessment in Digital Technologies for Achievement
                    Standard 91896. This is an advanced ordering system written in python with a terminal UI and menu
                    system.
                </Project>


                <Project
                    title="Computron"
                    links={[createGitHubLink('jacobtread/Computron')]}
                    tags={['VueJS', 'NuxtJS', 'SCSS', 'Javascript', 'Website', 'Assessment']}>
                    A website designed, built and submitted for an internal assessment in Digital Technologies
                    for &quot;Web Design 2.4 AS91893&quot;.
                </Project>

                <Project
                    title="TinyServe"
                    links={[createGitHubLink('jacobtread/TinyServe')]}
                    tags={['Rust', 'HTTP', 'Server']}>
                    This is a tiny portable Rust application which has only one purpose and that is to create an
                    HTTP server that shares all the files placed in the &quot;public&quot; folder next to it
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
                    One of the first iterations of my personal website this one is hosted on github pages.
                </Project>

                <Project
                    title="jacobtread.com Old"
                    links={[createGitHubLink('jacobtread/jacobtread.com')]}
                    tags={['VueJS', 'NuxtJS', 'Typescript']}>
                    The previous design / iteration of this website.
                </Project>


                <Project
                    title="jacobtread.com NextJS"
                    links={[createGitHubLink('jacobtread/jacobtread-react'),]}
                    tags={['NextJS', 'React', 'Typescript', 'SCSS']}>
                    The website that you are currently viewing. This is hosted on cloudflare pages.
                </Project>

                {/* Projects ends here*/}
            </main>
        </div>
    )
}

export default Projects
