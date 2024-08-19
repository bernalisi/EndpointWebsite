import dot_separator from "../../assets/images/ui/Dot-separator.svg"
import chevron_icon from "../../assets/images/ui/Chevron down white.svg"

export default function Resources() {
  const Resources = [
    {title: "Effects of the European Health Data Space" ,type: "BLOG"},
    {title: "5 steps for implementing a new data model in life sciences R&D", type: "WHITEPAPER"},
    {title: "RWE framework for regulatory submissions in Europe", type: "WHITEPAPER"}]

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 ">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-white">NEWS AND PRESS RELEASES</h6>
      </div>

      <div className="w-[100%] flex flex-col gap-32 justify-between items-start">
        {/* header section */}
        <h2 className="text-white text-[48px] mt-3">Check out our latest news and updates</h2>

        {/* Content of section */}
        <div className="w-full flex flex-row justify-evenly items-center gap-10">
          {Resources.map((r)=>
          <div key={r} className="w-[400px] h-[370px] flex flex-col justify-between gap-0 text-white">
            <div className="h-52 bg-slate-100"></div>
            <h6 className="text-[12px] font-light">{r.type}</h6>
            <p className="text-[24px] font-semibold">{r.title}</p>
            <button className="w-[100%] h-8 py-1 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-white hover:opacity-80">
              <a href="">Read more</a>
              <img src={chevron_icon} alt="chevron-button" className="h-5 px-3"/>
            </button>
          </div>)}

        </div>
      </div>
    </div>  )
}
