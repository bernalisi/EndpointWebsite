import chevron_down from "../../assets/images/ui/Chevron down white.svg"
import background from "../../assets/images/homepage/Background_contact.png"

export default function HeroUser() {
  return (
    <div className="bg-cover bg-center bg-no-repeat flex flex-row justify-end"
    style={{ backgroundImage: `url(${background})` }}>
      {/* <img src={lines} alt="lines" className="absolute left-1 h-100"/> */}
      <div className="w-[48%] h-[800px] bg-blue-400 bg-opacity-50 pr-7 flex justify-center items-end flex-col gap-6">
        {/* First paragraph */}
        <h1 className="w-[700px] pr-8 text-justify text-white lg:text-[80px] md:text-[40px] sm:text-[30px] font-semibold leading-tight">Life Sciences</h1>

        {/* Second paragraph */}
        <a className="w-[700px] pr-8 text-justify text-white lg:text-[36px] sm:text-[10px] sm:text-[7.5] font-normal pt-5 leading-tight">Navigate the most extensive universe of RWD sources to unleash the  the full potential of observational research.</a>
        <div className="w-[700px] pr-20 flex flex-row justify-center">
          <img src={chevron_down} alt="chevron down icon" className="h-12 rotate-90" />
        </div>
      </div>
    </div>
  )
}
