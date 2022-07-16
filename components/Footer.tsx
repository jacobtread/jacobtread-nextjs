import { FunctionComponent } from "react";


const Footer: FunctionComponent = () => {
    const currentDate: Date = new Date();
    const currentYear: number = currentDate.getFullYear()

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <h1 className="footer__initials">JR</h1>
                <p className="footer__email">jacobtread@gmail.com</p>
                <p className="footer__copyright">Copyright &copy; 2020 - {currentYear} Jacob Read</p>
                <div className="footer__links">
                    <a href="/#about" className="footer__links__item">About</a>
                    <a href="/#contact" className="footer__links__item">Contact</a>
                    <a href="/#technology" className="footer__links__item">Technology</a>
                    <a href="/#technology" className="footer__links__item">Projects</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

