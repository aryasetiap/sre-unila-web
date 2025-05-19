import { useState } from "react";
import { cn } from "@/lib/utils"; // pastikan alias @ sudah dikonfigurasi

export default function CustomToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={cn(
        "relative w-20 h-8 rounded-full flex items-center px-1 transition-colors duration-300",
        active ? "bg-emerald-600" : "bg-white"
      )}
    >
      {/* Logo + Text */}
      <div
        className={cn(
          "absolute flex items-center gap-1 w-auto h-6 px-1 rounded-full transition-all duration-300 text-white text-xs font-medium",
          active ? "left-1" : "right-1"
        )}
      >
        <img
          src={active ? '/assets/esf-logo-mono.png' : '/assets/esf-logo.png'}
          alt="icon"
          className="w-4 h-4"
        />
        <span className={active ? "text-white" : "text-emerald-600"}>ESF</span>
      </div>

      {/* Bulatan putih */}
      <div
        className={cn(
          "w-6 h-6 rounded-full  transition-all duration-300",
          active ? "bg-white translate-x-12" : "bg-gray-300 translate-x-0"
        )}
      />
    </button>
  );
}
