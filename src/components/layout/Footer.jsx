import Logo from "../../assets/logos/Endpoint logo black dot purle.svg";
import Linkedin from "../../assets/images/footer/Linkedin.svg";
import Medium from "../../assets/images/footer/Medium.svg";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const Navigation = ["Privacy Policy", "Terms of use", "Cookies Settings"];
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for detecting clicks outside the dropdown

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
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

  return (
    <div className="w-full bg-white flex flex-col items-center px-4 md:px-14 pt-5 pb-10 md:pb-20">
      <div className="w-full pt-10 border-t-2 border-white flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center md:items-end">
        {/* First block */}
        <div className="w-[75%] md:w-[500px] h-auto flex flex-col gap-6 md:gap-10 items-center md:items-start justify-end flex-grow">
          {/* Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white"
              >
                LOG IN
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-1 w-48 bg-white shadow-lg rounded-lg z-50">
                  <a
                    href="https://endpoint-discover.vercel.app/"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    target="_blank"
                  >
                    as Life Science
                  </a>
                  <a
                    href="https://endpoint-providers-frontend.vercel.app/"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                    target="_blank"
                  >
                    as Healthcare Provider
                  </a>
                </div>
              )}
            </div>

            <button className="h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white">
              <a href="/contact us">CONTACT US</a>
            </button>

            <button className="h-8 px-5 py-1 flex flex-row items-center justify-center font-semibold border bg-violet-900 border-violet-900 text-white transition duration-150 ease-in-out hover:opacity-70">
              <a
                href="https://calendly.com/bernardo-tryendpoint/book-a-demo-with-bernardo"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK DEMO
              </a>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-center md:justify-start">
              <img src={Logo} alt="Logo" className="h-10 md:h-11" />
            </div>
            <ul className="flex md:flex-row justify-center md:justify-start pt-8 gap-2">
              <li>
                <img
                  src={Linkedin}
                  alt="Linkedin"
                  className="h-8 hover:opacity-70"
                />
              </li>
              <li>
                <img
                  src={Medium}
                  alt="Medium"
                  className="h-8 hover:opacity-70"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Second block - Copyright */}
        <div className="w-full md:w-[700px] h-auto flex flex-col justify-end">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end text-black text-center md:text-left">
            {/* Copyright Item */}
            <li className="mb-2 md:mb-0 md:mr-4">All Content Copyright 2024</li>

            {/* Navigation Items */}
            {Navigation.map((item, index) => (
              <React.Fragment key={item}>
                {/* Separator */}
                {index > 0 && (
                  <span className="hidden md:inline-block md:px-2"></span>
                )}

                {/* Navigation Link */}
                <li className="mb-2 md:mb-0">
                  <a
                    onClick={() => {
                      navigate(`/${item.replace(/\s+/g, " ").toLowerCase()}`);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:underline cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
