import React from 'react'
import './travel.css'

const Travel = () => {
return (
    <section className="travel container" id='travel'>

        <hr />

        <h2 className="travel__subtitle">Recomendaciones</h2> 
        
        <span>Para una mejor experiencia en este viaje a continuacion les dejo una serie de recomendaciones:</span>

        <ul className="travel__list">
            <li>Para su mayor seguridad, use los cinturones de seguridad</li>
            <li>Está en llamada, o simplemente no quiere ruidos dentro del vehiculo, puede indicarmelo y con gusto quito la radio para un mayor confort en su viaje</li>
            <li>Si tiene demasiado frio/calor sin ningun problema puede pedir el uso de AC</li>
            <li>Antes de efectuar algun cambio de ruta en la app, por favor, indicar mi disponibilidad</li>
            <li>Cerrar las puertas despacio</li>
            <li>En lo posible evitar tomar y comer dentro del vehiculo</li>
            <li>Por cuestiones de limpieza, dentro del vehiiculo esta prohibido fumar</li>
            <li>Si mi servicio cumplio sus espectativas, se agradece mucho la calificacion 5 estrellas</li>

        </ul>

    </section>
)
}

export default Travel