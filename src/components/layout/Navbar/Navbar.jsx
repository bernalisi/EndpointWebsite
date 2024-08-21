import {useState, useEffect} from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "../Navbar/MobileNavbar"


export default function Navbar() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
    {mobile? <MobileNavbar/> : <DesktopNavbar/>}
    </>
  )
}
