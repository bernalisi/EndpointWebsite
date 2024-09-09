import Logo from "../../../assets/logos/Endpoint logo black dot purle.svg"
import Logo_white from "../../../assets/logos/Endpoint logo white.svg"
import {useState, useEffect} from "react"
// import {useNavigate} from "react-router-dom"

export default function DesktopNavbar() {
const Navigation = [{title: 'LIFE SCIENCES', url:'life sciences'}, {title: 'PROVIDERS', url:'providers'}, {title: 'BLOG', url:'https://endpoint-data.medium.com/'}]
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
    <div className="absolute w-full h-16 z-40">
      <nav onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={scrolling || hovering? "fixed top-0 w-full h-16 flex items-center justify-between bg-white border border-white px-6" : "fixed top-0 w-full h-16 flex items-center justify-between bg-transparent px-6"}>
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={scrolling || hovering? Logo : Logo_white} alt="Logo" className="h-11"/>
            </a>
          </div>

          {/* Navigation Menu */}
          <ul className="flex space-x-4">
            {Navigation.map((element, index) => (
              <li key={index}>
                <a href={`${element.url}`} className={scrolling || hovering? "text-black hover:text-violet-900 font-medium" : "text-white hover:text-violet-600 font-medium"}>
                  {element.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <button className={scrolling || hovering? "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white" : "h-8 px-5 py-1 flex items-center font-semibold border-2 border-white text-white transition duration-150 ease-in-out hover:bg-white hover:text-black"}>
            LOG IN
          </button>
          <button className={scrolling || hovering? "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white" : "h-8 px-5 py-1 flex items-center font-semibold border-2 border-white text-white transition duration-150 ease-in-out hover:bg-white hover:text-black"}>
            <a href="/CONTACT US">CONTACT US</a>
          </button>
          <button className={scrolling || hovering? "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70":"h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-white border-white text-black transition duration-150 ease-in-out hover:opacity-70"}>
            <a href="https://calendly.com/bernardo-tryendpoint/book-a-demo-with-bernardo">BOOK DEMO</a>
          </button>
        </div>
      </nav>
  </div>
  )
}
