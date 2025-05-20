import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"; // Pastikan alias @ sudah dikonfigurasi

export default function CustomToggleButton() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setActive(!active);
    navigate(active ? "/esf" : "/");
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "shadow-md relative w-20 h-8 rounded-full flex items-center px-1 transition-colors duration-300",
        active ? "bg-white" : "bg-[#4CB748]"
      )}
    >
      {/* Bulatan putih */}
      <div
        className={cn(
          "w-6 h-6 rounded-full transition-all duration-300",
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
          src={active ? "/assets/srg-logo.png" : "/assets/sre-logo.png"}
          alt="icon"
          className="h-4"
        />
      </div>
    </button>
  );
}
