import background from "../assets/images/homepage/Background-colors.svg"


// Pseudo code
// 1) static frontend
// 2) creating a variable to store values from the input fields -> useState
// 3) selecting the input fields and add proper event listener to it
// 4)

export default function ContactUs() {
  // const [inputValue, setInputValue] = useState(false)

  // const grabInputValue = () => {
  //   setInputValue=
  // }


  return (
    <div className="bg-cover bg-center bg-repeat w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-5 pt-20 pb-20"
    style={{ backgroundImage: `url(${background})`}}>

      {/* Information section */}
      <div className="w-[90%] lg:w-[30%] flex flex-col justify-start text-white">
        <h1 className="text-[50px] font-normal">Contact us</h1>
      </div>

      {/* Form section */}
      <div className="w-[95%] lg:w-[40%] bg-gray-50 p-10">
        <form className="flex flex-col gap-5 justify-start items-star">

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> FIRST NAME
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> LAST NAME
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> CATEGORY
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> EMAIL
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> ORGANIZATION
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> COUNTRY
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>

          <label className="flex flex-col gap-2 justify-start items-stretch text-[15px] font-semibold"> COMMENTS
            <input className="bg-white px-6 h-14 py-1 border border-gray-400" type="text" />
          </label>
        </form>

        <button className="bg-violet-900 text-white text-[17px] px-4 py-1 mt-10 tracking-widest font-semibold">SUBMIT</button>

      </div>
    </div>
  )
}
