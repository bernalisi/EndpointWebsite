import Logo from "../../../assets/logos/Endpoint logo black dot purle.svg"
import Logo_white from "../../../assets/logos/Endpoint logo white.svg"
import Menu_option_white from "../../../assets/images/ui/Menu_option_white.svg"
import Menu_option_black from "../../../assets/images/ui/Menu_option_black.svg"
import Menu_open_black from "../../../assets/images/ui/Menu_open_black.svg"
import {useState, useEffect} from "react"
// import {useNavigate} from "react-router-dom"

export default function MobileNavbar() {
const navigation = [{title: 'HOMEPAGE', url:"/"} ,{title: 'LIFE SCIENCES', url:'life sciences'}, {title: 'PROVIDERS', url:'providers'}, {title: 'RESOURCES', url:'resources'}]
const [scrolling, setScrolling] = useState(false)
const [hovering, setHovering] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};

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

const menuClosed = (
<div className="absolute w-full h-16 z-50">
  <nav onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={scrolling || hovering? "fixed bg-white top-0 w-full h-16 flex items-center justify-between border-white px-6" : "fixed top-0 w-full h-16 flex items-center justify-between bg-transparent px-6"}>
    <div className="flex items-center space-x-14">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/">
          <img src={scrolling || hovering?  Logo : Logo_white} alt="Logo" className="max-xs:h-9 h-11"/>
        </a>
      </div>
    </div>

    <div className="flex flex-row gap-4">
      <img src={scrolling || hovering? Menu_option_black : Menu_option_white} alt="mobile menu option" onClick={() => toggleMenu()} className="h-5" />
    </div>
  </nav>
</div>
);


const menuOpened = (
  <>
    <div className="absolute w-full h-full z-40">
      <div className="fixed w-full h-screen pt-5 flex flex-col items-end justify-start bg-white border border-white px-6">

        {/* Top section */}
        <div className="flex flex-row w-full h-[10%] justify-between items-start gap-4 mb-8">

          {/* Log-in & Book Demo buttons */}
          <div className="flex flex-col gap-4 justify-start items-start">
            <button className="h-8 px-5 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70">
              <a href="https://calendly.com/bernardo-tryendpoint/book-a-demo-with-bernardo">BOOK DEMO</a>
            </button>
            <button className="h-8 px-5 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white">
              <a href="/CONTACT US">CONTACT US</a>
            </button>
            <button className="h-8 px-5 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white">
              LOG IN
            </button>
          </div>

          {/* Navigatin Button */}
          <img
            src={Menu_open_black}
            alt="mobile menu option"
            onClick={() => toggleMenu()}
            className="h-5"
          />

        </div>

        {/* Navigation menu */}
        <div className="w-full pt-32 max-xs:pt-20">
          <ul className="flex flex-col items-center gap-10 p-4 max-xs:gap-6">
            {navigation.map((element, index) => (
              <li className="py-2 px-3 hover:font-bold" key={index}>
                <a href={`${element.url}`} className="text-black text-[18px]">
                  {element.title}
                </a>
              </li>
            ))}
          </ul>

        </div>

      </div>
      <div className="fixed w-full bottom-0 flex flex-row justify-center items-center bg-white p-5">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-11 max-xs:h-8"/>
        </a>
      </div>
    </div>
  </>
);

  return (
  <>
    {menuOpen? menuOpened : menuClosed}
  </>
  )
}
