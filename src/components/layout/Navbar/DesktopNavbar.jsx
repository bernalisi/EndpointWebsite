import Logo from "../../../assets/logos/Endpoint logo black dot purle.svg";
import Logo_white from "../../../assets/logos/Endpoint logo white.svg";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variant for sliding text from above
const slideDownVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3, ease: "easeOut" },
  },
};

export default function DesktopNavbar() {
  const Navigation = [
    { title: "LIFE SCIENCES", url: "life sciences" },
    { title: "PROVIDERS", url: "providers" },
    { title: "BLOG", url: "https://endpoint-data.medium.com/" },
  ];

  const [isTransparent, setIsTransparent] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
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

  // Toggle dropdown visibility
  const handleLoginClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
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

  const isSpecificPage =
    location.pathname === "/privacy%20policy" ||
    location.pathname === "/terms%20of%20use";

  return (
    <div className={isTransparent ? "" : "i"}>
      <div ref={observerRef} />
      <nav
        className={`fixed top-0 w-full h-16 z-40 flex items-center justify-between px-6 transition duration-1000 ease-in-out ${
          isTransparent && !hovering && !isSpecificPage
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div className="flex items-center space-x-14">
          <a href="/">
            <motion.img
              src={Logo_white}
              alt="Logo"
              className="h-10 ld:h-12"
              variants={slideDownVariants}
              initial="hidden"
              animate="visible"
            />
          </a>

          {/* <ul className="flex space-x-4">
            {Navigation.map((element, index) => (
              <motion.li
                key={index}
                variants={slideDownVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={element.url}
                  target={
                    element.url === "https://endpoint-data.medium.com/"
                      ? "_blank"
                      : "_self"
                  }
                  className={`ld:text-[20px] font-medium transition duration-500 ease-in-out ${
                    isTransparent && !hovering && !isSpecificPage
                      ? "text-white hover:text-violet-600"
                      : "text-black hover:text-violet-900"
                  }`}
                >
                  {element.title}
                </a>
              </motion.li>
            ))}
          </ul> */}
        </div>

        <div className="flex flex-row gap-4">
          {/* <motion.button
            onClick={handleLoginClick}
            className={`h-8 px-5 ld:text-[20px] py-1 flex items-center font-semibold transition duration-150 ease-in-out ${
              isTransparent && !hovering && !isSpecificPage
                ? "border border-white text-white hover:bg-white hover:text-black"
                : "border border-black hover:bg-black hover:text-white"
            }`}
            variants={slideDownVariants}
            initial="hidden"
            animate="visible"
          >
            LOG IN
          </motion.button> */}

          <motion.button
            className={`h-8 px-5 ld:text-[20px] py-1 flex items-center font-semibold transition duration-150 ease-in-out ${
              isTransparent && !hovering && !isSpecificPage
                ? "bg-white border-white text-black hover:opacity-70"
                : "bg-white border-white text-black hover:opacity-70"
            }`}
            variants={slideDownVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              target="_blank"
              href="https://calendly.com/bernardo-tryendpoint/book-call-with-bernardo"
            >
              BOOK DEMO
            </a>
          </motion.button>
        </div>
      </nav>
    </div>
  );
}
