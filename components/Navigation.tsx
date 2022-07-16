import { FunctionComponent, useEffect, useRef, useState } from "react";


const Navigation: FunctionComponent = () => {

    const [floating, setFloating] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const element: HTMLElement | null = navRef.current;
        if (element == null) return;
        const originalY: number = element.offsetTop;
        const onDocumentScroll = () => setFloating(window.scrollY - originalY > 0);
        document.addEventListener('scroll', onDocumentScroll);
        // Disposing function for removing the event listener
        return () => document.removeEventListener('scroll', onDocumentScroll)
    }, [navRef])

    const className = `nav ${floating ? 'nav--floating' : ''}`
    return (
        <nav className={className} ref={navRef}>
            <a href="#about" className="nav__button">About</a>
            <a href="#contact" className="nav__button">Contact</a>
            <a href="#technology" className="nav__button">Technology</a>
            <a href="/projects" className="nav__button">Projects</a>
        </nav>
    )
}

export default Navigation;

