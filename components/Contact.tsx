import { FunctionComponent } from "react";
import Dots from "../components/Dots";
import { GithubIcon, IconComponent, InstagramIcon, MailIcon, DiscordIcon } from "../components/Icons";

interface ContactButtonProperties {
    Icon: IconComponent;
    title: string;
    link: string;
    text: string;
}

const ContactButton: FunctionComponent<ContactButtonProperties> = ({Icon, title, link, text}) => (
    <a href={link} rel="noreferrer noopener" target="_blank" className="block contact-button">
        <Icon className="contact-button__icon icon"/>
        <div>
            <h2 className="block__title">{title}</h2>
            <h2 className="block__text">{text}</h2>
        </div>
    </a>
)

const Contact: FunctionComponent = () => {
    return (
        <div className="section">
            <h1 className="section__title">Getting in touch</h1>
            <Dots/>
            <div id="contact" className="section__content section__content--col-2">
                <ContactButton Icon={GithubIcon} title="GitHub" link="https://github.com/jacobtread" text="github.com/jacobtread"/>
                <ContactButton Icon={InstagramIcon} title="Instagram" link="https://instagram.com/jacobtread" text="instagram.com/jacobtread"/>
                <ContactButton Icon={MailIcon} title="Email" link="mailto:jacobtread@gmail.com" text="jacobtread@gmail.com"/>
                <ContactButton Icon={DiscordIcon} title="Discord" link="#contact" text="Jacobtread#3770"/>
            </div>
            <Dots/>
        </div>
    )
}

export default Contact