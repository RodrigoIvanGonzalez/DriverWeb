import welcomeImage from '../assets/Welcome-img.jpg'
import { useTranslation } from "react-i18next";

const Welcome = ()=> {


    const {t} = useTranslation()

    return (
        <>
            <section className='flex relative bg-cover bg-no-repeat' id='welcome'>
                
                    <div className="z-10">
                        <h1 className=" text-slate-400 text-2xl m-4 py-4" style={{ textShadow: '0px 0px 50px rgba(0, 0, 0, 1)' }}>
                            {t('welcome')}
                        </h1>
                        <p className=" text-slate-400 text-sm m-4 drop-shadow-2xl tracking-tighter font italic f" style={{ textShadow: '0px 0px 50px rgba(0, 0, 0, 4)' }} > {t('welcomeParagraph')} <br /> {t('thanks')} <br /><br />{t('driver')}.
                        </p>
                    </div>      
                
                    <div className='absolute inset-0 blur-[2px] brightness-50'>
                        <img className='rounded-sm h-full w-full' src={welcomeImage} alt="Welcome" />
                    </div>
            </section>
        </>
    )
}

export default Welcome

