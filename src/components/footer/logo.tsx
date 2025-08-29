import Logo1 from "../../assets/Icon.svg";

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={Logo1}
        alt="Logo"
        className="w-8 h-8 sm:w-12 sm:h-12"
      />
      <h1 className="text-white font-bold text-2xl sm:text-3xl">
        Nextcent
      </h1>
    </div>
  );
}

export default Logo;
