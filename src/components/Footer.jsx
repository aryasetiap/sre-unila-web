import {
    Mail,
    Phone,
    Instagram,
    Facebook,
    Linkedin
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#0FB484] to-[#0F926C] text-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                {/* Kiri: Logo dan Nama */}
                <a href="/" className="block">
                    <img src="/assets/sre-logo-footer.png" alt="SRE Logo" className="h-16" />
                </a>

                {/* Kanan: Kontak */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm">
                    <a
                        href="mailto:sre.unila@gmail.com?subject=Halo%20SRE%20Unila&body=Halo%20tim%20SRE%20Unila%2C%20saya%20ingin%20bertanya%20mengenai..."
                        className="flex items-center gap-3 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <Mail className="w-4 h-4 text-black" />
                        </div>
                        <span>sre.unila@gmail.com</span>
                    </a>


                    <a
                        href="https://www.instagram.com/sre.unila"
                        className="flex items-center gap-3 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <Instagram className="w-4 h-4 text-black" />
                        </div>
                        <span>@sre.unila</span>
                    </a>

                    <a
                        href="https://wa.me/6285840148352"
                        className="flex items-center gap-3 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <Phone className="w-4 h-4 text-black" />
                        </div>
                        <span>(+62) 858 4014 8352</span>
                    </a>

                    <a
                        href="https://www.facebook.com/sreunila"
                        className="flex items-center gap-3 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <Facebook className="w-4 h-4 text-black" />
                        </div>
                        <span>SRE Unila</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/sre-university-of-lampung"
                        className="flex items-center gap-3 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <Linkedin className="w-4 h-4 text-black" />
                        </div>
                        <span>SRE University of Lampung</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
