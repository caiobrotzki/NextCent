import Button from "../../../components/Button";
import Img from "../../../assets/Illustration.svg";

function Content() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-4 sm:px-10 lg:px-[150px] mt-10">
      <div className="flex flex-col md:ml-[150px] md:mt-[50px] max-w-md md:max-w-none text-center md:text-left">
        <h1 className="text-[#4D4D4D] text-4xl sm:text-6xl font-bold leading-tight">
          Lessons and insights
        </h1>
        <h1 className="text-[#4CAF4F] text-4xl sm:text-6xl font-bold leading-tight">
          from 8 years
        </h1>
        <p className="text-[#717171] mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>

        <Button
          title="Register"
          className="text-white px-10 bg-[#4CAF4F] mt-6 py-3 rounded-[5px] mx-auto md:mx-0"
        />
      </div>
      <div className="mt-10 md:mr-[200px] flex-shrink-0">
        <img src={Img} alt="Illustration" className="w-full max-w-sm sm:max-w-md" />
      </div>
    </div>
  );
}

export default Content;
