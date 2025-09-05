import Logo1 from "../../assets/Icon.svg";

function Logo() {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <img
        src={Logo1}
        alt="Nextcent Logo"
        className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300"
      />
      <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl transition-all duration-300">
        Nextcent
      </h1>
    </div>
  );
}

export default Logo;
