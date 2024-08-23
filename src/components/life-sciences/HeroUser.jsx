import chevron_icon from "../../assets/images/ui/Chevron down black.svg"
import background from "../../assets/images/homepage/Background-colors.svg"


export default function HeroUser() {
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row">
        {/* First half */}
        <div className="h-[50%] md:w-[50%] md:h-auto bg-cover bg-center bg-repeat bg-black"
        style={{ backgroundImage: `url(${background})`}}>
        </div>

        {/* Second half */}
        <div className="h-[50%] md:w-[50%] md:h-auto bg-black max-md:border-t-[10px] border-blue-400 md:border-l-[20px] flex flex-col justify-start items-start md:justify-center md:items-start px-6 md:px-12 py-16 gap-8">
          {/* <h6 className="text-white font-semibold text-[40px] md:text-[60px] lg:text-[80px]">LifeSciences</h6> */}

          <h6 className="text-white tracking-widest sm:text-base md:text-[18px]">LIFE SCIENCES</h6>
          <p className="text-white font-semibold text-[28px] md:text-[24px] lg:text-[28px]">Discover and compliantly access fit-for-purpose RWD</p>
          <p className="text-white font-normal text-[15px] md:text-[14px] lg:text-[15px]">Endpoint is a powerful self-service platform for life sciences, enabling on-demand discovery of hundreds of curated RWD assets from leading healthcare organizations globally.</p>
           <button className="w-auto h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90">
          <a href="" className="flex items-center gap-2">
            READ MORE
            <img src={chevron_icon} alt="chevron-button" className="h-5"/>
          </a>
        </button>



        </div>
      </div>
    </>
  )
}
