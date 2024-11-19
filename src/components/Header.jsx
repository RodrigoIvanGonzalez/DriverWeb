import { useState, useEffect } from "react"

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



    return (
        <header className='top-auto bottom-0  w-screen dark:bg-gray-800 ' id='home'>
            <nav className="fixed flex justify-between items-center gap-4 bottom-0 h-[3rem] p-3 w-screen bg-[#e1e1e1] dark:bg-[#475569] z-50 ">
                <a href="index.html" className=""><span className="  font-bold  bg-clip-text text-transparent bg-Gradient-Title text-3xl  ">Hola !</span></a>

                <div className={Toggle ? 'nav-menu show-menu dark:bg-Gradient-show-menu dark:shadow-3da' : 'nav-menu'}>
                    <ul className="grid grid-cols-3 gap-8 ">
                        <li className="">
                            <a href="#welcome" className="nav-link">
                                <i className="uil uil-estate dark:text-gray-300  lg:hidden"></i><span className="dark:text-gray-300"> Bienvenido</span>
                            </a>
                        </li>

                        <li className="">
                            <a href="#about" className="nav-link" >
                                <i className="uil uil-user block dark:text-gray-300 lg:hidden"></i> <span className="dark:text-gray-300 ">Sobre mi</span>
                            </a>
                        </li>

                        <li className="">
                            <a href="#travel" className="nav-link">
                                <i className="uil uil-file-alt block dark:text-gray-300 lg:hidden"></i> <span className="dark:text-gray-300 ">Su viaje</span>
                            </a>
                        </li>

                        <li className="">
                            <a href="#contact" className="nav-link">
                                <i className="uil uil-briefcase-alt dark:text-gray-300 block lg:hidden"></i> <span className="dark:text-gray-300 ">Contacto</span>
                            </a>
                        </li>
                        
                        <li>
                            <label htmlFor="darkmode" 
                            // className=" border relative m-auto w-8 h-4 rounded-full cursor-pointer p-[1px] bg-Toggle-Gradient  mt-2"
                            >
                                <input onClick={handleClick} id="darkmode" type="checkbox" className="peer sr-only" />
                                {/* <div className=" w-full h-full peer-checked:bg-Toggle-Gradient-Dark absolute top-0 left-0 rounded-full"></div>
                                <div className="w-[12px] h-[12px]  bg-gray-400 rounded-full    peer-checked:translate-x-[15px] transition-transform "></div> */}
                                
                                <i className="uil uil-sun block text-center m-auto text-lg dark:hidden"></i><i className="uil uil-moon hidden dark:block dark:text-center  dark:text-lg dark:text-gray-300 "></i>
                            </label>
                        </li>
                        
                    </ul>


                    <i className='uil uil-times absolute block right-[1.3rem] bottom-2 text-2xl cursor-pointer text-Title-color hover:text-Tilte-Color-Dark dark:text-gray-300 ' onClick={()=> showMenu(!Toggle)} ></i>
                </div>
                <div className=""  >
                    <i className="uil uil-apps text-Gradient-Title block cursor-pointer text-lg" onClick={()=> showMenu(!Toggle)}></i>
                </div>

            </nav>
        </header>
    )
}

export default Header