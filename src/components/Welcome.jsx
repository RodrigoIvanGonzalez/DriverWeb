
import obelisco from '../assets/obelisco.jpg'
import casaRosada from '../assets/casaRosada.jpg'
import florarisGenerica from '../assets/florarisGenerica.jpg'
import facultadDerecho from '../assets/facultadDerecho.jpg'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Welcome = () => {
	
	useGSAP(()=> {
		gsap.from('.titulo', {
      opacity: 0,
			y: 40,
			duration: 1.3,
      ease: "power3.out",
      delay: 0.2,
		})
	})



	useGSAP(()=> {
		gsap.from(".imagen1", {
			opacity: 0,
			y: 50,
			duration: 1.1,
			ease: "power3.out",},
    )
	})

		useGSAP(()=> {
		gsap.from(".imagen2", {
			opacity: 0,
			y: -50,
			duration: 1.1,
			ease: "power3.out",
      delay: .5},
    )
	})

		useGSAP(()=> {
		gsap.from(".imagen3", {
			opacity: 0,
			x: 50,
			duration: 1.1,
			ease: "power3.out",
      delay: 1},
    )
	})
  

	useGSAP(()=> {
		gsap.from(".casa", {
			opacity: 0,
      scale: 0.9,
			duration: 1.4,
      ease: "power3.out",
			})})



  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".cta-button", {
    y: 60,
    scrollTrigger: {
      trigger: ".cta-button",
      start: "center center",
  }})


	return (


		
	<section id='welcome'
    className="min-h-screen w-full bg-gradient-to-b from-[#0A1A2F] to-[#0F2747]
    text-white px-6 py-12 flex flex-col items-center">

	<h1 
    className='text-5xl font-extrabold tracking-wide text-center mb-10 bg-gradient-to-r from-[#4DA3FF] to-[#80BFFF] bg-clip-text text-transparent titulo'>
      ¡Bienvenidos a Buenos Aires!
  </h1>

	<div className="img-div flex justify-between gap-2">
		<img src={obelisco}  
      className='w-[30%] h-auto rounded-lg object-cover imagen1' />
		<img src={facultadDerecho}
      className='w-[30%] h-auto rounded-lg object-cover imagen2' />
		<img src={florarisGenerica}
      className='w-[30%] h-auto rounded-lg object-cover imagen3' />
	</div>

	<span className='text-center max-w-md leading-loose text-gray-200 mb-12 mt-7'>
			Con historia, ritmo y encuentros únicos.
			Gracias por elegirme para acompañarte en tu camino. ¡Disfrutá de cada rincón, cada sabor y cada momento!
	</span>

	<article className="relative casa" id="hero">
      <img
      src={casaRosada}
      className= 'hero-ba w-full h-full object-cover'
      alt="Casa Rosada"
        />


    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold
        bg-gradient-to-r from-[#4DA3FF] to-[#dee3e7] bg-clip-text text-transparent 
        drop-shadow-lg">

          VIVÍ BUENOS AIRES

      </h2>
    </div>
	</article>

  <button href="#travel" className="cta-button mt-12 px-6 py-3 bg-[#4DA3FF] text-[#0A1A2F] font-bold rounded-xl shadow-lg hover:bg-[#80BFFF] transition-all">
    Conocé más sobre tu viaje
  </button>

		</section>
	)


};




export default Welcome










// export default function WelcomeSection() {



//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);




//     // CTA scroll animation
//     gsap.from(".cta-button", {
//       scrollTrigger: {
//         trigger: ".cta-button",
//         start: "top 90%"
//       },
//       opacity: 0,
//       y: 40,
//       duration: 1.1,
//       ease: "power3.out"
//     });
//   }, []);



// return (





  
// <section className="min-h-screen w-full bg-gradient-to-b from-[#0A1A2F] to-[#0F2747] text-white px-6 py-12 flex flex-col items-center">

// <h1 className="welcome-title text-5xl font-extrabold tracking-wide text-center mb-10 bg-gradient-to-r from-[#4DA3FF] to-[#80BFFF] bg-clip-text text-transparent">
// ¡Bienvenidos a Buenos Aires!
// </h1>


// {/* CITY IMAGE GRID */}
// <div className="grid grid-cols-3 gap-4 max-w-xl mb-12">

// <img
// src={obelisco}
// className="city-img w-full h-full object-cover"
// alt="Ciudad de Buenos Aires"
// />
// <img
// src={facultadDerecho}
// className="city-img w-full h-full object-cover"
// alt="Ciudad de Buenos Aires"
// />
// <img
// src={florarisGenerica}
// className="city-img w-full h-full object-cover"
// alt="Ciudad de Buenos Aires"
// />
// </div>



// {/* DESCRIPTION */}
// <p className="text-center max-w-md leading-loose text-gray-200 mb-12">
// Con historia, ritmo y encuentros únicos. Gracias por elegirme para
// acompañarte en tu camino. ¡Disfrutá de cada rincón, cada sabor y cada
// momento!
// </p>


// {/* HERO IMAGE SECTION */}

// <img
// src={casaRosada}
// className= 'hero-ba w-full h-full object-cover'
// alt="Casa Rosada"
// />


// <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
// <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider drop-shadow-lg">
// VIVÍ BUENOS AIRES
// </h2>
// </div>



// {/* CTA */}
// <button className="cta-button mt-12 px-6 py-3 bg-[#4DA3FF] text-[#0A1A2F] font-bold rounded-xl shadow-lg hover:bg-[#80BFFF] transition-all">
// Conocé más sobre tu viaje
// </button>
// </section>
// );
// }