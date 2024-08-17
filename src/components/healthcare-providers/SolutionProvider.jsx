import dot_separator from "../../assets/images/ui/Dot-separator.svg"

export default function SolutionProvider() {
  return (
    <div className="w-full bg-black pt-10 flex flex-col justify-center items-start gap-4 px-14 pb-20">
    <div className="flex flex-row justify-start items-center gap-2">
      <img src={dot_separator} className="h-4" />
      <h6 className="text-white font-semibold">OUR SOLUTIONS FOR LIFE SCIENCES</h6>
    </div>
    </div>
  )
}
