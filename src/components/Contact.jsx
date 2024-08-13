import bg_image from "../assets/images/Background_contact.png"


export default function Contact() {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-[1000px]  bg-black flex flex-col justify-center items-start gap-4 px-14 pb-20 pt-5"
    style={{ backgroundImage: `url(${bg_image})` }}>
      <h6 className="text-white">CONTACT US</h6>
      <div className="w-[100%] border-t-2 border-white flex flex-col gap-20 justify-between items-start">

        {/* header section */}
        <h2 className="text-white text-[48px] mt-3">Let’s discuss how Endpoint can help you explore RWD like never before</h2>
      </div>

      {/* Content here */}
      <div className="mt-14 flex flex-col justify-center items-start gap-10">
        <h3 className="text-white text-[128px] leading-tight">Unlocking data. Uncovering insights.</h3>
        <button className="w-[13%] h-8 px-3 py-1 flex justify-center items-center font-semibold border border-white bg-white transition duration-150 ease-in-out text-black hover:opacity-90">CONTACT US</button>
      </div>
    </div>
)}
