import { motion, Variants } from "framer-motion";
import Card from "../../../components/card";
import Members from "../../../assets/Member.svg";
import Event from "../../../assets/Event.svg";
import Club from "../../../assets/Club.svg";
import Pay from "../../../assets/Pay.svg";

function Helping() {
  const cards = [
    { img: Members, title: "2,245,341", description: "members" },
    { img: Club, title: "46,328", description: "Clubs" },
    { img: Event, title: "828,867", description: "Event Bookings" },
    { img: Pay, title: "1,926,436", description: "Payments" },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // array numérico funciona aqui
      },
    },
  };

  return (
    <section className="flex flex-col md:flex-row w-full px-4 sm:px-10 lg:px-[150px] mt-10">
      {/* Texto */}
      <div className="flex flex-col md:ml-[150px] md:w-2/5">
        <h1 className="text-[#4D4D4D] font-bold text-3xl sm:text-4xl">
          Helping a local
        </h1>
        <h1 className="text-[#4CAF4F] font-bold text-3xl sm:text-4xl">
          business reinvent itself
        </h1>
        <p className="mt-2 text-gray-600 max-w-sm">
          We reached here with our hard work and dedication
        </p>
      </div>

      {/* Cards com animação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-0 md:w-3/5 md:pl-10">
        {cards.map(({ img, title, description }, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: index * 0.2 }} // delay aqui!
            whileHover={{
              y: -5,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <Card
              img={img}
              title={title}
              description={description}
              classNameDiv="flex items-center space-x-4 bg-white p-4 rounded-lg transition-all"
              classNameImg="w-12 h-12"
              classNameH1="text-2xl sm:text-3xl font-semibold"
              classNameP="text-sm text-gray-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Helping;
