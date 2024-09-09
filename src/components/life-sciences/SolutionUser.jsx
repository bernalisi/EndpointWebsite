import {useState} from 'react'
import SectionSeparator from "../../components/ui/SectionSeparatorWhiteBg"

export default function SolutionUser() {
  const [defaultSolution, setDefaultSolution] = useState(1)

  const solutionNavigation = {
    1: {title: "1. Data Discovery & Search", description: "Effortlessly search, filter, and save fit-for-purpose datasets from a wide network of data providers, using advanced filtering options to locate the most relevant data for your research."},
    2: {title: "2. Data Quality Assessment", description: "Preview key quality metrics such as completeness, consistency, and relevance before purchasing datasets, ensuring high-quality data that meets your research standards."},
    3: {title: "3. Synthetic Data Sandbox", description: "Test hypotheses and refine methodologies in a risk-free, compliant environment using synthetic data, allowing you to experiment and validate research approaches before committing to full datasets."}
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-start xl:justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 xl:mt-10">
     <SectionSeparator TitleSection="OUR SOLUTIONS FOR LIFE SCIENCES"/>

      <div className="w-[100%] flex flex-col gap-10 justify-between items-start">
        {/* Header section */}
        <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] mt-3">Discover, compare, access RWD with just a few clicks</h2>
        <p className="text-black text-base sm:text-lg lg:text-xl xl:text-[24px] max-sm:pb-20">Our platform empowers life sciences to explore and search through more than 200 real-world data sources globally, helping you understand which datasets can answer research questions across the product lifecycle.</p>

        <div className="w-[100%] h-auto flex flex-col justify-start items-center pt-10 gap-10">
          <div className="w-[100%] flex flex-row justify-around items-center gap-20">
            {Object.keys(solutionNavigation).map((key) =>

            <button
              className={`w-[18%] pt-4 border-t-2 ${defaultSolution === Number(key) ? 'text-violet-900 font-semibold border-violet-900' : 'text-black border-black'} text-start hover:text-violet-900 hover:font-semibold hover:border-violet-900`}
              key={key}
              onClick={() => setDefaultSolution(Number(key))}>
              {solutionNavigation[key].title}
            </button>)

            }
          </div>
          <div className="mt-20">
            <p className="w-[100%] max-md:text-center text-black lg:text-[25px] xl:text-[32px] md:text-[20px] sm:text-[15px] font-normal pt-5 leading-normal text-justify">
              {solutionNavigation[defaultSolution].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
