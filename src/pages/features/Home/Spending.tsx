import Img from "../../../assets/Frame 35.svg";
import Button from "../../../components/Button";

function Spending() {
  return (
    <div className="flex flex-col md:flex-row w-full px-4 sm:px-10 lg:px-[150px] space-y-10 md:space-y-0 md:space-x-20">
      <div className="flex justify-center md:justify-start">
        <img
          src={Img}
          alt="Spending Illustration"
          className="w-full max-w-md md:max-w-[600px] ml-0 md:ml-[50px]"
        />
      </div>
      <div className="flex flex-col justify-center w-full max-w-md md:max-w-[600px] mr-0 md:mr-[100px] text-center md:text-left">
        <h1 className="text-[30px] sm:text-[40px] text-[#4D4D4D] font-bold mb-5">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="text-[#717171] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button
          title="Learn More"
          className="bg-[#4CAF4F] text-white py-3 px-10 rounded-[5px] mx-auto md:mx-0"
        />
      </div>
    </div>
  );
}

export default Spending;
