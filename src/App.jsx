import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
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

    const projects = [
        {
            title: t("projects.weather_app.title"),
            description: t("projects.weather_app.description"),
            url: "https://weather-flax-omega.vercel.app/",
            icon: "🌤️",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: t("projects.currency_converter.title"),
            description: t("projects.currency_converter.description"),
            url: "https://currency-smoky.vercel.app/",
            icon: "💱",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: t("projects.to_do_list.title"),
            description: t("projects.to_do_list.description"),
            url: "https://to-do-list-tau-swart.vercel.app/",
            icon: "✓",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: t("projects.expense_tracker.title"),
            description: t("projects.expense_tracker.description"),
            url: "https://expense-tracker-phi-smoky.vercel.app/",
            icon: "💰",
            color: "from-orange-500 to-red-500"
        },
        {
            title: t("projects.mini_shop.title"),
            description: t("projects.mini_shop.description"),
            url: "https://mini-shop-two-pi.vercel.app/",
            icon: "🛍️",
            color: "from-rose-500 to-pink-500"
        }
    ];

    const skills = [
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: javascript },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "NPM", icon: npm },
        { name: "React", icon: react },
        { name: "Vite", icon: Vitejs },
        { name: "Git", icon: git },
        { name: "Figma", icon: figma }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex flex-col items-center justify-center px-6 py-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-20 -left-20"
                    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-20 -right-20"
                    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="w-full flex justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mt-4 mb-4 z-10 relative">
                <LanguageSwitcher />
            </div>

            {/* Hero Section */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-6 gap-16 mb-1 md:mb-2 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="md:w-1/2 text-center ml-0" variants={itemVariants}>
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t("welcome")}
                    </motion.h1>
                    <motion.p
                        className="text-gray-300 mt-3 text-lg"
                        variants={itemVariants}
                    >
                        {t("description")}
                    </motion.p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <motion.div
                        className="mask mask-squircle w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 border-gradient-to-r from-pink-500 to-blue-500"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={my_photo} alt="My Photo" className="object-contain" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Navigation Tabs */}
            <motion.nav
                className="flex justify-center gap-4 mt-6 mb-6 text-lg w-full max-w-4xl px-4 sm:px-0 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {["portfolio", "about", "contact"].map((tab) => (
                    <motion.button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all relative overflow-hidden ${
                            activeTab === tab
                                ? "text-white shadow-lg"
                                : "text-gray-400 hover:text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {activeTab === tab && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 -z-10"
                                layoutId="activeTab"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {t(tab)}
                    </motion.button>
                ))}
            </motion.nav>

            {/* Main Content */}
            <motion.main className="w-full max-w-6xl px-6 flex flex-col items-center text-center relative z-10">
                <AnimatePresence mode="wait">
                    {activeTab === "portfolio" && (
                        <motion.section
                            key="portfolio"
                            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full items-stretch"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {projects.map((project, idx) => (
                                <motion.a
                                    key={idx}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-full"
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className={`bg-gradient-to-br ${project.color} p-6 rounded-xl shadow-xl h-full flex flex-col backdrop-blur-sm bg-opacity-10 border border-white/10 hover:border-white/30 transition-all`}
                                        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                                    >
                                        <motion.div
                                            className="text-5xl mb-4"
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            {project.icon}
                                        </motion.div>
                                        <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-200">{project.description}</p>
                                        <motion.div
                                            className="mt-4 text-sm text-blue-300 font-semibold"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            View Project →
                                        </motion.div>
                                    </motion.div>
                                </motion.a>
                            ))}
                        </motion.section>
                    )}

                    {activeTab === "about" && (
                        <motion.section
                            key="about"
                            className="text-center p-6 h-full w-full"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <motion.h3
                                className="text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
                                variants={itemVariants}
                            >
                                {t("about_me.title")}
                            </motion.h3>
                            <motion.p className="text-gray-300 mt-3 text-lg" variants={itemVariants}>
                                {t("about_me.description")}
                            </motion.p>
                            <motion.h3
                                className="mt-8 text-4xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
                                variants={itemVariants}
                            >
                                {t("skills")}
                            </motion.h3>
                            <motion.div
                                className="flex flex-wrap justify-center gap-8 mt-8"
                                variants={containerVariants}
                            >
                                {skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex flex-col items-center"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <motion.div
                                            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-3 flex items-center justify-center border border-blue-500/30 hover:border-blue-500/60 transition-all"
                                            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                                        >
                                            <img className="w-12 h-12 sm:w-16 sm:h-16" src={skill.icon} alt={skill.name} />
                                        </motion.div>
                                        <p className="text-sm text-gray-400 mt-2">{skill.name}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.section>
                    )}

                    {activeTab === "contact" && (
                        <motion.section
                            key="contact"
                            className="text-center p-6 w-full"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <motion.h3
                                className="text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
                                variants={itemVariants}
                            >
                                {t("contact")}
                            </motion.h3>
                            <motion.div variants={itemVariants}>
                                <ContactLinks />
                            </motion.div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </motion.main>
        </div>
    );
}

export default App;