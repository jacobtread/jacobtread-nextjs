// Types
import type { FunctionComponent } from "react";
import type { IconComponent } from "./Icons"
// Components
import { DiscordIcon, GithubIcon, InstagramIcon, MailIcon } from "./Icons";
import Dots from "./Dots";

interface ContactLink { // Contact link properties
    Icon: IconComponent;
    title: string;
    link: string;
    text: string;
}

/**
 * Contact Component. This component contains the contact links for
 * the home page.
 */
const Contact: FunctionComponent = () => {
    // The different contact links
    const links: ContactLink[] = [
        {
            Icon: GithubIcon,
            title: "GitHub",
            link: "https://github.com/jacobtread",
            text: "github.com/jacobtread"
        },
        {
            Icon: InstagramIcon,
            title: "Instagram",
            link: "https://instagram.com/jacobtread",
            text: "instagram.com/jacobtread"
        },
        {
            Icon: MailIcon,
            title: "Email",
            link: "mailto:jacobtread@gmail.com",
            text: "jacobtread@gmail.com"
        },
        {
            Icon: DiscordIcon,
            title: "Discord",
            link: "#contact",
            text: "Jacobtread#3770"
        },
    ]
    return (
        <div className="section">
            <h1 className="section__title">Getting in touch</h1>
            <Dots/>
            <div id="contact" className="section__content section__content--col-2">
                {links.map(({Icon, title, link, text}, index) => (
                    <a key={index}
                       href={link}
                       rel="noreferrer noopener"
                       target="_blank"
                       className="block contact-button"
                    >
                        <Icon className="contact-button__icon icon"/>
                        <div>
                            <h2 className="block__title">{title}</h2>
                            <h2 className="block__text">{text}</h2>
                        </div>
                    </a>
                ))}
            </div>
            <Dots/>
        </div>
    )
}

export default Contact