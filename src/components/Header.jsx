import { useState, useEffect } from "react"
import i18n from '../i18n';
import { useTranslation } from "react-i18next";

const Header = () =>{

    const [darkMode, setDarkMode] = useState(false)

    const [Toggle, showMenu] = useState(false);


    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const {t} = useTranslation()

    const changeLanguageEs = ()=> {
        i18n.changeLanguage("es")
    }

    const changeLanguageEn = ()=> {
        i18n.changeLanguage("en")
    }

    return (
        <header className='top-auto bottom-0  w-screen dark:bg-gray-800 ' id='home'>
            <nav className="fixed flex justify-between items-center gap-4 bottom-0 h-[4rem] p-6 w-screen bg-[#e1e1e1] dark:bg-[#475569] z-50 ">
                <a href="index.html" className=""><span className="  font-bold  bg-clip-text text-transparent bg-Gradient-Title text-3xl dark:bg-cardGradient " style={{ textShadow: '0 4px 15px rgba(255, 255, 255, 0.5)'}}> {t('hello')} </span></a>

                <div className={Toggle ? 'nav-menu show-menu dark:bg-Gradient-show-menu dark:shadow-3da' : 'nav-menu'}>
                    <ul className="grid grid-cols-3 gap-8 ">
                        <li className="">
                            <a href="#welcome" className="nav-link">
                                <i className="uil uil-estate dark:text-emerald-100  lg:hidden"></i><span className="dark:text-emerald-100">{t('welcomeIcon')}</span>
                            </a>
                        </li>

                        <li className="">
                            <a href="#about" className="nav-link" >
                                <i className="uil uil-user block dark:text-emerald-100 lg:hidden"></i> <span className="dark:text-emerald-100 ">{t('aboutIcon')}</span>
                            </a>
                        </li>

                        <li className="">
                            <a href="#travel" className="nav-link">
                                <i className="uil uil-file-alt block dark:text-emerald-100 lg:hidden"></i> <span className="dark:text-emerald-100 ">{t('travelIcon')}</span>
                            </a>
                        </li>

                        <li className="">
                            <a href="#contact" className="nav-link">
                                <i className="uil uil-briefcase-alt dark:text-emerald-100 block lg:hidden"></i> <span className="dark:text-emerald-100 ">{t('contactIcon')}</span>
                            </a>
                        </li>
                        
                        <li>
                            <label htmlFor="darkmode" 
                            // className=" border relative m-auto w-8 h-4 rounded-full cursor-pointer p-[1px] bg-Toggle-Gradient  mt-2"
                            >
                                <input onClick={handleClick} id="darkmode" type="checkbox" className="peer sr-only" />
                                {/* <div className=" w-full h-full peer-checked:bg-Toggle-Gradient-Dark absolute top-0 left-0 rounded-full"></div>
                                <div className="w-[12px] h-[12px]  bg-gray-400 rounded-full    peer-checked:translate-x-[15px] transition-transform "></div> */}
                                
                                <i className="uil uil-sun block text-center m-auto text-lg dark:hidden"></i><i className="uil uil-moon hidden dark:block dark:text-center  dark:text-lg dark:text-emerald-100"></i>
                            </label>
                        </li>

                        <li className=" flex justify-center gap-4">
                        <button onClick={changeLanguageEs} className=" text-center dark:text-emerald-100 text-lg">ES</button> 
                        <button onClick={changeLanguageEn} className=" text-center dark:text-emerald-100 text-lg">EN</button>
                        </li>
                        
                    </ul>


                    <i className='uil uil-times absolute block right-[1.2rem] bottom-4 text-2xl cursor-pointer text-Title-color hover:text-Tilte-Color-Dark dark:text-emerald-100' onClick={()=> showMenu(!Toggle)} ></i>
                </div>
                <div className=""  >
                    <i className="uil uil-apps text-Gradient-Title block cursor-pointer text-lg dark:text-emerald-100" onClick={()=> showMenu(!Toggle)}></i>
                </div>


            </nav>
        </header>
    )
}

export default Header