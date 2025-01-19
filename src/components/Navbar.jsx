import { NAV_LINKS } from "../constants"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul className="bg-red-300">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar