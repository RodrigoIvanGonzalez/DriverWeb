import perfilCV  from "../assets/perfilCV.jpg";
// import { useTranslation } from "react-i18next";

// const About = () => {

//     const {t} = useTranslation()

//     return ( 
// <>
//     <section className='m-4' id='about'>
//         <div className=" flex justify-between p-4 bg-no-repeat bg-center bg-cover  "
//         >
        

//             <img className= " relative bg-no-repeat bg-center bg-cover dark:shadow-white-glow  w-[145px] h--[190px] rounded-xl " src={perfilCV} alt="Hi !" />
//             <div className="relative self-center text-lg font-medium ul ">
//                     <ul className="relative  dark:text-emerald-100">
//                         <li>{t('aboutName')}</li>
//                         <li>{t('aboutLastName')}</li>
//                         <li>{t('aboutCar')}</li>
//                         <li>{t('aboutPlate')}</li>
//                     </ul>
//             </div>
//         </div>
//             <div className="mb-8">
//                 <h2 className=" relative font-semibold text-2xl mb-4 dark:text-emerald-100">{t("aboutTitle")}</h2>
//                 <span className='relative text-sm mb-8 dark:text-emerald-200'>
//                 {t("aboutText")}
//                 </span>
//             </div>
//     </section>
// </>
// )
// }

// export default About

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import rodrigoCar from "../assets/rodrigo-car.png";
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

  const badges = [
    "Conductor Profesional",
    "Experiencia 5★",
    "Desarrollador Web",
    "Servicio Premium",
  ];
export default function AboutMe() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.to(self.selector(".main-grid"), {
        x: 2,
        duration: .5,
      });
    }, sectionRef);

    return () => ctx.revert(); // Limpieza
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-gradient-to-b from-[#0F2747] to-[#0A1A2F] text-white px-6 py-16 flex flex-col items-center"
    >
      {/* TITLE */}
      <h2 className="text-4xl font-extrabold tracking-wide text-center mb-16 bg-gradient-to-r from-[#4DA3FF] to-[#80BFFF] bg-clip-text text-transparent">
        Sobre mí
      </h2>

      {/* MAIN GRID */}
      <div className="main-grid grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl items-center">
        {/* PHOTO */}
        <div
          className="rounded-3xl overflow-hidden shadow-xl shadow-black/40"
        >
          <img
            src={perfilCV}
            className="w-full h-full object-cover"
            alt="Rodrigo chofer"
          />
        </div>

        {/* TEXT BLOCK */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Hola, soy Rodrigo</h3>
          <p className="text-gray-200 leading-loose mb-6">
            Soy un conductor profesional apasionado por ofrecer viajes
            tranquilos, seguros y pensados para que disfrutes cada minuto.
            Además, estoy en pleno crecimiento como desarrollador web,
            combinando tecnología y servicio para crear experiencias más humanas
            y eficientes.
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mb-6">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-[#4DA3FF]/20 text-[#80BFFF] rounded-full text-sm tracking-wide border border-[#4DA3FF]/30"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CAR SECTION */}
      <div
        className="mt-20 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0D2038]"
      >
        <img
          src={rodrigoCar}
          alt="Auto de Rodrigo"
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">Tu viaje en mi auto</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Mi vehículo está equipado para un viaje cómodo y seguro, con amplio
            espacio para equipaje, aire acondicionado, limpieza constante y un
            andar suave ideal para traslados urbanos y viajes al aeropuerto.
          </p>

          {/* ICON LIST */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Aire Acond.", icon: "❄️" },
              { label: "Baúl Amplio", icon: "🧳" },
              { label: "Confort", icon: "🛋️" },
              { label: "Viaje Suave", icon: "🚗" },
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="text-4xl">{item.icon}</div>
                <p className="text-gray-200 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL MESSAGE */}
      <p
        className="mt-16 text-center text-xl text-gray-200 max-w-xl leading-relaxed"
      >
        Tu viaje, pensado con diseño, servicio y tecnología.
      </p>
    </section>
  );
}