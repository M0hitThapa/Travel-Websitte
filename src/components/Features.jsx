

const Features = () => {
  return (
    <div>
        <div className="flex justify-center">
<h1 className="text-3xl font-black font-lora p-5">Features</h1>
        </div>
        
        <div className="flex justify-center ">
        <div className=" h-[500px] w-[900px] ">
            <div className="grid grid-cols-10 grid-rows-4 gap-4 h-full w-full">
                <div className="col-span-5 row-span-2  bg-slate-200 text-black bg-opacity-50 rounded-2xl flex justify-center items-center">1</div>
                <div className=" col-span-5 row-span-2 bg-slate-200 text-black bg-opacity-50 rounded-2xl flex justify-center items-center">2</div>
                <div className="col-span-3 row-span-2 bg-slate-200 text-black bg-opacity-50 rounded-2xl flex justify-center items-center">3</div>
                <div className="col-span-3 row-span-2 bg-slate-200 text-black bg-opacity-50 rounded-2xl flex justify-center items-center">4</div>
                <div className="col-span-4 row-span-2 bg-slate-200 text-black bg-opacity-50 rounded-2xl flex justify-center items-center">5</div>
            </div>
        </div>
        </div>

    </div>
   
  )
}

export default Features