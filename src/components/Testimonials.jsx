import bali from "../assets/bali.jpg"

const Testimonials = () => {
  return (
    <div className="text-center py-10">
        <h1 className="text-2xl font-lora font-black p-5">Testimonials</h1>
        <h2 className="text-4xl font-lora font-bold p-5">Read what Others Have to Say.</h2>
        <div className="flex max-w-5xl mx-auto gap-8 group">
            <div className="bg-rose-200 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
                <img src={bali} alt="" className="h-16 w-16 mx-auto rounded-full"/>
                <h4 className="uppercase text-xl font-bold font-mono">John Doe</h4>
                <p className="text-md leading-7 my-3 font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               
            </div>
            <div className="bg-rose-200 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
                <img src={bali} alt="" className="h-16 w-16 mx-auto rounded-full"/>
                <h4 className="uppercase text-xl font-bold font-mono">John Doe</h4>
                <p className="text-md leading-7 my-3 font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                
            </div>
            <div className="bg-rose-200 group-hover:blur-sm  hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl ">
                <img src={bali} alt="" className="h-16 w-16 mx-auto rounded-full"/>
                <h4 className="uppercase text-xl font-bold font-mono">John Doe</h4>
                <p className="text-md leading-7 my-3 font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonials