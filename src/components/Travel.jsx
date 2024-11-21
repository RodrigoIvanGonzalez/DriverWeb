import { useState } from 'react';
import julio from '../assets/9dejulio_light_blur.jpg'
import { useTranslation } from 'react-i18next';

const Travel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 8);
    };
    const totalSlides = 8;
    const angle = 360 / totalSlides;
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 8) % 8);
    };
    const { t } = useTranslation()
    return (
        <section className="p-4  w-full h-[400px] " style={{backgroundImage: `url(${julio})`}} id='travel'>
            <div className=" relative flex items-center justify-center">

                <div
                    className="absolute z-0 top-6 w-[50%] h-[270px] transition-transform duration-700"
                    style={{
                        transform: `rotateY(-${activeIndex * angle}deg)`,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    
                    <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${0 * angle}deg) translateZ(200px)`,
                                opacity: 0 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                <h1 className=" relative text-2xl font-bold text-center "></h1>
                                <p className="text-gray-600 text-center p-4">{t('reco1')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${1 * angle}deg) translateZ(200px)`,
                                opacity: 1 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco2')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${2 * angle}deg) translateZ(200px)`,
                                opacity: 2 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco3')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${3 * angle}deg) translateZ(200px)`,
                                opacity: 3 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco4')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${4 * angle}deg) translateZ(200px)`,
                                opacity: 4 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco5')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${5 * angle}deg) translateZ(200px)`,
                                opacity: 5 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco6')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${6 * angle}deg) translateZ(200px)`,
                                opacity: 6 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco7')}</p>
                            </div>
                        </div>

                        <div
                            className=" absolute w-full h-full flex items-center justify-center text-center bg-cardGradient shadow-lg rounded-lg"
                            style={{
                                transform: `rotateY(${7 * angle}deg) translateZ(200px)`,
                                opacity: 7 === activeIndex ? 1 : 0.05,
                            }}
                        >
                            <div>
                                
                                <p className="text-gray-600 text-center p-4">{t('reco8')}</p>
                            </div>
                        </div>



                </div>
                <button onClick={prevSlide} className="prev">
                    <div className="bg-white rounded-[100%] h-[40px]  "><i className="uil uil-arrow-left"></i></div></button>
                <button onClick={nextSlide} className="next">
                    <div className="bg-white rounded-[100%]  h-[40px] "><i className="uil uil-arrow-right"></i></div></button>
            </div>
        </section>
    );
};

export default Travel;