import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const { t } = useTranslation();


    // 🎬 GSAP animation
    useEffect(() => {
        if (!menuRef.current) return;

        if (menuOpen) {
            gsap.fromTo(
                menuRef.current,
                { y: 120, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        }
    }, [menuOpen]);

    return (
        <header className="fixed bottom-0 left-0 w-full z-50">
            {/* NAV BAR */}
            <nav className="flex items-center justify-between w-screen h-16 px-6 bg-brand-dark/95 border-t border-brand-primary/20">
                {/* LOGO */}
                <a href="#welcome" className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                    {t("hello")}
                </a>

                {/* MOBILE BUTTON */}
                <button
                    className="lg:hidden text-brand-textLight text-xl"
                    onClick={() => setMenuOpen(true)}
                >
                    <i className="uil uil-apps" />
                </button>
            </nav>

            {/* OVERLAY + MENU */}
            {menuOpen && (
                <div className="fixed inset-0 z-50">
                    {/* BACKDROP */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-md"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* MENU */}
                    <div
                        ref={menuRef}
                        className="absolute w-screen bottom-0 left-0 right-0 bg-brand-dark rounded-t-3xl px-6 py-8 shadow-2xl"
                    >
                        <ul className="grid grid-cols-2 gap-6 text-center text-brand-textLight">
                            <li>
                                <a href="#welcome" onClick={() => setMenuOpen(false)}>
                                    <i className="uil uil-estate block text-xl mb-1" />
                                    {t("welcomeIcon")}
                                </a>
                            </li>

                            <li>
                                <a href="#about" onClick={() => setMenuOpen(false)}>
                                    <i className="uil uil-user block text-xl mb-1" />
                                    {t("aboutIcon")}
                                </a>
                            </li>

                            <li>
                                <a href="#travel" onClick={() => setMenuOpen(false)}>
                                    <i className="uil uil-file-alt block text-xl mb-1" />
                                    {t("travelIcon")}
                                </a>
                            </li>

                            <li>
                                <a href="#contact" onClick={() => setMenuOpen(false)}>
                                    <i className="uil uil-briefcase-alt block text-xl mb-1" />
                                    {t("contactIcon")}
                                </a>
                            </li>


                            {/* LANG */}
                            <li className="flex justify-center gap-4 col-span-2">
                                <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                                <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                            </li>
                        </ul>

                        {/* CLOSE */}
                        <button
                            className="absolute top-4 right-6 text-2xl text-brand-textLight"
                            onClick={() => setMenuOpen(false)}
                        >
                            <i className="uil uil-times" />
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
