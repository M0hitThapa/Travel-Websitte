

const Footer = () => {
  return (
    <div className="bg-rose-300 h-52 pl-24 pr-24 flex justify-center gap-52">
        <div className="">
            <h1 className="text-xl font-mono font-black pb-3">Learn More</h1>
            <ul className="font-semibold font-lora cursor-pointer">
                <li>About Us</li>
                <li>Environment</li>
                <li>Career</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1 className="text-xl font-mono font-black pb-3">Our Community</h1>
            <ul className="font-semibold font-lora cursor-pointer">
                <li>Climbing Mountain</li>
                <li>Hiking</li>
                <li>Trekking</li>
            </ul>
        </div>
        <div>
            <h1 className="text-xl font-mono font-black pb-3">Contact Us</h1>
            <ul className="font-semibold font-lora cursor-pointer">
                <li>Phone: 123-456-789</li>
                <li>Email: we@gmail.com</li>
            </ul>
        </div>
     
    </div>
  )
}

export default Footer