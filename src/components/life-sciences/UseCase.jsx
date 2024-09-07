import json from "../../../public/use_cases.json"

export default function UseCase({defaultUseCase}) {

  // load the right use case to dislay
  const selectedUseCase = json.UseCases[defaultUseCase]
  const jsonKeys = Object.keys(selectedUseCase)

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="w-[85%] h-[500px] overflow-y-scroll flex flex-col justify-start items-start bg-white border-[1.5px] border-black mt-20">

      {/* Use Case */}
      <p className="m-7 px-4 py-1 bg-black text-white rounded-full">Use Case</p>
      <div className="mx-7">
        <h4 className="text-[48px] font-semibold">{selectedUseCase.title}</h4>
        <h6 className="text-[32px] font-normal">{selectedUseCase.sub_title}</h6>
      </div>
      <div className="m-7 flex flex-row justify-start items-start gap-10">
        <p className="text-violet-900 text-[24px] font-medium">{capitalizeFirstLetter(jsonKeys[2])}</p>
        <p className="text-[20px]">{selectedUseCase.client}</p>
      </div>
      <div className="m-7 flex flex-row justify-start items-start gap-10">
        <p className="text-violet-900 text-[24px] font-medium">{capitalizeFirstLetter(jsonKeys[3])}</p>
        <p className="text-[20px]">{selectedUseCase.challenge}</p>
      </div>
      <div className="m-7 flex flex-row justify-start items-start gap-10">
        <p className="text-violet-900 text-[24px] font-medium">{capitalizeFirstLetter(jsonKeys[4])}</p>
        <p className="text-[20px]">{selectedUseCase.solution}</p>
      </div>
      <div className="m-7 flex flex-row justify-start items-start gap-10">
        <p className="text-violet-900 text-[24px] font-medium">{capitalizeFirstLetter(jsonKeys[5])}</p>
        <p className="text-[20px]">{selectedUseCase.outcome}</p>
      </div>
      <div className="m-7 flex flex-row justify-start items-start gap-10">
        <p className="text-violet-900 text-[24px] font-medium">{capitalizeFirstLetter(jsonKeys[6])}</p>
        <p className="text-[20px]">{selectedUseCase.benefits}</p>
      </div>
      <p className="m-7 px-4 py-1 text-[24px] text-black rounded-full font-bold">Ready to execute more efficient and comprehensive RWE studies?
      Explore how Endpoint can help streamline your health economics research and drive faster, smarter outcomes. Contact us today for a demo!</p>

    </div>
  )
}
