import Logo from "./footer/logo";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import Company from "./footer/Company";
import Support from "./footer/Support";
import Input from "./input";

function Footer() {
  return (
    <div className="bg-black mt-[100px] w-full py-8 flex flex-col md:flex-row md:justify-between md:items-start px-4 sm:px-10 lg:px-[150px] space-y-10 md:space-y-0">
      {/* Logo and social */}
      <div className="flex flex-col items-center md:items-start md:ml-0">
        <Logo />
        <p className="text-white text-xs mt-5 text-center md:text-left">
          Copyright © 2020 Nexcent ltd.
        </p>
        <p className="text-white text-xs mt-2 text-center md:text-left">
          All rights reserved
        </p>

        <div className="flex space-x-4 mt-4">
          <InstagramLogo size={16} weight="fill" className="text-white" />
          <TwitterLogo size={16} weight="fill" className="text-white" />
          <YoutubeLogo size={16} weight="fill" className="text-white" />
        </div>
      </div>

      {/* Company */}
      <div className="flex justify-center md:justify-start">
        <Company />
      </div>

      {/* Support */}
      <div className="flex justify-center md:justify-start">
        <Support />
      </div>

      {/* Newsletter */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-white text-[25px] font-bold mb-4 text-center md:text-left">
          Stay up to date
        </h1>
        <Input
          type="email"
          placeholder="Your email adress"
          className="bg-[#394149] text-white py-2 px-10 rounded-[7px] w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default Footer;
