
import bagpack from "../assets/bagpack.png"
const Trip = () => {
  return (
 <div className="mt-16">
  <div className="flex justify-center items-center gap-40">
  <img src={bagpack} alt="" className="h-[450px]  bg-rose-300 rounded-3xl bg-opacity-50 ml-40 " />
  <div>
  <h1 className="text-4xl font-lora font-black mb-5 text-orange-500">Plan easy, Pay less & <br />experience more..</h1>
  <p className="text-md pt-5 font-mono font-medium">Traveling is not just about seeing new places,<br /> but about discovering new perspectives. Its about stepping out of your comfort zone,<br /> embracing the unknown, and collecting moments<br /> that turn into cherished memories. Plan smart, save more,<br /> and immerse yourself in experiences that leave a mark on your heart and soul—because <br /> life is best lived when its full of adventure and stories worth sharing.</p>
  </div>
 
  </div>

 </div>
  )
}

export default Trip