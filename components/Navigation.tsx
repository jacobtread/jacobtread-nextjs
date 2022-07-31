import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";

interface Properties { // Navigation properties
    children: ReactNode[]
}

/**
 * Navigation Component. This component is the sticky navigation component
 * this component will stay in its original position until the top of the
 * screen passes the element then it becomes sticky and attaches to the
 * top of the screen.
 *
 * @param children The child link elements
 */
const Navigation: FunctionComponent<Properties> = ({children}) => {
    const [floating, setFloating] = useState(false); // State determining if the nav should float
    const navRef = useRef<HTMLElement>(null); // Reference to the nav element

    useEffect(() => {
        const element: HTMLElement | null = navRef.current;
        if (element == null) return; // Ignore if the nav element doesn't exist
        const originalY: number = element.offsetTop; // Obtain the y position of the element from document top
        // The navigation should float if it's above the top of the scroll value
        const onDocumentScroll = () => setFloating(window.scrollY - originalY > 0);
        // Add the scroll listener
        document.addEventListener('scroll', onDocumentScroll);
        // Disposing function for removing the event listener
        return () => document.removeEventListener('scroll', onDocumentScroll)
    }, [navRef])


    return (
        <nav className={`nav ${floating ? 'nav--floating' : ''}`} ref={navRef}>
            {children}
        </nav>
    )
}

export default Navigation;

