import { FunctionComponent } from "react";
import Dots from "../components/Dots";


const Contact: FunctionComponent = () => {
    return (
        <div className="section">
            <h1 className="section__title">Getting in touch</h1>
            <Dots/>
            <div id="contact" className={"section__content"}></div>
        </div>
    )
}

export default Contact