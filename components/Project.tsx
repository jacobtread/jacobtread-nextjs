import { FunctionComponent } from "react";
import { GithubIcon, IconComponent } from "../components/Icons";

export interface Link {
    icon?: IconComponent;
    url: string;
    text: string;
}

export interface ProjectProperties {
    icon?: IconComponent;
    title: string;
    links: Link[];
    tags: string[];
    children: string;
}

export function createGitHubLink(repository: string, text: string = 'GitHub'): Link {
    return {
        icon: GithubIcon,
        url: `https://github.com/${repository}`,
        text
    }
}

export function createWebsiteLink(url: string, text: string = 'View Website'): Link {
    return {url, text}
}


export const Project: FunctionComponent<ProjectProperties> = ({icon: Icon, title, children, links, tags}) => {
    return (
        <div className="block project">
            <div>
                <div className="project__head">
                    <h2 className="block__title project__title">{title}</h2>
                    {Icon !== undefined && <Icon className="project__icon"/>}
                </div>
                <p className="block__text project__text">{children}</p>
                <div className="block__tags">
                    {tags.map((tag, index) => (
                        <span className="block__tag" key={index}>{tag}</span>
                    ))}
                </div>
            </div>
            <div>
                <div className="block__buttons">
                    {
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
        </div>
    )
}
