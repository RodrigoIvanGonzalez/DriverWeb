import perfilCV  from "../assets/perfilCV.jpg";
import { useTranslation } from "react-i18next";

const About = () => {

    const {t} = useTranslation()

    return ( 
<>
    <section className='m-4' id='about'>
        <div className=" flex justify-between p-4 bg-no-repeat bg-center bg-cover  "
        >
        

            <img className= " relative bg-no-repeat bg-center bg-cover dark:shadow-white-glow  w-[145px] h--[190px] rounded-xl " src={perfilCV} alt="Hi !" />
            <div className="relative self-center text-lg font-medium ul ">
                    <ul className="relative  dark:text-emerald-100">
                        <li>{t('aboutName')}</li>
                        <li>{t('aboutLastName')}</li>
                        <li>{t('aboutCar')}</li>
                        <li>{t('aboutPlate')}</li>
                    </ul>
            </div>
        </div>
            <div className="mb-8">
                <h2 className=" relative font-semibold text-2xl mb-4 dark:text-emerald-100">{t("aboutTitle")}</h2>
                <span className='relative text-sm mb-8 dark:text-emerald-200'>
                {t("aboutText")}
                </span>
            </div>
    </section>
</>
)
}

export default About