
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                hello : "hello !",
                welcome:" Welcome on board !",
                welcomeParagraph: "It is a pleasure to have you as passengers on this journey. My priority is to offer you a comfortable, safe and reliable service so that you reach your destination in the best possible way. Whether you are traveling for work, an important date, or simply exploring the city, I am here to make sure your experience is enjoyable. Feel free to relax, enjoy the ride and trust that you are in good hands.",
                thanks: "Thank you for choosing to travel with me. Let's enjoy the journey together!",
                driver: "Your driver"
            }
        },
        es:{
            translation:{
                hello : "hola !",
                welcome:"Bienvenido a ordo !",
                welcomeParagraph: "Es un placer tenerlos como pasajeros en este viaje. Mi prioridad es ofrecerles un servicio cómodo, seguro y confiable para que lleguen a su destino de la mejor manera posible. Ya sea que estén viajando por trabajo, una cita importante, o simplemente explorando la ciudad, estoy aquí para asegurarme de que su experiencia sea placentera. Siéntanse libres de relajarse, disfrutar del trayecto y confiar en que están en buenas manos. ",
                thanks: "Gracias por elegir viajar conmigo. ¡Vamos a drisfrutar el camino juntos!",
                driver: "Tu conductor"
            }
        }
    }
});

export default i18n;