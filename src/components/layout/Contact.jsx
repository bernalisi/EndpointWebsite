import bg_image from "../../assets/images/homepage/Background_contact.png";
import chevron_icon from "../../assets/images/ui/Chevron down black.svg";
import SectionSeparatorWhiteBg from "../../components/ui/SectionSeparator_white";

export default function Contact() {
  return (
    <div
      className="relative w-full h-[600px] xl:h-screen sm:h-[850px] ld:h-[900px] flex flex-col justify-start items-start gap-8 px-8 sm:px-12 lg:px-16 pt-10 sm:pt-16 lg:pt-20 transition-all duration-500 ease-in-out group" // Added hover and transition classes
    >
      {/* Background image with default saturation */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 filter brightness-50 group-hover:brightness-95 saturate-[0.4] group-hover:saturate-[50%]"
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative z-10 xl:pt-20">
        <SectionSeparatorWhiteBg TitleSection="READY TO SIMPLIFY HOW YOU DISCOVER HEALTH DATA?" />

        <div className="relative w-full flex flex-col gap-10">
          {/* Header Section */}
          <h2 className="text-white text-[24px] lg:text-[40px] font-semibold leading-relaxed mt-6">
            Let’s discuss how Endpoint can help you explore RWD like never
            before
          </h2>
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col justify-center items-start gap-6">
          <h3 className="text-white text-[36px] md:text-[60px] lg:text-[100px] font-bold leading-tight pt-24 ld:pt-72">
            Unlocking data. Uncovering insights.
          </h3>
          <button className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3 transition duration-150 ease-in-out hover:opacity-90">
            <a href="/contact us" className="flex items-center gap-2">
              CONTACT US
              <img src={chevron_icon} alt="chevron-button" className="h-5" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
