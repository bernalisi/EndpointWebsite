import Logo from "../../../assets/logos/Endpoint logo black dot purle.svg";
import Logo_white from "../../../assets/logos/Endpoint logo white.svg";
import Menu_option_white from "../../../assets/images/ui/Menu_option_white.svg";
import Menu_option_black from "../../../assets/images/ui/Menu_option_black.svg";
import Menu_open_black from "../../../assets/images/ui/Menu_open_black.svg";
import { useState, useEffect, useRef } from "react";

export default function MobileNavbar() {
  const navigation = [
    { title: "HOMEPAGE", url: "/" },
    { title: "LIFE SCIENCES", url: "life sciences" },
    { title: "PROVIDERS", url: "providers" },
    { title: "BLOG", url: "https://endpoint-data.medium.com/" },
  ];

  const [isTransparent, setIsTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);

  // Intersection Observer to detect transparency change
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTransparent(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClosed = (
    <div className="absolute w-full h-16 z-50">
      <nav
        className={`fixed top-0 w-full h-16 flex items-center justify-between px-6 ${
          isTransparent ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="flex items-center space-x-14">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={isTransparent ? Logo_white : Logo}
                alt="Logo"
                className="h-9"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <img
            src={isTransparent ? Menu_option_white : Menu_option_black}
            alt="mobile menu option"
            onClick={toggleMenu}
            className="h-5"
          />
        </div>
      </nav>
    </div>
  );

  const menuOpened = (
    <div className="absolute w-full h-full z-40">
      <div className="fixed w-full h-screen pt-5 flex flex-col items-end justify-start bg-white border border-white px-6">
        <div className="flex flex-row w-full h-[10%] justify-between items-start gap-4 mb-8">
          <div className="flex flex-col gap-4 justify-start items-start">
            <button className="h-8 px-5 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70">
              <a href="https://calendly.com/bernardo-tryendpoint/book-a-demo-with-bernardo">
                BOOK DEMO
              </a>
            </button>
            <button className="h-8 px-5 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white">
              <a href="/CONTACT US">CONTACT US</a>
            </button>
            <button className="h-8 px-5 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white">
              LOG IN
            </button>
          </div>
          <img
            src={Menu_open_black}
            alt="mobile menu option"
            onClick={toggleMenu}
            className="h-5"
          />
        </div>

        <div className="w-full pt-32 max-xs:pt-20">
          <ul className="flex flex-col items-center gap-10 p-4 max-xs:gap-6">
            {navigation.map((element, index) => (
              <li className="py-2 px-3 hover:font-bold" key={index}>
                <a href={element.url} className="text-black text-[18px]">
                  {element.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed w-full bottom-0 flex flex-row justify-center items-center bg-white p-5">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-9 max-xs:h-8" />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div ref={observerRef} />
      {menuOpen ? menuOpened : menuClosed}
    </>
  );
}
