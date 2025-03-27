import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import ContactLinks from "./ContactLinks.jsx";

const my_photo = "/my_photo.png";
const css = "/css.svg";
const javascript = "/javascript.svg";
const tailwindcss = "/tailwindcss.svg";
const npm = "/npm.svg";
const react = "/react.svg";
const Vitejs = "/Vitejs.svg";
const git = "/git.svg";
const figma = "/figma.svg";

function App() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("portfolio");

    return (
        <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-10">
            <div className="w-full flex justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-4 mb-4 z-10 relative">
                <LanguageSwitcher />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-6 gap-16 mb-6 md:mb-12">
            <div className="md:w-1/2 text-center ml-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        {t("welcome")}
                    </h1>
                    <p className="text-gray-300 mt-3 text-lg">{t("description")}</p>
                </div>

                <div>
                    <div  className="mask mask-squircle w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
                        <img src={my_photo} alt="My Photo" className="object-contain"/>
                    </div>
                </div>

            </div>



            <nav className="flex justify-center gap-6 mt-6 mb-8 border-b pb-2 text-lg w-full max-w-4xl px-4 sm:px-0">
                {["portfolio", "about", "contact"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 transition-all rounded-lg ${
                            activeTab === tab ? "bg-blue-500 text-white shadow-md" : "text-gray-400 hover:text-white hover:bg-gray-700"
                        }`}
                    >
                        {t(tab)}
                    </button>
                ))}
            </nav>

            <main className="w-full max-w-6xl px-6 flex flex-col items-center text-center">
                {activeTab === "portfolio" && (
                    <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch">
                        <a href="https://weather-flax-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                                <h3 className="text-2xl font-semibold text-blue-400">{t("projects.weather_app.title")}</h3>
                                <p className="text-gray-300">{t("projects.weather_app.description")}</p>
                            </div>
                        </a>
                        <a href="https://currency-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                                <h3 className="text-2xl font-semibold text-blue-400">{t("projects.currency_converter.title")}</h3>
                                <p className="text-gray-300">{t("projects.currency_converter.description")}</p>
                            </div>
                        </a>
                        <a href="https://to-do-list-tau-swart.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                                <h3 className="text-2xl font-semibold text-blue-400">{t("projects.to_do_list.title")}</h3>
                                <p className="text-gray-300">{t("projects.to_do_list.description")}</p>
                            </div>
                        </a>
                        <a href="https://expense-tracker-phi-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" className="h-full">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all h-full flex flex-col">
                                <h3 className="text-2xl font-semibold text-blue-400">{t("projects.expense_tracker.title")}</h3>
                                <p className="text-gray-300">{t("projects.expense_tracker.description")}</p>
                            </div>
                        </a>
                    </section>
                )}

                {activeTab === "about" && (
                    <section className="text-center p-6 h-full w-full">
                        <h3 className="text-3xl font-semibold text-blue-400">{t("about_me.title")}</h3>
                        <p className="text-gray-300 mt-3 text-lg">{t("about_me.description")}</p>
                        <h3 className="mt-8 text-4xl font-semibold text-blue-400">{t("skills")}</h3>
                        <div className="flex flex-wrap justify-center gap-6 bg-black mt-5">
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={css} alt="CSS icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={javascript} alt="JavaScript icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={tailwindcss} alt="Tailwind icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={npm} alt="npm icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={react} alt="React icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={Vitejs} alt="Vite icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={git} alt="Git icon" />
                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={figma} alt="Figma icon" />
                        </div>
                    </section>
                )}

                {activeTab === "contact" && (
                    <section className="text-center p-6 w-full">
                        <h3 className="text-3xl font-semibold text-blue-400">{t("contact")}</h3>
                        <ContactLinks />
                    </section>
                )}

            </main>
        </div>
    );
}

export default App;