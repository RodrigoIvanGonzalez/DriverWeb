import welcomeImage from '../assets/Welcome-img.jpg'

const Welcome = ()=> {

    return (
        <>
            <section className='flex relative bg-cover bg-no-repeat' id='welcome'>
                
                    <div className="z-10">
                        <h1 className=" text-slate-400 text-2xl m-4 py-4" style={{ textShadow: '0px 0px 50px rgba(0, 0, 0, 1)' }}>
                            Bienvenid<span className='text-xl font-semibold'>@</span> a bordo!
                        </h1>
                        <p className=" text-slate-400 text-sm m-4 drop-shadow-2xl tracking-tighter font italic f" style={{ textShadow: '0px 0px 50px rgba(0, 0, 0, 4)' }} >Es un placer tenerlos como pasajeros en este viaje. Mi prioridad es ofrecerles un servicio cómodo, seguro y confiable para que lleguen a su destino de la mejor manera posible. Ya sea que estén viajando por trabajo, una cita importante, o simplemente explorando la ciudad, estoy aquí para asegurarme de que su experiencia sea placentera. Siéntanse libres de relajarse, disfrutar del trayecto y confiar en que están en buenas manos. <br />Gracias por elegir viajar conmigo, ¡vamos a disfrutar del camino juntos! <br /><br />Tu conductor.
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

