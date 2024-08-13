export default function Stats() {
  const Statistics = [
    {type: "Data Providers", data: 200},
    {type: "Patients", data: "1,000,000,000"},
    {type: "Countries", data: 50},]


  return (
    <div className="w-full bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 pt-5">
      <h6 className="text-white">UNLOCKING DISCOVERY</h6>
      <div className="w-[100%] border-t-2 border-white flex flex-col gap-20 justify-between items-start">

        {/* header section */}
        <h2 className="text-white text-[48px] mt-3">Global, High-Quality RWD Ecosystem</h2>

        {/* Content of section */}
        <div className="flex flex-col gap-10">
          {Statistics.map((s) =>
          <div key={s} className="flex flex-col justify-center">
            <p className="text-white text-[128px] font-medium">{`${s.data}+`}</p>
            <h6 className="text-white text-[36px] font-extralight">{s.type}</h6>
          </div> )}
        </div>

      </div>
    </div>
  )
}
