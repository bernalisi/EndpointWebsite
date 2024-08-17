import dot_separator from "../../assets/images/ui/Dot-separator.svg"
import solution from "../../assets/images/life-sciences/ls-solution.svg"

export default function Solution() {
  return (
    <div className="w-full pt-10 bg-white flex flex-col justify-center items-start gap-4 px-14 pb-20">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-black font-semibold">OUR SOLUTIONS FOR LIFE SCIENCES</h6>
      </div>


      <div className="w-[100%] flex flex-col gap-20 justify-between items-start">

        {/* Header section */}
        <h2 className="text-black text-[24px] mt-3">Our platform empowers life sciences to explore and search through more than 200 real-world data sources globally, helping you understand which datasets can answer research questions across the product lifecycle.</h2>

        <dir className="w-[100%] flex flex-row justify-center">
          <img src={solution} alt="solution" className=""/>
        </dir>
      </div>
    </div>
  )
}
