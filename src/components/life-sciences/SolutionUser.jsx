import dot_separator from "../../assets/images/ui/Dot-separator.svg"
import solution from "../../assets/images/life-sciences/ls-solution.svg"

export default function SolutionUser() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-start xl:justify-center items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-20">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-black">OUR SOLUTIONS FOR LIFE SCIENCES</h6>
      </div>

      <div className="w-[100%] flex flex-col gap-10 justify-between items-start">
        {/* Header section */}
        <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] mt-3">Search through +200 real-world data sources globally</h2>
        <p className="text-black text-base sm:text-lg lg:text-xl xl:text-[24px] max-sm: pb-20">Endpoint covers the whole product lifecycle, helping you understand which datasets can answer what research questions across the product lifecycle.</p>

        <div className="w-[100%] flex flex-row justify-evenly pt-10">
          <img src={solution} alt="solution" className="h-[90%]"/>
        </div>
      </div>
    </div>
  )
}
