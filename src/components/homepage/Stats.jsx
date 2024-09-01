import dot_separator from "../../assets/images/ui/Dot-separator.svg"
import line_icon from "../../assets/images/ui/Line_icon_white.svg"

export default function Stats() {
  const Statistics = [
    { type: "Data Providers", data: 200 },
    { type: "Patients", data: "1,000,000" },
    { type: "Countries", data: 50 },
  ];

  return (
    <div className="w-full h-auto bg-black flex flex-col justify-start items-start gap-4 px-6 mb-20 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:py-20">

      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-white text-sm md:text-base">UNLOCKING DISCOVERY</h6>
      </div>

      <div className="w-full flex flex-col gap-10 justify-between items-start">

        {/* header section */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] mt-3">
          Global, High-Quality RWD Ecosystem
        </h2>

        {/* Content of section */}
        <div className="flex flex-col gap-10 md:gap-12 items-start">
          {Statistics.map((s) => (
            <div key={s.type} className="flex flex-col justify-center items-start md:items-start gap-1 text-center md:text-left">
              <p className="text-white text-[60px] md:text-[70px] lg:text-[85px] font-medium">{`${s.data}+`}</p>
              <img src={line_icon} alt="line icon" className="h-1 my-2" />
              <h6 className="text-white text-xl md:text-2xl font-extralight">{s.type}</h6>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
