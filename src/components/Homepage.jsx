

export default function Homepage() {
  return (
    <div>
      <div className="w-full pt-44 pb-[333px] px-14 bg-black flex justify-start items-start flex-col gap-8">
        {/* First paragraph */}
        <h1 className="w-[600px] text-white lg:text-[60px] md:text-[40px] sm:text-[30px] font-semibold leading-tight">The one-stop shop for all your RWD needs</h1>

        {/* Second paragraph */}
        <a className="w-[600px] text-white lg:text-[15px] sm:text-[10px] sm:text-[7.5] font-normal pt-5 border-t-2 border-white leading-relaxed">Endpoint is a powerful self-service platform for life sciences, enabling on-demand discovery of hundreds of curated RWD assets from leading healthcare organizations globally. Researchers can quickly find relevant multimodal RWD for observational studies, assess quality, compare data assets, use data samples, and request access with just a few clicks. </a>
      </div>


      <div className="w-full h-[500px] relative bg-black">
      </div>
    </div>
  )
}
