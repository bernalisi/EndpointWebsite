import Logo from "../../assets/logos/Endpoint logo black dot purle.svg"

export default function Navbar() {
const Navigation = ['LIFE SCIENCES', 'PROVIDERS', 'RESOURCES']


  return (
  <div className=" sticky top-0 w-full h-16 flex items-center justify-between bg-white border border-white px-6">
    <div className="flex items-center space-x-14">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-11"/>
        </a>
      </div>

      {/* Navigation Menu */}
      <ul className="flex space-x-4">
        {Navigation.map((e) => (
          <li key={e}>
            <a href={`${e}`} className="text-black hover:text-violet-900 font-medium">
              {e}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Buttons */}
    <div className="flex space-x-4">
      <button className="h-8 px-5 py-1 flex items-center font-semibold border border-black transition duration-150 ease-in-out hover:bg-black hover:text-white">
        LOG IN
      </button>
      <button className="h-8 px-5 py-1 flex items-center font-semibold bg-violet-900 text-white hover:opacity-70 transition duration-150 ease-out">
        BOOK DEMO
      </button>
    </div>
</div>
  )
}
