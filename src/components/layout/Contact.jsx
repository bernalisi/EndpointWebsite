import bg_image from "../../assets/images/homepage/Background_contact.png"
import dot_separator from "../../assets/images/ui/Dot-separator-white.svg"
import chevron_icon from "../../assets/images/ui/Chevron down black.svg"

export default function Contact() {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-screen  bg-black flex flex-col justify-center items-start gap-4 px-14"
    style={{ backgroundImage: `url(${bg_image})` }}>

       <div className="flex flex-row justify-start items-center gap-2">
        <img src={dot_separator} className="h-4" />
        <h6 className="text-white">READY TO SIMPLIFY HOW YOU DISCOVER HEALTH DATA?</h6>
      </div>

      <div className="w-[100%] border-t-2 border-white flex flex-col gap-20 justify-between items-start">

        {/* header section */}
        <h2 className="text-white text-[48px] mt-3">Let’s discuss how Endpoint can help you explore RWD like never before</h2>
      </div>

      {/* Content here */}
      <div className="mt-14 flex flex-col justify-center items-start gap-10">
        <h3 className="text-white text-[128px] leading-tight">Unlocking data. Uncovering insights.</h3>
        <button className="w-[12%] h-8 pl-3 py-5 flex justify-end items-center font-semibold border border-white bg-white transition duration-150 ease-in-out text-black hover:opacity-90">
          <a href="">CONTACT US</a>
          <img src={chevron_icon} alt="chevron-button" className="h-5 px-3"/>
        </button>
      </div>

    </div>
)}
