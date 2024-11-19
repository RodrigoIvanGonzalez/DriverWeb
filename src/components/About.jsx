import perfilCV  from "../assets/perfilCV.jpg";


const About = () => {
    return ( 
<>
    <section className='mt-4' id='about'>
        <div className=" flex justify-between p-4 bg-no-repeat bg-center bg-cover  "
        >
        

            <img className= " relative bg-no-repeat bg-center bg-cover  w-[145px] h--[190px] rounded-xl " src={perfilCV} alt="Hi !" />
            <div className="relative self-center text-lg font-medium ul ">
                    <ul className="relative  top-10">
                        <li>Nombre: Rodrigo</li>
                        <li>Apellido: Gonzalez</li>
                        <li>Vehiculo: Toyota Yaris</li>
                        <li>Matricula: AG 517 BU</li>
                    </ul>
            </div>
        </div>
            <div className="m-4">
                <h2 className=" relative font-semibold text-2xl ">Sobre Mi</h2>
                <span className='relative text-sm'>
                Soy un conductor de 29 años con dos años de experiencia brindando un servicio seguro y confiable a mis pasajeros. Me gradué como Full Stack Web Developer, lo que me ha permitido expandir mis horizontes y prepararme para un emocionante salto laboral al mundo tecnológico. Actualmente, me encuentro en la búsqueda de nuevas oportunidades en el mundo de la tecnología buscando un puesto en donde pueda aplicar y seguir perfeccionando mis habilidades. <br />Siempre estoy dispuesto a ofrecer lo mejor de mí, ya sea en la carretera o en la creación de soluciones digitales. ¡Gracias por acompañarme en este viaje! <br /> <br />
                </span>
            </div>
    </section>
</>
)
}

export default About