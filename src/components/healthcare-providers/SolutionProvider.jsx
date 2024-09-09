import SectionSeparator from "../../components/ui/SectionSeparatorWhiteBg"
import UseCaseProvider from "../../components/healthcare-providers/UseCaseProvider"
import {useState} from "react"

export default function SolutionProvider() {

  const [defaultKey, setDefaultKey] = useState(1)
  const useCaseNavigation = {
    1: {title: "Synthetic Data Creation"},
    2: {title: "Visibility to Top Researchers"},
    3: {title: "Test Feasibility"},
    4: {title: "Transition to Real Data"},
    5: {title: "Secure Data Sharing"},
  }



  return (
    <div className="w-full h-auto bg-white flex flex-col justify-start xl:justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
      <SectionSeparator TitleSection="OUR SOLUTIONS HEALTHCARE PROVIDERS"/>

      {/* Title & Paragraph */}
      <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] mt-3">The largest ecosystem of RWD providers</h2>
      <p className="text-black text-base sm:text-lg lg:text-xl xl:text-[24px]">Our platform enables life sciences to search for and explore the most comprehensive collection of RWD assets from leading healthcare organizations worldwide.</p>

      <div className="flex flex-row justify-start gap-10">

        <div className="sticky top-32 w-[30%] h-[600px] mt-20 flex-col justify-start items-start gap-3">
          {/* Navigation */}

          {Object.keys(useCaseNavigation).map((key) =>
            <button
              key={key}
              onClick={() => setDefaultKey(Number(key))}
              className={defaultKey === Number(key) ? "border-l-4 border-violet-900 text-violet-900 py-4 px-4" : "border-l-4 hover:border-violet-900 hover:text-violet-900 py-4 px-4"}>
              {useCaseNavigation[key].title}
            </button>)
          }
        </div>

        <UseCaseProvider defaultKey={defaultKey}/>
      </div>
    </div>
  )
}
