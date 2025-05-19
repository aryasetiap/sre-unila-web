import { NavLink } from "react-router-dom";
import Switch from "./SwitchESF";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/activities", label: "Activities" },
    { path: "/staff", label: "Staff" },
    { path: "/articles", label: "Articles" },
    { path: "/merchandise", label: "Merchandise" },
  ];

  // Detect scroll direction and background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setHasScrolled(scrollTop > 0); // Jika scroll > 0, ubah background

      if (scrollTop > lastScrollTop) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full text-white py-6 px-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "bg-[#0F926C] shadow-md rounded-b-3xl" : "bg-transparent"}`}
    >
      {/* Top Navbar */}
      <div className="flex justify-between items-center">
        <img src="/assets/sre-logo.png" alt="SRE Logo" className="h-10" />
        {/* Desktop Nav */}
        <ul className="hidden lg:flex text-white font-medium">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-8 py-2 rounded-4xl transition duration-300 ${isActive ? "bg-white text-[#0F926C]" : "text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Switch */}
        <div className="hidden lg:block">
          <Switch />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-transparent backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-72 min-h-screen bg-[#0F926C] z-50 shadow-lg flex flex-col p-6 rounded-l-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >

              <div className="flex justify-between items-center mb-6">
                <img src="/assets/sre-logo.png" alt="SRE Logo" className="h-8" />
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-4 font-medium">
                {navLinks.map(({ path, label }) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-2xl transition duration-300 ${isActive ? "bg-white text-[#0F926C]" : "text-white"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <div className="pt-4">
                  <Switch />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
