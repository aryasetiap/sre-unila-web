import { NavLink } from "react-router-dom";
// import Logo from "/assets/sre-logo.png";
import Switch from "./SwitchESF";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-between items-center py-8 mb-[20vh]">
      <img src='/assets/sre-logo.png' alt="SRE Logo" className="h-10" />
      <ul className="flex text-white font-medium">
        {[
          "/",
          "/about",
          "/activities",
          "/staff",
          "/articles",
          "/merchandise",
        ].map((path) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `px-8 py-2 rounded-4xl transition duration-300 ${isActive ? "bg-[#0F926C] text-white" : "text-white"
                }`
              }
            >
              {path === "/"
                ? "Home"
                : path.replace("/", "").charAt(0).toUpperCase() +
                path.replace("/", "").slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch></Switch>
    </nav>
  );
};

export default Navbar;
