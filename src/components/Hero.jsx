const Hero = () => {
  return (
    <div className="relative bg-bg-img-mountain bg-cover bg-center h-[600px] m-5 rounded-3xl">
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex items-start justify-start">
        <div className="p-24">
          <h1 className="text-slate-200 text-6xl font-bold">
            Pack your bags,<br /> let’s go somewhere amazing...
          </h1>
          <p className="text-lg pt-10 text-slate-200 font-mono font-semibold">
            Travel opens your heart,<br />
            broadens your mind,<br />
            and fills your life with stories to tell.<br />
            Every journey leaves you richer, not in things,<br />
            but in memories that last a lifetime.
          </p>
          <button className="mt-10 text-lg text-black font-bold bg-white hover:bg-slate-300 px-5 py-2 rounded-full font-lora shadow-sm shadow-white">
            Book Now
          </button>

          

          
          
        </div>
        
      </div>

      
    </div>

    
  );
};

export default Hero;
