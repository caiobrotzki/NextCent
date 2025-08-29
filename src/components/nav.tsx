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
      <div className="flex justify-between items-center py-4 px-6 sm:px-[150px]">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Nextcent logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-[24px] sm:text-[30px] font-bold">Nextcent</h1>
        </div>

        {/* Menu - desktop */}
        <ul className="hidden md:flex space-x-10">
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
        <div className="hidden md:flex items-center space-x-6">
          <p className="text-[#4CAF4F] cursor-pointer">Login</p>
          <Button
            title="Sign up"
            className="bg-[#4CAF4F] text-white w-[80px] h-[30px] rounded-[5px]"
          />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-[#4CAF4F] transition-colors"
                onClick={() => setIsOpen(false)} // fecha o menu ao clicar
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
            <p className="text-[#4CAF4F] cursor-pointer">Login</p>
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
