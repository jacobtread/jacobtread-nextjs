import { FunctionComponent } from "react";

/**
 * Dots Component. A simple component for rendering the three
 * animated dots that are for drawing the viewers attention
 */
const Dots: FunctionComponent = () => (
    <div className="dots">
        <span className="dots__item"></span>
        <span className="dots__item"></span>
        <span className="dots__item"></span>
    </div>
)

export default Dots