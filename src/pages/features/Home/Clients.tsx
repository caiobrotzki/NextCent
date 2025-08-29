import Logo1 from "../../../assets/Logo 1.svg";
import Logo2 from "../../../assets/Logo 2.svg";
import Logo3 from "../../../assets/Logo 3.svg";
import Logo4 from "../../../assets/Logo 4.svg";
import Logo5 from "../../../assets/Logo 5.svg";
import Logo6 from "../../../assets/Logo 6.svg";
import Logo7 from "../../../assets/Logo 7.svg";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

function Client() {
  return (
    <div className="mt-[100px] w-full px-4 sm:px-10 lg:px-[150px]">
      <div className="flex w-full flex-col">
        <h1 className="text-4xl text-[#4D4D4D] font-bold pb-2 text-center">
          Our Clients
        </h1>
        <p className="text-center text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-5">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="max-h-16 sm:max-h-20"
          />
        ))}
      </div>
    </div>
  );
}

export default Client;
