import { useState } from "react";
import { useTranslation } from "react-i18next";

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

    return (
        <div>
            <button onClick={toggleDropdown} className="min-w-[80px] flex items-center px-4 py-2 rounded-lg transition">
                <img src={languages.find(lang => lang.code === i18n.language)?.flag || "/Flag_of_the_United_States.svg"}
                     alt={i18n.language} width="40" height="40" />
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-32 bg-black shadow-lg rounded-md">
                    <ul className="py-2">
                        {languages.map(({ code, name, flag }) => (
                            <li key={code} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
                                onClick={() => changeLanguage(code)}>
                                <img src={flag} alt={name} width="30" height="30" className="mr-2" />
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
