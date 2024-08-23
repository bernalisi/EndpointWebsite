import dot_separator from "../../assets/images/ui/Dot-separator.svg"

export default function Why() {
  const Whyes = [
    {title: "Instant discovery" ,description: "Browse our marketplace and find fit-for-purpose RWD at an instant", image: ""},
    {title: "Data quality", description: "View data quality index and compare datasets", image: ""},
    {title: "Data samples", description:  "Access data samples prior to purchase", image: ""},
    {title: "Synthetic data", description:  "Instantly access synthetic data for preliminary analysis and hypothesis generation", image: ""},
    {title: "Clean rooms", description:  "Collaborate and analyze collective datasets without sharing underlying data", image: ""}]

  return (
    <div className="w-full xl:h-screen h-auto bg-white flex flex-col justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:pt-20 pb-20">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-black font-normal">WHY ENDPOINT</h6>
      </div>

      <div className="w-[100%] flex flex-col gap-10 justify-between items-start">

        {/* Header section */}
        <h2 className="text-black text-[24px] mt-3">Our unique model allows us to instantly identify all relevant RWD sources</h2>

        <div className="w-full h-auto flex flex-wrap flex-col lg:flex-row justify-center items-center gap-20 pt-20">
          {Whyes.map((why, index) =>
          <div key={why + index} className="max-xs:w-[60%] w-[45%] lg:w-[200px] lg:h-[330px] flex flex-col justify-start gap-7 text-white">
            <div className="h-52 bg-slate-300"></div>
            <div className="flex flex-col gap-2">
              <h6 className="text-[20px] semi-bold font-light text-black">{why.title}</h6>
              <p className="text-[12px] font-light text-black">{why.description}</p>
            </div>
          </div>
          )}

        </div>
      </div>
    </div>
  )
}
