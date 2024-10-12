import React from 'react';
import "./footer.css"

const Footer = () => {
return (
    <footer className="footer">
        <div className="footer container container">
            <h1 className="footer__title">Rodrigo</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">
                        About
                    </a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">
                        Proyects
                    </a>
                </li>

                <li>
                    <a href="#" className="footer__link">
                        Testimonials
                    </a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://www.linkedin.com/in/rodrigo-iv%C3%A1n-gonz%C3%A1lez-aa1a20286//" className="footer__social-link" target="_blank">
            <i className='bx bxl-linkedin'></i>
            </a>

        <a href="#" className="footer__social-link" target="_blank">
        <i className='bx bxs-briefcase-alt-2'></i>
        </a>

        <a href="https://github.com/RodrigoIvanGonzalez" className="footer__social-link" target="_blank">
        <i className='bx bxl-github bx-tada' ></i>
        </a>
            </div>

            <span className="footer__copy"> &#169; Rodrigo. All rigths reserved</span>

        </div>
    </footer>
)
}

export default Footer