import Logo1 from "../../../assets/Logo1.svg";
import Logo2 from "../../../assets/Logo2.svg";
import Logo3 from "../../../assets/Logo3.svg";
import Logo4 from "../../../assets/Logo4.svg";
import Logo5 from "../../../assets/Logo5.svg";
import Logo7 from "../../../assets/Logo7.svg";
import { motion, Variants, easeOut } from "framer-motion";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo7];

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: easeOut,
    },
  }),
};

function Client() {
  return (
    <section className="mt-[100px] w-full px-4 sm:px-10 lg:px-[150px]">
      <header className="flex flex-col w-full text-center">
        <h1 className="text-4xl font-bold text-[#4D4D4D] pb-2">Our Clients</h1>
        <p className="text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
      </header>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-5">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="max-h-16 sm:max-h-20"
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </section>
  );
}

export default Client;
