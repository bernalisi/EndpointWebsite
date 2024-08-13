export default function Resources() {
  const Resources = [
    {title: "Effects of the European Health Data Space" ,type: "BLOG"},
    {title: "5 steps for implementing a new data model in life sciences R&D", type: "WHITEPAPER"},
    {title: "RWE framework for regulatory submissions in Europe", type: "WHITEPAPER"}]

  return (
    <div className="w-full bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 pt-5">
      <h6 className="text-white">RESOURCES</h6>
      <div className="w-[100%] border-t-2 border-white flex flex-col gap-20 justify-between items-start">
        {/* header section */}
        <h3 className="text-white text-[40px] mt-3">Check out our latest news and updates</h3>

        {/* list of articles */}
        <div className="w-full flex flex-row justify-evenly items-center gap-10">
          {Resources.map((r)=>
          <div key={r} className="w-[400px] h-[370px] flex flex-col justify-between gap-0 text-white">
            <div className="h-52 bg-slate-100"></div>
            <h6 className="text-[12px] font-light">{r.type}</h6>
            <p className="text-[24px] font-semibold">{r.title}</p>
            <button className="w-[35%] h-8 px-3 py-1 flex justify-center items-center font-semibold border border-white bg-white transition duration-150 ease-in-out text-black hover:opacity-90"> READ MORE</button>
          </div>)}
        </div>
      </div>
    </div>  )
}
