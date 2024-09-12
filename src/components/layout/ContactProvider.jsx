import bg_image from "../../assets/images/homepage/Background_contact.png";
import chevron_icon from "../../assets/images/ui/Chevron down black.svg";
import SectionSeparatorWhite from "../../components/ui/SectionSeparator_white";

export default function ContactProvider() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full max-sm:h-auto max-sm:pb-20 h-screen flex flex-col justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:pt-20"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <SectionSeparatorWhite TitleSection="READY TO SIMPLIFY HOW YOU DISCOVER HEALTH DATA?" />

      <div className="w-full flex flex-col gap-10 md:gap-20 justify-between items-start">
        {/* header section */}
        <h2 className="text-white text-3xl lg:text-4xl leading-normal xl:leading-tight mt-3">
          Let’s discuss how Endpoint can help you securely share your data. Get
          the conversation started today.
        </h2>
      </div>

      {/* Content here */}
      <div className="mt-32 md:mt-14 flex flex-col justify-center items-start gap-8 md:gap-10">
        <h3 className="text-white text-[60px] max-xs:text-[40px] md:text-[70px] lg:text-[85px] font-medium">
          Unlocking data. Uncovering insights.
        </h3>
        <button className="w-auto h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90">
          <a href="/contact us" className="flex items-center gap-2">
            CONTACT US
            <img src={chevron_icon} alt="chevron-button" className="h-5" />
          </a>
        </button>
      </div>
    </div>
  );
}
