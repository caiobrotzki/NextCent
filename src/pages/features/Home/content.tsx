import { motion } from "framer-motion";
import Img from "../../../assets/Illustration.svg";

function Content() {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-4 sm:px-10 lg:px-[150px] mt-10">
      <div className="flex flex-col max-w-md md:max-w-none md:ml-[150px] md:mt-[50px] text-center md:text-left">
        <h1 className="text-[#4D4D4D] text-4xl sm:text-6xl font-bold leading-tight">
          Lessons and insights
        </h1>
        <h1 className="text-[#4CAF4F] text-4xl sm:text-6xl font-bold leading-tight">
          from 8 years
        </h1>
        <p className="text-[#717171] mt-4 max-w-xs md:max-w-md">
          Where to grow your business as a photographer: site or social media?
        </p>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ boxShadow: "0px 4px 12px rgba(76, 175, 79, 0.6)" }}
          whileTap={{ boxShadow: "0px 2px 6px rgba(76, 175, 79, 0.4)" }}
          className="bg-[#4CAF4F] text-white px-8 py-3 rounded-[5px] mt-6 mx-auto md:mx-0 cursor-pointer"
        >
          Register
        </motion.button>
      </div>

      <div className="mt-10 md:mr-[200px] flex-shrink-0 w-full max-w-sm sm:max-w-md">
        <img src={Img} alt="Illustration" className="w-full h-auto" />
      </div>
    </section>
  );
}

export default Content;
