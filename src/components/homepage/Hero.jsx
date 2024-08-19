import chevron_down from "../../assets/images/ui/Chevron down white.svg"
import background from "../../assets/images/homepage/Central-bubble.svg"

export default function Hero() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-black flex flex-row"
    style={{ backgroundImage: `url(${background})`}}>

      <div className="w-full pt-32 pb-[333px] pl-20 flex justify-start items-start flex-col gap-6">
        {/* First paragraph */}
        <h1 className="w-[700px] text-white lg:text-[80px] md:text-[40px] sm:text-[30px] font-semibold leading-tight">The one-stop shop for all your RWD needs</h1>

        {/* Second paragraph */}
        <a className="w-[600px] text-white lg:text-[17px] sm:text-[10px] sm:text-[7.5] font-normal pt-5 border-t-2 border-white leading-relaxed">Endpoint is a powerful self-service platform for life sciences, enabling on-demand discovery of hundreds of curated RWD assets from leading healthcare organizations globally. </a>
        <a className="w-[600px] text-white lg:text-[17px] sm:text-[10px] sm:text-[7.5] font-normal leading-relaxed">Researchers can quickly find relevant multimodal RWD for observational studies, assess quality, compare data assets, use data samples, and request access with just a few clicks. </a>
        <div className="w-[600px] flex flex-row justify-center">
          <img src={chevron_down} alt="chevron down icon" className="h-12 rotate-90" />
        </div>
      </div>

    </div>
  )
}
