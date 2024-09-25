import {useState} from 'react'
import './header.css'



const Header = () => {

    window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
});

const [Toggle, showMenu] = useState(false);
const[activeNav, setActiveNav] = useState("#welcome")

    return (
    <header className='header' id='home'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Conductor</a>
        
            <div className={Toggle ? "nav__menu show-menu" :
                    "nav__menu"
                }>
                <ul className="nav__list grid">
                <li className="nav__item">
                        <a href="#welcome" onClick={() => setActiveNav('#welcome')} className={activeNav === "#home" ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-estate nav__icon"></i> Bienvenido
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'nav__link active-link' : 'nav__link'} >
                            <i className="uil uil-user nav__icon"></i> Sobre mi
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#travel" onClick={() => setActiveNav('#travel')} className={activeNav === "#skills" ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-file-alt nav__icon"></i> Su viaje
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#tips" onClick={() => setActiveNav('#tips')} className={activeNav === "#services" ? 'nav__link active-link' : 'nav__link'}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Propinas
                        </a>
                    </li>

                </ul>

                <i className='uil uil-times nav__close' onClick={()=> showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

        </nav>
    </header>
)
}

export default Header