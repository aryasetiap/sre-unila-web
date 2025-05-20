import { NavLink } from "react-router-dom";
import Switch from "../sre/SwitchESF";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 0);
      setIsVisible(scrollTop < lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      {/* Navbar akan tersembunyi saat menu dibuka */}
      {!isOpen && (
        <motion.nav
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className={`fixed z-50 top-0 left-0 w-full text-white py-6 px-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
            } ${hasScrolled ? "bg-[#0F926C] shadow-md rounded-b-3xl" : "bg-transparent"}`}
        >
          <div className="flex justify-between items-center">
            <img src="/assets/sre-logo.png" alt="SRE Logo" className="h-10" />
            <ul className="hidden lg:flex text-white font-medium">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-8 py-2 rounded-4xl transition duration-300 ${isActive ? "bg-white text-[#0F926C]" : "text-white"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <Switch />
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </motion.nav>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop dengan efek blur */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              style={{ backdropFilter: "blur(10px)" }}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-72 min-h-screen bg-[#0F926C] z-50 shadow-lg flex flex-col p-6 rounded-l-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <motion.img
                  src="/assets/sre-logo.png"
                  alt="SRE Logo"
                  className="h-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Tombol Close */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Menu navigasi dalam sidebar */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                className="flex flex-col space-y-4 font-medium"
              >
                {navLinks.map(({ path, label }) => (
                  <motion.div
                    key={path}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-2xl transition duration-300 ${isActive ? "bg-white text-[#0F926C]" : "text-white"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {/* Switch dalam sidebar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4"
              >
                <Switch />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
