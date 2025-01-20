
import Nepal from "../assets/Nepal.jpg"
import Japan from "../assets/Japan.jpg"
import India from "../assets/India.jpg"
import Thailand from "../assets/Thailand.jpg"
const Nature = () => {
 
  return (
    <div>
  <div className="flex pt-12 justify-center items-center ">
        <h1 className="text-4xl font-black font-lora">Discover the touch of Nature </h1>
        
    </div>
    <div className="flex gap-7 p-10 justify-center">
            <img src={Nepal} alt="" className="h-72 w-72 rounded-2xl" />
            <img src={Japan} alt="" className="h-72 w-72 rounded-2xl mt-10" />
            <img src={Thailand} alt="" className="h-72 w-72 rounded-2xl" />
            <img src={India} alt="" className="h-72 w-72 rounded-2xl mt-10" />
        </div>
    </div>
  
  )
}

export default Nature