import Logo from "../../assets/logos/Endpoint logo white dot purple.svg";
import Linkedin from "../../assets/images/footer/Linkedin.svg";
import Medium from "../../assets/images/footer/Medium.svg";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const Navigation = ["Privacy Policy", "Terms of use", "Cookies Settings"];
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="w-full bg-black flex flex-col items-center gap-6 px-4 md:px-14 pt-10">
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center py-8 min-h-[400px]">
        {/* First block */}
        <div className="w-full md:w-[500px] flex flex-col gap-8 items-center md:items-start">
          {/* Buttons */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button className="h-10 px-5 py-2 flex items-center justify-center font-semibold bg-white text-black transition hover:opacity-80">
              <a
                href="https://calendly.com/bernardo-tryendpoint/book-a-demo-with-bernardo"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK DEMO
              </a>
            </button>

            <ul className="flex justify-center md:justify-start gap-4 pt-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/endpointdata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Linkedin}
                    alt="LinkedIn"
                    className="h-6 md:h-8 hover:opacity-80 border"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@endpoint-data"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Medium}
                    alt="Medium"
                    className="h-6 md:h-8 hover:opacity-80 border"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="Logo" className="h-10 md:h-10" />
          </div>
        </div>

        {/* Second block */}
        <div className="w-full max-w-full flex flex-col items-center md:items-end h-full">
          <ul className="flex flex-col md:flex-row absolute bottom-10 justify-center md:justify-end items-center md:items-end w-full gap-4 text-white text-center md:text-left">
            {Navigation.map((item) => (
              <React.Fragment key={item}>
                <li className="text-sm md:text-lg font-light cursor-pointer px-4 hover:underline">
                  <a
                    onClick={() => {
                      navigate(`/${item.replace(/\s+/g, " ").toLowerCase()}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item}
                  </a>
                </li>
              </React.Fragment>
            ))}
            {/* Copyright Section */}
            <li className="text-sm md:text-lg font-light">
              © 2024 All Rights Reserved
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
