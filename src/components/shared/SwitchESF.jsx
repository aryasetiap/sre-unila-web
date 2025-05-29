import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// Switch universal untuk SRE & ESF
export default function CustomToggleButton() {
    const navigate = useNavigate();
    const location = useLocation();

    // Deteksi halaman aktif: true jika di /esf, false jika di /
    const isEsf = location.pathname.startsWith("/esf");
    const [active, setActive] = useState(isEsf);

    // Sync state jika user navigasi manual
    useEffect(() => {
        setActive(isEsf);
    }, [isEsf]);

    const handleToggle = () => {
        setActive((prev) => {
            setTimeout(() => {
                // Navigasi ke halaman sebaliknya
                navigate(prev ? "/" : "/esf");
            }, 700); // delay sesuai animasi
            return !prev;
        });
    };

    // Konfigurasi logo & label sesuai halaman
    const isSrePage = !isEsf;
    let logo, label, labelColor;

    if (isSrePage) {
        // Di halaman SRE
        logo = active ? "/assets/sre-logo-green.png" : "/assets/esf-logo-mono.png";
        label = active ? "" : "ESF";
        labelColor = active ? "text-emerald-600 font-bold" : "text-white font-bold";

        return (
            <button
                onClick={handleToggle}
                className={cn(
                    "shadow-md relative w-20 h-8 rounded-full flex items-center px-1 transition-colors duration-700",
                    active
                        ? isSrePage
                            ? "bg-white"
                            : "bg-white"
                        : isSrePage
                            ? "bg-emerald-600"
                            : "bg-emerald-600"
                )}
            >
                {/* Bulatan putih */}
                <div
                    className={cn(
                        "w-6 h-6 rounded-full transition-all duration-700",
                        active
                            ? isSrePage
                                ? "bg-gray-300 translate-x-0"
                                : "bg-gray-300 translate-x-12"
                            : isSrePage
                                ? "bg-white translate-x-12"
                                : "bg-white translate-x-0"
                    )}
                />

                {/* Logo + Text */}
                <div
                    className={cn(
                        "absolute flex items-center gap-1 w-auto h-6 px-1 rounded-full transition-all duration-700 text-xs font-medium",
                        active
                            ? isSrePage
                                ? "right-1"
                                : "left-1"
                            : isSrePage
                                ? "left-1"
                                : "right-1"
                    )}
                >
                    <img src={logo} alt="icon" className="h-4" />
                    {label && <span className={labelColor}>{label}</span>}
                </div>
            </button>
        )
    } else {
        // Di halaman ESF
        logo = active ? "/assets/sre-logo-green.png" : "/assets/esf-logo.png";
        label = active ? "" : "ESF"; // Tidak ada label di ESF (mengikuti contoh)
        labelColor = active ? "text-emerald-600 font-bold" : "text-white font-bold";;

        return (
            <button
                onClick={handleToggle}
                className={cn(
                    "shadow-md relative w-20 h-8 rounded-full flex items-center px-1 transition-colors duration-700",
                    active
                        ? isSrePage
                            ? "bg-white"
                            : "bg-white"
                        : isSrePage
                            ? "bg-emerald-600"
                            : "bg-emerald-600"
                )}
            >
                {/* Bulatan putih */}
                <div
                    className={cn(
                        "w-6 h-6 rounded-full transition-all duration-700",
                        active
                            ? isSrePage
                                ? "bg-gray-300 translate-x-12"
                                : "bg-gray-300 translate-x-0"
                            : isSrePage
                                ? "bg-white translate-x-0"
                                : "bg-white translate-x-12"

                    )}
                />

                {/* Logo + Text */}
                <div
                    className={cn(
                        "absolute flex items-center gap-1 w-auto h-6 px-1 rounded-full transition-all duration-700 text-xs font-medium",
                        active
                            ? isSrePage
                                ? "left-1"
                                : "right-1"
                            : isSrePage
                                ? "right-1"
                                : "left-1"
                    )}
                >
                    <img src={logo} alt="icon" className="h-4" />
                    {label && <span className={labelColor}>{label}</span>}
                </div>
            </button>
        );
    }
}