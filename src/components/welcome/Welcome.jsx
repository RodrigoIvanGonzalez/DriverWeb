import React from 'react'
import './welcome.css';

const Welcome = () => {
    return (
    <section className="welcome container" id='welcome'>

        <div className="welcome__content">

        <div className="welcome__img"></div>

        <h2 className="welcome__title ">Bienvenid@ a Bordo!</h2>
        <span className="welcome__subtitle">
        Es un placer tenerlos como pasajeros en este viaje. Mi prioridad es ofrecerles un servicio cómodo, seguro y confiable para que lleguen a su destino de la mejor manera posible. Ya sea que estén viajando por trabajo, una cita importante, o simplemente explorando la ciudad, estoy aquí para asegurarme de que su experiencia sea placentera. Siéntanse libres de relajarse, disfrutar del trayecto y confiar en que están en buenas manos. <br />Gracias por elegir viajar conmigo, ¡vamos a disfrutar del camino juntos! <br /><br />Tu conductor.
        </span>
        </div>
        
    </section>
)
}

export default Welcome