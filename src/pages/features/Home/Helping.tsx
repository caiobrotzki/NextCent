import Card from "../../../components/card";
import Members from "../../../assets/Member.svg";
import Event from "../../../assets/Event.svg";
import Club from "../../../assets/Club.svg";
import Pay from "../../../assets/Pay.svg";

function Helping() {
  const CardArray = [
    {
      img: Members,
      title: "2,245,341",
      description: "members",
    },
    {
      img: Club,
      title: "46,328",
      description: "Clubs",
    },
    {
      img: Event,
      title: "828,867",
      description: "Event Bookings",
    },
    {
      img: Pay,
      title: "1,926,436",
      description: "Payments",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-10 lg:px-[150px] mt-10">
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

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-0 md:w-3/5 md:pl-10">
        {CardArray.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            classNameDiv="flex items-center space-x-4"
            classNameImg="w-12 h-12"
            classNameH1="text-2xl sm:text-3xl font-semibold"
            classNameP="text-sm text-gray-500"
          />
        ))}
      </div>
    </div>
  );
}

export default Helping;
