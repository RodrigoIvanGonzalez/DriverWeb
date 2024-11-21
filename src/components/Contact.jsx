import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t } = useTranslation()

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
        emailjs
        .sendForm('service_53wokld', 'template_wxzaerr', form.current, {
        publicKey: 'T_zjVRdXgoODEvCeW',
        })
        e.target.reset()
    };

    
    return (
        <section className="mb-24 mt-8" id="contact">
            <h2 className="text-[hsl(0, 0%, 20%)] text-2xl font-semibold m-4 dark:text-emerald-100"> {t('contact')} </h2>
            <span className="section__subtitle"></span>

            <div className="grid gap-x-12 justify-center pb-12">
                <div className="contact__content">
                    <h3 className="text-center  text-base font-medium mb-6 dark:text-emerald-100 ">{t('contactTalk')}</h3>

                    <div className="grid gap-y-4 grid-cols-[300px]  ">
                        <div className="dark:bg-gray-700 dark:shadow-green-glow border border-solid border-black/10 p4 rounded-xl text-center ">
                            <i className="bx bx-mail-send text-[2rem] mb-1 dark:text-emerald-100 "></i>

                            <h3 className="text-sm font-medium dark:text-emerald-100">Email</h3>
                            <span className="block text-sm mb-3 dark:text-emerald-100">r.ivann.gonzalezz@gmail.com</span>

                            <a href="" className="contact__button inline-flex dark:text-emerald-300 text-sm items-center justify-center gap-1  hover:translate-x-1 hover:transition-transform "> {t('contactWriteMe')} {" "}<i className="bx bx-right-arrow-alt contact__button-icon text-base  hover:translate-x-1 hover:transition-transform dark:text-emerald-300 "></i></a>
                        </div>

                        <div className="dark:bg-gray-700 dark:shadow-green-glow border border-solid border-black/10 p4 rounded-xl text-center ">
                            <i className="bx bxl-whatsapp text-3xl dark:text-emerald-100 mb-1"></i>

                            <h3 className="text-sm font-medium dark:text-emerald-100">Whatsapp</h3>
                            

                            <a href="https://wa.me/541140970295" className="contact__button inline-flex text-[hsl(0,0%,46%)] text-sm items-center justify-center gap-1 hover:translate-x-1 hover:transition-transform dark:text-emerald-300"> {t('contactWriteMe')}  {" "}<i className="bx bx-right-arrow-alt contact__button-icon hover:translate-x-1 hover:transition-transform dark:text-emerald-300 "></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className=" text-xl font-medium my-6 dark:text-emerald-400 " style={{ textShadow: '0 4px 15px rgba(82, 213, 177, 0.5)' }}>{t('contactWriteIdea')} </h3>

                    <form ref={form} onSubmit={sendEmail} className="w-full">
                        <div className="relative mb-8 h-16 ">
                            <label className="contact__form-tag rounded-lg dark:bg-gray-700" >{t('name')}</label>
                            <input type="text" name="name" className='contact__form-input dark:bg-gray-700 dark:shadow-green-glow' placeholder= {t('writeName')} />
                        </div>

                        <div className="relative mb-8 h-16">
                            <label className="contact__form-tag rounded-lg dark:bg-gray-700">E-mail</label>
                            <input type="email" name="email" className='contact__form-input dark:bg-gray-700 dark:shadow-green-glow' placeholder={t('writeMail')}/>
                        </div>

                        <div className=" relative mb-8 h-44">
                            <label className="contact__form-tag rounded-lg   dark:bg-gray-700">{t('proyect')}</label>
                            <textarea name="proyect" cols="30" rows="10" className='contact__form-input dark:bg-gray-700 dark:shadow-green-glow' placeholder={t('dropIdea')}></textarea>
                        </div>

                        <button className="rounded-lg py-2 px-5 text-base font-medium bg-[#1a1a1a] dark:shadow-green-glow text-emerald-300 m-auto cursor-pointer border flex">
                        {t('sendMsg')}
                            <svg
                className="button__icon "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                >
                <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="#fff"
                ></path>
                <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="#fff"
                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact