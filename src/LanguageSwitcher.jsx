import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", flag: "/Flag_of_the_United_States.svg" },
        { code: "ru", name: "Русский", flag: "/Flag_of_Russia.svg" },
        { code: "sr", name: "Srpski", flag: "/Flag_of_Serbia.svg" },
    ];

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: { duration: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.05 }
        })
    };

    return (
        <div className="relative">
            <motion.button
                onClick={toggleDropdown}
                className="min-w-[80px] flex items-center justify-center px-4 py-2 rounded-lg transition-all border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.img
                    src={languages.find(lang => lang.code === i18n.language)?.flag || "/Flag_of_the_United_States.svg"}
                    alt={i18n.language}
                    width="40"
                    height="40"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-md"
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-full right-0 mt-2 w-40 bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl rounded-lg border border-blue-500/30 overflow-hidden z-50"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ul className="py-2">
                            {languages.map(({ code, name, flag }, i) => (
                                <motion.li
                                    key={code}
                                    className="flex items-center px-4 py-3 cursor-pointer hover:bg-blue-500/20 transition-colors"
                                    onClick={() => changeLanguage(code)}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i}
                                    whileHover={{ x: 4 }}
                                >
                                    <motion.img
                                        src={flag}
                                        alt={name}
                                        width="30"
                                        height="30"
                                        className="mr-3 rounded-sm"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                    />
                                    <span className="text-sm font-medium">{name}</span>
                                    {code === i18n.language && (
                                        <motion.span
                                            className="ml-auto text-blue-400"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            ✓
                                        </motion.span>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
