import { useState } from "react";
import { cn } from "@/lib/utils"; // pastikan alias @ sudah dikonfigurasi

export default function CustomToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={cn(
        "shadow-md relative w-20 h-8 rounded-full flex items-center px-1 transition-colors duration-300",
        active ? "bg-white" : "bg-emerald-600"
      )}
    >

      {/* Bulatan putih */}
      <div
        className={cn(
          "w-6 h-6 rounded-full  transition-all duration-300",
          active ? "bg-gray-300 translate-x-0" : "bg-white translate-x-12"
        )}
      />

      {/* Logo + Text */}
      <div
        className={cn(
          "absolute flex items-center gap-1 w-auto h-6 px-1 rounded-full transition-all duration-300 text-white text-xs font-medium",
          active ? "right-1" : "left-1"
        )}
      >
        <img
          src={active ? '/assets/esf-logo.png' : '/assets/esf-logo-mono.png'}
          alt="icon"
          className="w-4 h-4"
        />
        <span className={active ? "text-emerald-600 font-bold" : "text-white font-bold"}>ESF</span>
      </div>


    </button >
  );
}
