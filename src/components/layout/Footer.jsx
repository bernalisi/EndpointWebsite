import Logo from "../../assets/logos/Endpoint logo white.svg"
import React from "react"

export default function Footer() {
  const Navigation = ["Privacy Policy", "Terms of use", "Cookies Settings"]

  return (
    <div className="w-full h-[400px] bg-black flex justify-center items-end px-14 pb-20 pt-5">
      <div className="w-[100%] border-t-2 border-white flex flex-row gap-20 justify-between items-end">
        {/* First block */}
        <div className="w-[500px] h-[263px] flex flex-col gap-10 justify-end">
          {/* Sign to newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[24px]">Subscribe to our monthly newsletter.</h3>
            <input
              type="text"
              className="h-10 px-4 py-6 border-2 border-slate-400 bg-black rounded-sm text-zinc-400"
              placeholder="Type your email address..."
            />
            <button className="w-28 h-8 px-5 py-1 flex items-center justify-center font-semibold bg-violet-900 text-white hover:opacity-70 transition duration-150 ease-out">
              SUBMIT
            </button>
          </div>

          {/* logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-11" />
          </div>
        </div>

        {/* Second block - Copyright */}
        <div className="w-[700px] h-[263px] flex flex-col justify-end">
          <ul className="flex justify-end text-white">
            <li className="px-2">All Content Copyright 2024 |</li>
            {Navigation.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span className="px-2">|</span>}
                <li>
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

  )
}
