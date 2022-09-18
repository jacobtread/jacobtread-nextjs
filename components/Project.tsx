import { FunctionComponent } from "react";
import { GithubIcon, IconComponent } from "./Icons";


interface Link { // Link typing
    icon?: IconComponent; // Icon for the link (undefined for none)
    url: string; // URL the link points to
    text: string; // The text to display
}

interface Properties { // Properties for the project component
    icon?: IconComponent;
    title: string;
    links: Link[];
    tags: string[];
    children: string;
}

/**
 * Shortcut function for creating links to GitHub repositories.
 * This creates a link to the provided GitHub repository
 * and sets the icon to a GitHub icon. This provides the default
 * text value of "GitHub"
 *
 * @param repository The GitHub repository (e.g. jacobtread/jacobtread-react)
 * @param text The button text
 */
export function createGitHubLink(repository: string, text: string = 'GitHub'): Link {
    return {
        icon: GithubIcon,
        url: `https://github.com/${repository}`,
        text
    }
}

/**
 * Shortcut function for creating website links. Adds the
 * default text of "View Website"
 *
 * @param url The url of the website to reference
 * @param text The button text
 */
export function createWebsiteLink(url: string, text: string = 'View Website'): Link {
    return {url, text}
}

/**
 * Component for projects. This is used on the projects page for
 * each project.
 *
 * @param Icon The icon for this project (Can be undefined if not specified)
 * @param title The title of this project
 * @param children Children elements in this case used for the description value
 * @param links The links for this project
 * @param tags The tags for this project
 */
export const Project: FunctionComponent<Properties> = ({icon: Icon, title, children, links, tags}) => {
    return (
        <article className="block project">
            <div>
                <div className="project__head">
                    <h2 className="block__title project__title">{title}</h2>
                    {Icon !== undefined && <Icon className="project__icon"/>}
                </div>
                <p className="block__text project__text">{children}</p>
                <div className="block__tags">
                    {
                        // Map all the tags to span elements
                        tags.map((tag, index) => (
                            <span className="block__tag" key={index}>{tag}</span>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="block__buttons">
                    {
                        // Map all the links to a link element
                        links.map(({icon: LinkIcon, url, text}, index) => (
                            <a key={index}
                               href={url}
                               target="_blank"
                               rel="noreferrer noopener"
                               className="block__button block__button--icon">
                                {LinkIcon !== undefined && <LinkIcon className="block__button__icon"/>}
                                {text}
                            </a>
                        ))
                    }
                </div>
            </div>
        </article>
    )
}
