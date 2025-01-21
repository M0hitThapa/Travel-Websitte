import Nepal from "../assets/Nepal.jpg";
import Japan from "../assets/Japan.jpg";
import India from "../assets/India.jpg";
import Thailand from "../assets/Thailand.jpg";

const Nature = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center items-center pt-12">
        <h1 className="text-3xl sm:text-4xl font-black font-lora text-center">
          Discover the touch of Nature
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 sm:gap-7 justify-center p-6">
        <img src={Nepal} alt="Nepal" className="h-48 w-48 sm:h-72 sm:w-72 rounded-2xl hover:mt-10 duration-500" />
        <img src={Japan} alt="Japan" className="h-48 w-48 sm:h-72 sm:w-72 rounded-2xl mt-4 sm:mt-10 hover:mt-0 duration-500" />
        <img src={Thailand} alt="Thailand" className="h-48 w-48 sm:h-72 sm:w-72 rounded-2xl hover:mt-10 duration-500" />
        <img src={India} alt="India" className="h-48 w-48 sm:h-72 sm:w-72 rounded-2xl mt-4 sm:mt-10 hover:mt-0 duration-500" />
      </div>
    </div>
  );
};

export default Nature;
