import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Instagram,
    Facebook,
    Linkedin
} from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#0FB484] to-[#0F926C] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Kiri: Logo dan Nama */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="/assets/sre-logo-footer.png" alt="SRE Logo" className="h-16 sm:h-20 md:h-24" />
                </motion.a>

                {/* Kanan: Kontak */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 text-lg sm:text-xl md:text-2xl"
                >
                    {[
                        { href: "mailto:sre.unila@gmail.com", icon: Mail, text: "sre.unila@gmail.com" },
                        { href: "https://www.instagram.com/sre.unila", icon: Instagram, text: "@sre.unila" },
                        { href: "https://wa.me/6285840148352", icon: Phone, text: "(+62) 858 4014 8352" },
                        { href: "https://www.facebook.com/sreunila", icon: Facebook, text: "SRE Unila" },
                        { href: "https://www.linkedin.com/company/society-of-renewable-energy-unila/", icon: Linkedin, text: "SRE University of Lampung" }
                    ].map(({ href, icon: Icon, text }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-3 hover:underline"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center"
                            >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
                            </motion.div>
                            <span>{text}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.footer>
    );
}
