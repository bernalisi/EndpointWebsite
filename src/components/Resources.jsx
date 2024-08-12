export default function Resources() {
  const Resources = [
    {title: "Effects of the European Health Data Space" ,type: "BLOG"},
    {title: "5 steps for implementing a new data model in life sciences R&D", type: "whitepaper"},
    {title: "RWE framework for regulatory submissions in Europe", type: "WHITEPAPER"}]

  return (
    <div className="w-full h-[400px] bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 pt-5">
      <h6 className="text-white">RESOURCES</h6>
      <div className="w-[100%] border-t-2 border-white flex flex-col gap-20 justify-between items-start">
        {/* header section */}
        <h3 className="text-white text-[40px] mt-3">Check out our latest news and updates</h3>

        {/* list of articles */}
        <div className="flex flex-row justify-center items-center gap-10">
        {Resources.map((r)=> <div key={r} className="flex flex-col border-2 border-white text-white">
          <img src="" alt="" />
          <h6>{r.type}</h6>
          <p>{r.title}</p>
        </div>)}
        </div>
      </div>
    </div>  )
}
