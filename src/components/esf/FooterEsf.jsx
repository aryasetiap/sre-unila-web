import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/esf/bg-footer.png')" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:items-start items-center gap-8">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="/assets/esf/esf-logo.png"
                        alt="Environmental Sustainability Forum Logo"
                        className="h-12 sm:h-14 md:h-16"
                    />
                </motion.div>

                {/* Kontak */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg w-full max-w-2xl"
                >
                    {[
                        { href: "mailto:esforum.sreunila@gmail.com", icon: Mail, text: "esforum.sreunila@gmail.com" },
                        { href: "https://wa.me/085609631320", icon: Phone, text: "(+62) 856 0963 1320" },
                        { href: "https://wa.me/0895612178944", icon: Phone, text: "(+62) 895 6121 78944" },
                        { href: "https://www.instagram.com/esfindonesia", icon: Instagram, text: "@esfindonesia" }
                    ].map(({ href, icon: Icon, text }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-4 hover:underline"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
                            >
                                <Icon className="w-5 h-5 text-[#4CB748]" />
                            </motion.div>
                            <span>{text}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.footer>
    );
}
