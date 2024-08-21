import chevron_down from "../../assets/images/ui/Chevron down white.svg"
import background from "../../assets/images/homepage/Central-bubble.svg"

export default function Hero() {
  return (
    <div className="w-screen h-screen bg-cover bg-center bg-no-repeat bg-black flex flex-row"
    style={{ backgroundImage: `url(${background})`}}>

      <div className="w-screen h-screen mt-[60px] px-2 sm:px-6 lg:px-8 pt-32 pb-[333px] flex max-md:items-center max-sm:justify-end items-start flex-col gap-6">
        {/* First paragraph */}
        <h1 className="w-[100%] lg:w-[60%] xl:w-[55%] text-white px-4 xl:text-[70px] lg:text-[70px] md:text-[60px] sm:text-[50px] text-[40px] max-md:text-center font-extralight leading-tight">The one-stop shop for all your RWD needs</h1>

        {/* Second paragraph */}
        <a className="w-[75%] md:w-[90%] lg:w-[60%] xl:w-[55%] px-4 max-sm:hidden max-md:text-center text-white lg:text-[17px] md:text-[20px] sm:text-[15px] font-normal pt-5 leading-relaxed">Endpoint is a powerful self-service platform for life sciences, enabling on-demand discovery of hundreds of curated RWD assets from leading healthcare organizations globally. </a>
        <a className="w-[60%] xl:w-[55%] px-4 max-lg:hidden max-md:text-center text-white lg:text-[17px] sm:text-[15px] font-normal leading-relaxed">Researchers can quickly find relevant multimodal RWD for observational studies, assess quality, compare data assets, use data samples, and request access with just a few clicks. </a>
        <div className="w-[50%] flex flex-row justify-center">
          <img src={chevron_down} alt="chevron down icon" className="h-16 md:h-12 rotate-90" />
        </div>
      </div>

    </div>
  )
}
