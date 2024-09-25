import React from 'react'
import "./about.css";

const About = () => {
    return (
    <section className='about container' id='about'>
        <div className="about__content grid">
            <div className="about__img"></div>
            <div className="about__description ul ">
                    <ul>
                        <li>Nombre: Rodrigo</li>
                        <li>Apellido: Gonzalez</li>
                        <li>Vehiculo: Toyota Yaris</li>
                        <li>Matricula: AG 517 BU</li>
                    </ul>
            </div>
        </div>
            <div className="about__me">
                <h3 className="about__me-title ">Sobre Mi</h3>
                <span className='about__me-subtitle'>
                Soy un conductor de 29 años con dos años de experiencia brindando un servicio seguro y confiable a mis pasajeros. Me gradué como Full Stack Web Developer, lo que me ha permitido expandir mis horizontes y prepararme para un emocionante salto laboral al mundo tecnológico. Actualmente, me encuentro en la búsqueda de nuevas oportunidades en el mundo de la tecnología buscando un puesto en donde pueda aplicar y seguir perfeccionando mis habilidades. <br />Siempre estoy dispuesto a ofrecer lo mejor de mí, ya sea en la carretera o en la creación de soluciones digitales. ¡Gracias por acompañarme en este viaje! <br /> <br />

                </span>



            </div>

    </section>
)
}

export default About