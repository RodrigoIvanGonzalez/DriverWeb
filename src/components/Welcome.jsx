// import welcomeImage from '../assets/Welcome-img.jpg'
// import { useTranslation } from "react-i18next";
import  obelisco from '../assets/obelisco.jpg'
// import laBoca from '../assets/laBoca.jpg'
import casaRosada from '../assets/casaRosada.jpg'
import florarisGenerica from '../assets/florarisGenerica.jpg'
import facultadDerecho from '../assets/facultadDerecho.jpg'

const Welcome = () => {


//     const { t } = useTranslation()

    return (
//         <>
//             <section className='flex relative bg-cover bg-no-repeat' id='welcome'>

//                 <div className="z-10">
//                     <h1 className=" text-slate-400 text-2xl m-4 py-4" style={{ textShadow: '0px 0px 50px rgba(0, 0, 0, 1)' }}>
//                         {t('welcome')}
//                     </h1>
//                     <p className=" text-slate-400 text-sm m-4 drop-shadow-2xl tracking-tighter font-italic " style={{ textShadow: '0px 0px 50px rgba(0, 0, 0, 4)' }} > {t('welcomeParagraph')} <br /> {t('thanks')} <br /><br />{t('driver')}.
//                     </p>
//                 </div>

//                 <div className='absolute inset-0 blur-[2px] brightness-50'>
//                     <img className='rounded-sm h-full w-full' src={welcomeImage} alt="Welcome" />
//                 </div>
//             </section>
//         </>

<section className='flex flex-col items-center w-[100vw] max-w-[430px] px-4 pt-8 bg-background' id='welcome'>
	<h1 className='text-3xl font-bold text-accent mb-7 text-center '>¡Bienvenidos a Buenos Aires!</h1>
		<div className="flex justify-between ">
				<img src={obelisco} className=' w-[30%] h-auto gap-2 rounded-lg object-cover '  />
        <img src={facultadDerecho} className=' w-[30%] h-auto gap-2 rounded-lg object-cover  ' />
        <img src={florarisGenerica} className=' w-[30%] h-auto gap-2 rounded-lg object-cover ' /> 
		</div>
	<h2 className='text-2xl font-bold text-accent text-center mt-5 mb-1'> BUENOS AIRES </h2>
	<h3 className='text-2xl font-bold text-accent text-left'>te abraza</h3>
	<span className='text-base text-accent text-center py-2'>con historia, ritmo y encuentros únicos.
Gracias por elegirme para acompañarte en tu camino.</span>

<article className='relative w-screen' id='hero'>
	
	<img src={casaRosada} className="w-full h-auto" />
	<span className="absolute top-1   text-accent text-4xl font-bold px-4 py-2 rounded-md shadow-md">
		VIVÍ <br/> BUENOS <br/> AIRES
	</span>
	
</article>

</section>




)













}

export default Welcome

