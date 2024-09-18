import ContactForm from "../components/contact-us/ContactForm";
import CallUsIcon from "../assets/images/ui/CallUsIcon.svg";
import background from "../assets/images/homepage/Snake_violet.svg"; // Replace with your background image path

export default function ContactUs() {
  return (
    <div
      className="bg-black bg-center w-full min-h-[1100px] max-h-auto lg:min-h-[1200px] lg:max-h-auto flex flex-col justify-start items-center lg:flex-row lg:items-start lg:justify-evenly lg:pt-40 gap-10 lg:gap-0 pt-20 pb-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "185%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <ContactForm />

      <div className="flex flex-col w-full lg:w-[30%] gap-2 items-center">
        <div className="w-[90%] lg:w-[100%] flex flex-col justify-start lg:justify-start text-white">
          <h1 className="text-[50px] font-normal">Find us</h1>
        </div>
        <div className="w-[90%] lg:w-[100%] bg-gray-50 p-10 flex flex-col gap-10">
          <div className="h-[130px]">
            <h6 className="font-bold text-[22px] max-xs:text-[20px]">
              Endpoint - Europe Office
            </h6>
            <p>Florence, Italy</p>
            <p>Via Giovanni Pico Della Mirandola, 8, 50132</p>
            <a
              href="tel: 393315878083"
              className="w-[40%] lg:w-[40%] xl:w-[30%] flex items-center gap-2 mt-3 hover:border-b-2 hover:border-violet-900 hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <p className="text-violet-900 font-semibold text-[20px]">
                Call Us
              </p>
              <img src={CallUsIcon} alt="call us icon" className="h-4" />
            </a>
          </div>
          <div className="lg:mt-10 xl:mt-0">
            <h6 className="font-bold text-[22px] max-xs:text-[20px]">
              Endpoint - US Office
            </h6>
            <p>Dover, Delaware</p>
            <p>8 The Green, Ste R, 19901</p>
          </div>
        </div>
      </div>
    </div>
  );
}
