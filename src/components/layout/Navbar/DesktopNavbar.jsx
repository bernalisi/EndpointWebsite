import Logo from "../../../assets/logos/Endpoint logo black dot purle.svg";
import Logo_white from "../../../assets/logos/Endpoint logo white.svg";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

export default function DesktopNavbar() {
  const Navigation = [
    { title: "LIFE SCIENCES", url: "life sciences" },
    { title: "PROVIDERS", url: "providers" },
    { title: "BLOG", url: "https://endpoint-data.medium.com/" },
  ];

  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dropdownRef = useRef(null); // Ref to detect clicks outside the dropdown
  const location = useLocation(); // Get the current URL

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Toggle dropdown visibility on button click
  const handleLoginClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Check if the URL is "/Privacy%20Policy" or "/Terms%20of%20use"
  const isSpecificPage =
    location.pathname === "/privacy%20policy" ||
    location.pathname === "/terms%20of%20use";

  return (
    <div className="absolute w-full h-16 z-40">
      <nav
        className={
          scrolling || hovering || isSpecificPage
            ? "fixed top-0 w-full h-16 flex items-center justify-between bg-white borde px-6"
            : "fixed top-0 w-full h-16 flex items-center justify-between bg-transparent px-6"
        }
      >
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src={
                  scrolling || hovering || isSpecificPage ? Logo : Logo_white
                }
                alt="Logo"
                className="h-11"
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <ul className="flex space-x-4">
            {Navigation.map((element, index) => (
              <li key={index}>
                <a
                  href={`${element.url}`}
                  target={
                    element.url === "https://endpoint-data.medium.com/"
                      ? "_blank"
                      : "_self"
                  }
                  className={
                    scrolling || hovering || isSpecificPage
                      ? "text-black hover:text-violet-900 font-medium"
                      : "text-white hover:text-violet-600 font-medium"
                  }
                >
                  {element.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleLoginClick} // Toggle dropdown on click
              className={
                scrolling || hovering || isSpecificPage
                  ? "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white"
                  : "h-8 px-5 py-1 flex items-center font-semibold border-2 border-white text-white transition duration-150 ease-in-out hover:bg-white hover:text-black"
              }
            >
              LOG IN
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-1 py-2 w-[220px] bg-white shadow-lg z-50">
                <a
                  href="https://endpoint-discover.vercel.app/"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                  target="_blank"
                >
                  as Life Sciences
                </a>
                <a
                  href="https://endpoint-providers-frontend.vercel.app/"
                  className="block px-4 py-2 text-black hover:bg-violet-100"
                  target="_blank"
                >
                  as Healthcare Provider
                </a>
              </div>
            )}
          </div>

          <button
            className={
              scrolling || hovering || isSpecificPage
                ? "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white"
                : "h-8 px-5 py-1 flex items-center font-semibold border-2 border-white text-white transition duration-150 ease-in-out hover:bg-white hover:text-black"
            }
          >
            <a href="/CONTACT US">CONTACT US</a>
          </button>
          <button
            className={
              scrolling || hovering || isSpecificPage
                ? "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70"
                : "h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-white border-white text-black transition duration-150 ease-in-out hover:opacity-70"
            }
          >
            <a href="https://calendly.com/bernardo-tryendpoint/book-a-demo-with-bernardo">
              BOOK DEMO
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
}
