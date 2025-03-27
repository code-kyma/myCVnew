const ContactLinks = () => {
    const mail = "/mail.svg";
    const linkedin = "/linkedin.svg";
    const telegram = "/telegram.svg";

    return (
        <div className="flex justify-center items-center gap-6 p-4">
            <a href="mailto:kymbat.almaskyzy@outlook.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10" src={mail} alt="Mail icon" />
            </a>
            <a href="https://www.linkedin.com/in/kymbat-almaskyzy/" target="_blank" rel="noopener noreferrer">
                <img className="w-12" src={linkedin} alt="LinkedIn icon" />
            </a>
            <a href="https://t.me/kymbat_k" target="_blank" rel="noopener noreferrer">
                <img className="w-10" src={telegram} alt="Telegram icon" />
            </a>
        </div>
    );
};

export default ContactLinks;
