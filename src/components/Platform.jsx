export default function Platform() {
  return (
    <div className="w-full bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 pt-5">
      <h6 className="text-white">PLATFORM</h6>
      <div className="w-[100%] border-t-2 border-white flex flex-col gap-5 justify-between items-start">

        {/* header section */}
        <h2 className="text-white text-[48px] mt-3">The largest ecosystem of RWD providers</h2>
        <p className="text-white text-[24px]">Our platform enables life sciences to search for and explore the most comprehensive collection of RWD assets from leading healthcare organizations worldwide.</p>

        {/* Cards */}

        <div className="w-full flex flex-row justify-evenly items-center gap-12 mt-14 mb-20">

          {/* Life Science */}
          <div className="w-[640px] h-[517px] p-5 flex flex-col justify-evenly items-start bg-blue-400 rounded-xl">
            <h3 className="px-14 text-[36px] font-semibold">For Life Sciences</h3>
            <p className="px-14 text-[22px]">Speed up observational research, facilitate deeper insights into diseases, enhance clinical trials, improve safety surveillance, streamline regulatory submissions, boost commercialization strategies. </p>
            <div className="px-14">
              <button className="tracking-widest hover:text-slate-100">Learn more</button>
            </div>
          </div>

          {/* Providers */}
          <div className="w-[640px] h-[517px] p-5 flex flex-col justify-evenly items-start bg-violet-400 rounded-xl">
            <h3 className="px-14 text-[36px] font-semibold">For Healthcare Providers</h3>
            <p className="px-14 text-[22px]">Your data can drive groundbreaking innovation in healthcare. Endpoint helps providers activate their data for both internal research and life sciences collaborations. </p>
            <div className="px-14">
              <button className="tracking-widest hover:text-slate-100">Learn more</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
