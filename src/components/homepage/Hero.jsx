import chevron_down_white from "../../assets/images/ui/Chevron down white.svg"
import chevron_down_black from "../../assets/images/ui/Chevron down black.svg"
import background from "../../assets/images/homepage/Ball_elements_violet.svg"

export default function Hero() {
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-repeat bg-black flex flex-row"
    style={{ backgroundImage: `url(${background})`}}>

      <div className="w-screen h-screen mt-[60px] px-2 sm:px-6 lg:px-8 pt-32 pb-[333px] flex max-md:items-center max-sm:justify-end items-start flex-col gap-6">
        {/* First paragraph */}
        <h1 className="w-[100%] lg:w-[60%] xl:w-[55%] text-white px-4 xl:text-[70px] lg:text-[70px] md:text-[60px] sm:text-[50px] text-[40px] max-sm:text-left max-md:text-center font-semibold leading-tight">The one-stop shop for all your RWD needs</h1>

        {/* Second paragraph */}
        <a className="w-[75%] md:w-[90%] lg:w-[60%] xl:w-[55%] px-4 max-sm:hidden max-md:text-center text-white lg:text-[20px] md:text-[20px] sm:text-[15px] font-normal pt-5 leading-relaxed">
        Endpoint is a powerful self-service platform for life sciences, enabling quick discovery and access to curated healthcare data from leading organizations worldwide, streamlining research and data analysis for observational studies with just a few clicks.</a>
        <div className="w-[50%] max-sm:w-[100%] max-sm:px-5 flex flex-row justify-center max-sm:justify-start">
          <img src={chevron_down_white} alt="chevron down icon" className="h-16 max-sm:hidden md:h-12 rotate-90" />
          <button className="sm:hidden w-auto h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90">
            <a href="" className="flex items-center gap-2">
              READ MORE
              <img src={chevron_down_black} alt="chevron-button" className="h-5"/>
            </a>
           </button>



        </div>
      </div>

    </div>
  )
}
