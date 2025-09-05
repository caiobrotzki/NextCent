import { useState } from "react";
import Logo from "../assets/Icon.svg";
import Button from "./Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-4 sm:px-16 md:px-[150px]">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Nextcent logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Nextcent</h1>
        </div>

        {/* Menu - desktop */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 text-sm sm:text-base">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-[#4CAF4F] transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right side - Login and Button */}
        <div className="hidden md:flex items-center space-x-6 text-sm sm:text-base">
          <button
            onClick={() => alert("Login clicked")}
            className="text-[#4CAF4F] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] rounded"
          >
            Login
          </button>
          <Button
            title="Sign up"
            className="bg-[#4CAF4F] text-white w-[80px] h-[30px] rounded-[5px]"
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-6 shadow-md w-full">
          <ul className="flex flex-col space-y-4 text-base">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-[#4CAF4F] transition-colors"
                onClick={() => setIsOpen(false)} // fecha menu ao clicar
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6 border-t border-gray-200 pt-4">
            <button
              onClick={() => alert("Login clicked")}
              className="text-[#4CAF4F] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] rounded"
            >
              Login
            </button>
            <Button
              title="Sign up"
              className="bg-[#4CAF4F] text-white w-[80px] h-[30px] rounded-[5px]"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
