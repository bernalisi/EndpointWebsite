import Logo from "../../assets/logos/Endpoint logo white.svg";
import React from "react";

export default function Footer() {
  const Navigation = ["Privacy Policy", "Terms of use", "Cookies Settings"];

  return (
    <div className="w-full bg-black flex flex-col items-center px-4 md:px-14 pt-5 pb-10 md:pb-20">
      <div className="w-full pt-10 border-t-2 border-white flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center md:items-end">
        {/* First block */}
        <div className="w-[75%] md:w-[500px] h-auto flex flex-col gap-6 md:gap-10 items-center md:items-start justify-end flex-grow">
          {/* Sign up to newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl md:text-[24px] flex-grow-0">
              Subscribe to our monthly newsletter.
            </h3>
            <input
              type="text"
              className="h-10 px-4 border-2 border-slate-400 bg-black rounded-sm text-zinc-400 placeholder-zinc-400"
              placeholder="Type your email address..."
            />
            <button className="w-full md:w-28 h-10 md:h-8 px-5 py-1 flex items-center justify-center font-semibold bg-violet-900 text-white hover:opacity-70 transition duration-150 ease-out">
              SUBMIT
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="Logo" className="h-10 md:h-11" />
          </div>
        </div>

        {/* Second block - Copyright */}
        <div className="w-full md:w-[700px] h-auto flex flex-col justify-end">


        <ul className="flex flex-col md:flex-row justify-center md:justify-end text-white text-center md:text-left">
          {/* Copyright Item */}
          <li className="mb-2 md:mb-0 md:mr-4">All Content Copyright 2024</li>

          {/* Navigation Items */}
          {Navigation.map((item, index) => (
            <React.Fragment key={item}>
              {/* Separator */}
              {index > 0 && <span className="hidden md:inline-block md:px-2"></span>}

              {/* Navigation Link */}
              <li className="mb-2 md:mb-0">
                <a href={`#${item}`} className="hover:underline">
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
