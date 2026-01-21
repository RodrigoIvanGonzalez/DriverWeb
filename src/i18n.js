
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
                hello : "HELLO !",
                welcome:" Welcome on board !",
                welcomeIcon: "Welcome",
                aboutIcon: "About Me",
                travelIcon: "Your Travel",
                contactIcon: 'Contact',
                welcomeParagraph: "It is a pleasure to have you as passengers on this journey. My priority is to offer you a comfortable, safe and reliable service so that you reach your destination in the best possible way. Whether you are traveling for work, an important date, or simply exploring the city, I am here to make sure your experience is enjoyable. Feel free to relax, enjoy the ride and trust that you are in good hands.",
                thanks: "Thank you for choosing to travel with me. Let's enjoy the journey together!",
                driver: "Your driver",
                aboutName: "Name: Rodrigo",
                aboutLastName:"Last name: Gonzalez",
                aboutCar:"Car: Toyota Yaris",
                aboutPlate:"Plate: AG517BU",
                aboutText: "Hi! I’m 29 years old and have been working as a driver for two years, always focused on providing safe and reliable service to my passengers. Recently, I graduated as a Full Stack Web Developer, which has opened up new opportunities and prepared me to take an exciting leap into the tech world. I’m currently looking for opportunities to apply what I’ve learned and keep growing in this amazing digital field. I always give my best, whether behind the wheel or creating innovative solutions. Thanks for being part of this journey.",
                aboutTitle: "About me",
                contact:"Get in touch",
                contactTalk: "Let's talk",
                contactWriteMe: 'Write me',
                contactWriteIdea: "Write me your idea",
                name: "Name",
                proyect: "Proyect",
                writeName:"Write your name",
                writeMail: "Write your E-mail",
                dropIdea:"Drop your idea",
                sendMsg: "Send Message",
                reco1: "For your safety, please wear your seatbelt.",
                reco2:"If the radio bothers you, just let me know. Your comfort is my priority.",
                reco3:"If you'd like, feel free to ask for the AC to be turned on.",
                reco4:"Before making any route changes in the app, please check with me first.",
                reco5:"Please close the doors gently.",
                reco6:"Try to avoid eating or drinking inside the car",
                reco7:"Smoking is not allowed inside the vehicle",
                reco8:"If my service met your expectations, a 5-star rating would be greatly appreciated",
            }
        },
        es:{
            translation:{
                hello : "Bienvenido !",
                welcome:"Bienvenido a bordo !",
                welcomeIcon: "Bienvenido",
                aboutIcon: "Sobre Mi",
                travelIcon: "Su viaje",
                contactIcon: 'Contacto',
                welcomeParagraph: "Es un placer tenerlos como pasajeros en este viaje. Mi prioridad es ofrecerles un servicio cómodo, seguro y confiable para que lleguen a su destino de la mejor manera posible. Ya sea que estén viajando por trabajo, una cita importante, o simplemente explorando la ciudad, estoy aquí para asegurarme de que su experiencia sea placentera. Siéntanse libres de relajarse, disfrutar del trayecto y confiar en que están en buenas manos. ",
                thanks: "Gracias por elegir viajar conmigo. ¡Vamos a drisfrutar el camino juntos!",
                driver: "Tu conductor",
                aboutName: "Nombre: Rodrigo",
                aboutLastName:"Apellido: Gonzalez",
                aboutCar:"Auto: Toyota Yaris",
                aboutPlate:"Patente: AG517BU",
                aboutText: 'Hola, tengo 29 años y llevo dos años trabajando como conductor, siempre enfocado en brindar un servicio seguro y de confianza a mis pasajeros. Recientemente me gradué como Full Stack Web Developer, lo que me ha abierto la puerta a nuevos horizontes y me tiene listo para dar un gran salto al mundo de la tecnología. Ahora estoy buscando oportunidades para aplicar lo que he aprendido y seguir creciendo en este increíble mundo digital. Soy de los que siempre pone lo mejor de sí, ya sea al volante o desarrollando soluciones creativas. ¡Gracias por ser parte de esta aventura!',
                aboutTitle: "Sobre mi",
                contact:"Ponte en contacto",
                contactTalk: "Hablemos",
                contactWriteMe: 'Escribeme',
                contactWriteIdea: "Escribeme tu idea",
                name: "Nombre",
                proyect: "Proyecto",
                writeName:"Escriba su nombre",
                writeMail: "Escriba su E-mail",
                dropIdea:"Escriba su idea",
                sendMsg: "Enviar Mensaje",
                reco1: "Por seguridad, use los cinturones de seguridad",
                reco2:"Mi prioridad es su comfort cualquier molestia con la radio (volumen, música o demás) avíseme",
                reco3:"Si asi lo desea, puede pedir el uso de AC",
                reco4:"Antes de efectuar algún cambio de ruta en la app, por favor, consulte mi disponibilidad",
                reco5:"Cerrar las puertas despacio por favor",
                reco6:"Evitar tomar y comer dentro del vehículo",
                reco7:"Está prohibido fumar dentro del vehiculo",
                reco8:"Si mi servicio cumplió sus expectativas, se agradece mucho la calificación 5 estrellas",
            }
        }
    }
});

export default i18n;