import { motion } from "framer-motion";

const ContactLinks = () => {
    const mail = "/mail.svg";
    const linkedin = "/linkedin.svg";
    const telegram = "/telegram.svg";

    const contacts = [
        {
            name: "Email",
            url: "mailto:kymbat.almaskyzy@outlook.com",
            icon: mail,
            color: "from-red-500 to-pink-500"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/kymbat-almaskyzy/",
            icon: linkedin,
            color: "from-blue-600 to-blue-400"
        },
        {
            name: "Telegram",
            url: "https://t.me/bloomingkym",
            icon: telegram,
            color: "from-blue-500 to-cyan-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="flex justify-center items-center gap-8 p-8 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {contacts.map((contact, idx) => (
                <motion.a
                    key={idx}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                >
                    <motion.div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${contact.color} p-3 flex items-center justify-center border-2 border-white/20 shadow-lg`}
                        whileHover={{
                            boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                            borderColor: "rgba(255, 255, 255, 0.5)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img className="w-10 h-10" src={contact.icon} alt={contact.name} />
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        initial={{ opacity: 0, y: -10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                    >
                        {contact.name}
                    </motion.div>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default ContactLinks;
