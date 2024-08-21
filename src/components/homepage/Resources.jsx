import dot_separator from "../../assets/images/ui/Dot-separator.svg";
import chevron_icon from "../../assets/images/ui/Chevron down white.svg";

export default function Resources() {
  const Resources = [
    { title: "Effects of the European Health Data Space", type: "BLOG" },
    { title: "5 steps for implementing a new data model in life sciences R&D", type: "WHITEPAPER" },
    { title: "RWE framework for regulatory submissions in Europe", type: "WHITEPAPER" }
  ];

  return (
    <div className="w-full h-auto bg-black flex flex-col justify-center items-start gap-4 px-4 md:px-14 pb-20">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-white text-sm md:text-base">NEWS AND PRESS RELEASES</h6>
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-32 justify-between items-start">
        {/* header section */}
        <h2 className="text-white text-2xl md:text-[48px] mt-3 text-center md:text-left">
          Check out our latest news and updates
        </h2>

        {/* Content of section */}
        <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center lg:items-start gap-10 md:gap-10">
          {Resources.map((r) => (
            <div
              key={r.title}
              className="w-[80%] lg:w-[400px] h-auto md:h-[370px] flex flex-col justify-between gap-4 text-white"
            >
              <img className="h-40 md:h-52 bg-slate-100"></img>
              <h6 className="text-xs md:text-[12px] font-light">{r.type}</h6>
              <p className="text-lg md:text-[24px] line-clamp-2 font-semibold">{r.title}</p>
              <button className="w-full h-10 md:h-8 py-1 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-white hover:opacity-80">
                <a href="" className="flex items-center gap-2">
                  Read more
                  <img src={chevron_icon} alt="chevron-button" className="h-5" />
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
