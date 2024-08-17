import dot_separator from "../../assets/images/ui/Dot-separator.svg"

export default function WhyProvider() {
  return (
    <div className="w-full pt-10 bg-white flex flex-col justify-center items-start gap-4 px-14 pb-20">
    <div className="flex flex-row justify-start items-center gap-2">
      <img src={dot_separator} className="h-4" />
      <h6 className="text-black font-semibold">SECURITY & PRIVACY</h6>
    </div>
    </div>
  )
}
