import dot_separator from "../../assets/images/ui/Dot-separator.svg"

export default function Why() {
  const Whyes = [
    {title: "Instant discovery" ,description: "Browse our marketplace and find fit-for-purpose RWD at an instant", image: ""},
    {title: "Data quality", description: "View data quality index and compare datasets", image: ""},
    {title: "Data samples", description:  "Access data samples prior to purchase", image: ""},
    {title: "Synthetic data", description:  "Instantly access synthetic data for preliminary analysis and hypothesis generation", image: ""},
    {title: "Clean rooms", description:  "Collaborate and analyze collective datasets without sharing underlying data", image: ""}]

  return (
    <div className="w-full pt-10 bg-white flex flex-col justify-center items-start gap-4 px-14 pb-20">
      <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-black font-semibold">WHY ENDPOINT</h6>
      </div>

      <div className="w-[100%] flex flex-col gap-10 justify-between items-start">

        {/* Header section */}
        <h2 className="text-black text-[24px] mt-3">Our unique model allows us to instantly identify all relevant RWD sources</h2>

        <div className="w-full h-[600px] flex flex-row justify-center items-center gap-20">
          {Whyes.map((why) =>
          <div key={why} className="w-[200px] h-[330px] flex flex-col justify-start gap-7 text-white">
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
