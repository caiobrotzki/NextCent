import Card from "../../../components/card";
import Card1 from "../../../assets/Card1.svg";
import Card2 from "../../../assets/card2.svg";
import Card3 from "../../../assets/card3.svg";
import { motion } from "framer-motion";

// Função easing personalizada para suavizar animação
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// Variants para a animação de cada card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      delay: i * 0.2, // delay sequencial para cada card
    },
  }),
};

function CardHome() {
  const CardArray = [
    {
      img: Card1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: Card2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: Card3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-24">
      <div className="flex flex-col items-center max-w-4xl mx-auto mb-16">
        <h1 className="text-[#4D4D4D] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight mb-6">
          Manage your entire community in a single system
        </h1>
        <p className="text-center text-[#717171] text-lg sm:text-xl mt-4 max-w-2xl">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {CardArray.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(76, 175, 79, 0.3)" }}
            className="cursor-pointer"
          >
            <Card
              title={card.title}
              description={card.description}
              img={card.img}
              classNameDiv="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gray-100"
              classNameH1="text-2xl font-bold text-[#4D4D4D] mt-6 text-center"
              classNameP="text-base text-[#717171] mt-3 text-center leading-relaxed"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CardHome;
