import Card from "../../../components/card";
import Card1 from "../../../assets/Card1.svg";
import Card2 from "../../../assets/card2.svg";
import Card3 from "../../../assets/card3.svg";

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
    <div className="mt-[70px] w-full px-4 sm:px-10 lg:px-[150px]">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <h1 className="text-[#4D4D4D] text-[30px] sm:text-[40px] w-full sm:w-[580px] text-center font-bold">
          Manage your entire community in a single system
        </h1>
        <p className="text-center text-[#717171] mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 mt-10">
        {CardArray.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            img={card.img}
            classNameDiv="flex flex-col items-center p-6 border hover:cursor-pointer hover:scale-105 transition-all duration-300"
            classNameH1="text-xl font-semibold text-center text-[#4D4D4D]"
            classNameP="text-center text-[#717171]"
          />
        ))}
      </div>
    </div>
  );
}

export default CardHome;
