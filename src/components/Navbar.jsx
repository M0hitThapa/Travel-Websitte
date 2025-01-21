import menu from "../assets/menu.png"
import { Link } from "react-router-dom"
import { NAV_LINKS } from "../constants"
const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 text-black  ">
        <Link href="/">
        <h1 className="h-10 w-80 font-black text-3xl font-lora pl-16">Lets Travel</h1>
        </Link>
        <ul className="flex gap-10 pr-16 text-xl  ">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className=" flex cursor-pointer text-lg  transition-all font-lora   hover:font-bold" >{link.label}</Link>
            ))}
        </ul>
        
        <img 
        src={menu}
        alt="menu"
        
        className=" h-10 w-10 inline-block cursor-pointer md:hidden lg:hidden"
      />
   
    </nav>
  )
}

export default Navbar