import Img from "../../../assets/Frame 35.svg";
import Button from "../../../components/Button";
import { motion } from "framer-motion";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

function Spending() {
  return (
    <section className="flex flex-col md:flex-row w-full px-4 sm:px-10 lg:px-[150px] space-y-10 md:space-y-0 md:space-x-20">
      <motion.div
        className="flex justify-center md:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.img
          src={Img}
          alt="Spending Illustration"
          className="w-full max-w-md md:max-w-[600px] ml-0 md:ml-[50px]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center w-full max-w-md md:max-w-[600px] mr-0 md:mr-[100px] text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <motion.h1
          className="text-[30px] sm:text-[40px] text-[#4D4D4D] font-bold mb-5"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          The unseen of spending three years at Pixelgrade
        </motion.h1>
        <motion.p
          className="text-[#717171] mb-5"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            title="Learn More"
            className="bg-[#4CAF4F] text-white py-3 px-10 rounded-[5px] mx-auto md:mx-0 cursor-pointer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Spending;
