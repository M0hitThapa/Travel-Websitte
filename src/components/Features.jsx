import Booking from "../assets/Booking.png";
import Planning from "../assets/Planning.png";
const Features = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <h1 className="text-3xl font-black font-lora p-5">Features</h1>
      </div>

      <div className="flex justify-center">
        <div className="h-auto max-w-full sm:h-[500px] sm:w-[900px]">
          <div className="grid grid-cols-1 sm:grid-cols-10 grid-rows-auto sm:grid-rows-4 gap-4 h-full w-full">
            <div className="col-span-1 sm:col-span-5 row-span-auto sm:row-span-2 bg-bg-img-bali bg-cover bg-center text-white rounded-2xl">
              <div className="bg-black bg-opacity-80 h-full w-full rounded-2xl p-5">
                <h1 className="font-bold font-lora text-xl text-center mb-4 text-orange-500">Travel Booking and Reservation</h1>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <ul className="text-base font-mono space-y-1">
                    <li>&#9679; Flight Booking with best deals</li>
                    <li>&#9679; Hotel Booking at premium locations</li>
                    <li>&#9679; Comfortable Car Rentals</li>
                    <li>&#9679; All-inclusive Package Tours</li>
                  </ul>
                  <img src={Booking} alt="Booking Service" className="h-36 w-44 rounded-lg mt-4 sm:mt-0" />
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-5 row-span-auto sm:row-span-2 bg-bg-img-store bg-cover bg-center text-black rounded-2xl">
              <div className="bg-black bg-opacity-80 rounded-2xl h-full w-full text-white p-4">
                <h1 className="font-bold font-lora text-xl text-center mb-2 text-orange-500 ">Personalized Travel Planning</h1>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <ul className="text-base font-mono space-y-3">
                    <li>&#9679; Custom-tailored Itineraries</li>
                    <li>&#9679; Destination Recommendations</li>
                    <li>&#9679; Comprehensive Budget Planning</li>
                  </ul>
                  <img src={Planning} alt="Travel Planning" className="h-36 w-44 sm:h-48 sm:w-48 rounded-lg mt-4 sm:mt-0" />
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3 row-span-auto sm:row-span-2 bg-bg-img-leaf bg-cover bg-center rounded-2xl flex flex-col justify-center items-center">
              <div className="bg-black h-full w-full bg-opacity-80 rounded-2xl text-white p-6">
                <h1 className="font-bold font-lora text-xl text-center mb-2 text-orange-500">24/7 Customer Support</h1>
                <p className="text-center text-base font-mono">Our support team is here to assist you anytime, ensuring a seamless travel experience.</p>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3 row-span-auto sm:row-span-2 bg-bg-img-nepal bg-cover bg-center rounded-2xl flex flex-col justify-center items-center">
              <div className="bg-black bg-opacity-80 h-full w-full rounded-2xl text-white p-6">
                <h1 className="font-bold font-lora text-xl text-center mb-2 text-orange-500">Travel Insurance</h1>
                <p className="text-center text-base font-mono">Get peace of mind with comprehensive travel insurance, protecting you on every journey.</p>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-4 row-span-auto sm:row-span-2 bg-bg-img-ballon bg-cover bg-center rounded-2xl flex flex-col justify-center items-center">
              <div className="bg-black bg-opacity-80 text-white h-full w-full p-6 rounded-2xl">
                <h1 className="font-bold font-lora text-xl text-center mb-2 text-orange-500">Group and Corporate Travel</h1>
                <p className="text-center text-base font-mono">Tailored packages for group outings and business travel, designed to meet your unique needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
