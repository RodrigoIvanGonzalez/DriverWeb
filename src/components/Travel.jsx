import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const Travel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slides = [
    'reco1', 'reco2', 'reco3', 'reco4',
    'reco5', 'reco6', 'reco7', 'reco8'
  ];

  const totalSlides = slides.length;
  const angle = 360 / totalSlides;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.to(carouselRef.current, {
      rotateY: -activeIndex * angle,
      duration: 1,
      ease: 'power3.out'
    });
  }, [activeIndex, angle]);

  return (
        <section
      id="travel"
      className="w-full py-20 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-brand-dark to-brand-dark2"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 p-6 bg-gradient-to-r from-brand-primary to-brand-primaryLight bg-clip-text text-transparent">
        Recomendaciones para tu viaje
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative w-full max-w-full h-[360px] flex items-center justify-center perspective-[1200px] overflow-hidden">
        <div
          ref={carouselRef}
          className="relative w-[60%] h-[280px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {slides.map((key, index) => (
            <div
              key={key}
              className=" absolute h-full flex items-center justify-center text-center rounded-3xl shadow-2xl px-8"
              style={{
                background:
                  index === activeIndex
                    ? 'linear-gradient(160deg, #0F2747, #0A1A2F)'
                    : 'linear-gradient(160deg, rgba(15,39,71,0.6), rgba(10,26,47,0.6))',
                border: '1px solid rgba(77,163,255,0.25)',
                transform: `rotateY(${index * angle}deg) translateZ(260px)`,
                opacity: index === activeIndex ? 1 : 0.18,
                filter: index === activeIndex ? 'none' : 'blur(1px)',
              }}
            >
              <p className="text-brand-textLight text-lg leading-relaxed max-w-md">
                {t(key)}
              </p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 w-12 h-12 rounded-full flex items-center justify-center bg-brand-dark2 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-brand-dark transition-all shadow-lg"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 w-12 h-12 rounded-full flex items-center justify-center bg-brand-dark2 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-brand-dark transition-all shadow-lg"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-3 mt-8">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === activeIndex
                ? 'bg-brand-primary scale-125'
                : 'bg-brand-primary/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Travel;
