import Logo from "../../../assets/logos/Endpoint logo black dot purle.svg"
import Logo_white from "../../../assets/logos/Endpoint logo white.svg"
import Menu_option_white from "../../../assets/images/ui/Menu_option_white.svg"
import Menu_option_black from "../../../assets/images/ui/Menu_option_black.svg"
import {useState, useEffect} from "react"
// import {useNavigate} from "react-router-dom"

export default function MobileNavbar() {
// const Navigation = ['LIFE SCIENCES', 'PROVIDERS', 'RESOURCES']
const [scrolling, setScrolling] = useState(false)
const [hovering, setHovering] = useState(false)

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const handleScroll = () => {
  if (window.scrollY > 10) {
    setScrolling(true);
  } else {
    setScrolling(false);
  }
};

  return (
    <div className="absolute w-full h-full z-50">
      <nav onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={scrolling || hovering? "fixed top-0 w-full h-16 flex items-center justify-between bg-white border border-white px-6" : "fixed top-0 w-full h-16 flex items-center justify-between bg-transparent border-b-2 border-white px-6"}>
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={scrolling || hovering?  Logo : Logo_white} alt="Logo" className="h-11"/>
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <button className={scrolling || hovering? "max-xs:hidden h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white" : "max-xs:hidden h-8 px-5 py-1 flex items-center font-semibold border-2 border-white text-white transition duration-150 ease-in-out hover:bg-white hover:text-black"}>
            LOG IN
          </button>
          <button className="max-xs:hidden h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70">
            BOOK DEMO
          </button>
          <img src={scrolling || hovering? Menu_option_black : Menu_option_white} alt="mobile menu option" className="xs:hidden h-7" />
        </div>
      </nav>
  </div>
  )
}
