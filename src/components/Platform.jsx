import dot_separator from "../assets/images/Dot-separator.svg"
import chevron_icon from "../assets/images/Chevron down black.svg"
import life_science_icon from "../assets/images/LifeScience_icon.svg"
import provider_icon from "../assets/images/Provider_icon.svg"
import line_icon from "../assets/images/Line_icon.svg"

export default function Platform() {
  return (
    <div className="w-full bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 pt-5">

      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-white">OUR PLATFORM</h6>
      </div>



      <div className="w-[100%] border-t-2 border-white flex flex-col gap-5 justify-between items-start">

        {/* header section */}
        <h2 className="text-white text-[48px] mt-3">The largest ecosystem of RWD providers</h2>
        <p className="text-white text-[24px]">Our platform enables life sciences to search for and explore the most comprehensive collection of RWD assets from leading healthcare organizations worldwide.</p>

        {/* Cards */}

        <div className="w-full flex flex-row justify-evenly items-center gap-12 mt-14 mb-20">

          {/* Life Science */}
          <div className="w-[640px] h-[530px]  flex flex-col justify-start pt-10 gap-7 items-start bg-blue-400 rounded-xl">
            <div className="w-full flex flex-row justify-between items-center pr-14">
              <img src={line_icon} alt="line icon" className="h-1" />
              <img src={life_science_icon} alt="provider icon" className="h-28" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="px-14 text-[36px] font-semibold">For Life Sciences</h3>
              <p className="px-14 text-[20px]">Speed up observational research, facilitate deeper insights into diseases, enhance clinical trials, improve safety surveillance, streamline regulatory submissions, boost commercialization strategies. </p>
            </div>
            <div className="w-full mt-12 border-t-2 border-black">
              <button className="w-[100%] h-[100%] px-14 pt-7 py-1 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-black hover:opacity-80 hover:font-extrabold">
                <a href="">Learn more</a>
                <img src={chevron_icon} alt="chevron-button" className="h-6 px-3"/>
              </button>
            </div>
          </div>

          {/* Providers */}
          <div className="w-[640px] h-[530px]  flex flex-col justify-start pt-10 gap-7 items-start bg-violet-400 rounded-xl">
            <div className="w-full flex flex-row justify-between items-center pr-14">
              <img src={line_icon} alt="line icon" className="h-1" />
              <img src={provider_icon} alt="provider icon" className="h-28" />
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="px-14 text-[36px] font-semibold">For Healthcare Providers</h3>
              <p className="px-14 text-[20px]">Your data can drive groundbreaking innovation in healthcare. Endpoint helps providers activate their data for both internal research and life sciences collaborations. </p>
            </div>
            <div className="w-full mt-12 border-t-2 border-black">
              <button className="w-[100%] h-[100%] px-14 pt-7 py-1 flex justify-start items-center font-extralight tracking-widest transition duration-150 ease-in-out text-black hover:opacity-80 hover:font-extrabold">
                <a href="">Learn more</a>
                <img src={chevron_icon} alt="chevron-button" className="h-6 px-3"/>
              </button>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
