import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Nature from "./components/Nature"
import Features from "./components/Features"
import Trip from "./components/Trip"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
const App = () => {
  return (
   <div className="bg-gradient-to-r from-rose-100 to-orange-200">
    <Navbar />
    <Hero />
    <Nature />
    <Features />
    <Trip />
    <Testimonials />
    <Footer />
    
   </div>
  )
}

export default App