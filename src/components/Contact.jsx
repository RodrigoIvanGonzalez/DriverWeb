import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

export default function Contact() {
    const { t } = useTranslation();
    const formRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.querySelectorAll('[data-animate]'),
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: 'power3.out',
                stagger: 0.15,
            }
        );
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_53wokld', 'template_wxzaerr', formRef.current, {
            publicKey: 'T_zjVRdXgoODEvCeW',
        });
        e.target.reset();
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative w-full py-24 px-6 bg-gradient-to-b from-brand-dark to-brand-dark2 text-brand-textLight"
        >
            {/* Title */}
            <h2
                data-animate
                className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent"
            >
                {t('contact')}
            </h2>

            <p
                data-animate
                className="text-center max-w-xl mx-auto text-brand-textMuted mb-16"
            >
                {t('contactTalk')}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                {/* Contact Cards */}
                <div data-animate className="space-y-6">
                    <div className="rounded-3xl p-6 bg-brand-card border border-brand-primary/20 shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="text-3xl">📧</div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-sm text-brand-textMuted">r.ivann.gonzalezz@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl p-6 bg-brand-card border border-brand-primary/20 shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="text-3xl">💬</div>
                            <div>
                                <h3 className="font-semibold">WhatsApp</h3>
                                <a
                                    href="https://wa.me/541140970295"
                                    className="text-sm text-brand-accent hover:underline"
                                >
                                    {t('contactWriteMe')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    data-animate
                    className="rounded-3xl p-8 bg-brand-card border border-brand-primary/20 shadow-2xl"
                >
                    <h3 className="text-2xl font-bold mb-6 text-brand-primary">
                        {t('contactWriteIdea')}
                    </h3>

                    <div className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder={t('writeName')}
                            className="w-full px-4 py-3 rounded-xl bg-brand-input text-brand-textLight placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder={t('writeMail')}
                            className="w-full px-4 py-3 rounded-xl bg-brand-input text-brand-textLight placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />

                        <textarea
                            name="proyect"
                            rows={4}
                            placeholder={t('dropIdea')}
                            className="w-full px-4 py-3 rounded-xl bg-brand-input text-brand-textLight placeholder:text-brand-textMuted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-accent text-white hover:scale-[1.02] transition-transform"
                        >
                            {t('sendMsg')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}