import { useState } from 'react';
import julio from '../assets/9dejulio.jpg'

const slides = [
    { title: "Slide1", text: "Para su mayor seguridad, use los cinturones de seguridad" },
    { title: "Slide2", text: "Está en llamada, o simplemente no quiere ruidos dentro del vehículo, puede indicármelo y con gusto quito la radio para un mayor confort en su viaje" },
    { title: "Slide3", text: "Si tiene demasiado frío/calor sin ningún problema puede pedir el uso de AC" },
    { title: "Slide4", text: "Antes de efectuar algún cambio de ruta en la app, por favor, indicar mi disponibilidad" },
    { title: "Slide5", text: "Cerrar las puertas despacio" },
    { title: "Slide6", text: "En lo posible evitar tomar y comer dentro del vehículo" },
    { title: "Slide7", text: "Por cuestiones de limpieza, dentro del vehículo está prohibido fumar" },
    { title: "Slide8", text: "Si mi servicio cumplió sus expectativas, se agradece mucho la calificación 5 estrellas" },
];

const Travel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };


    const totalSlides = slides.length;
    const angle = 360 / totalSlides;

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <section className="p-4  w-full h-[400px]"
        style={{backgroundImage: `url(${julio})`}}
        id='travel'>
            <div className=" relative flex items-center justify-center"
        >
                <h2 className= 'bg-white'>Recomendaciones</h2>

                <div
                    className="absolute z-0 top-6 w-[50%] h-[320px] transition-transform duration-700"
                    style={{
                        transform: `rotateY(-${activeIndex * angle}deg)`,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-white shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${index * angle}deg) translateZ(200px)`,
                                opacity: index === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                <h1 className="text-2xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-gray-600">{slide.text}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <button onClick={prevSlide} className="prev"><i className="uil uil-arrow-left"></i></button>
                <button onClick={nextSlide} className="next"><i className="uil uil-arrow-right"></i></button>
            </div>
        </section>
    );
};

export default Travel;