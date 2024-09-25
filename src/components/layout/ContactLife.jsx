import bg_image from "../../assets/images/homepage/Background_contact.png";
import chevron_icon from "../../assets/images/ui/Chevron down black.svg";
import SectionSeparatorWhite from "../ui/SectionSeparator_white";

export default function Contact() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full max-sm:h-auto max-sm:pb-20 h-[500px] flex flex-col justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:pt-20"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <SectionSeparatorWhite TitleSection="READY TO SIMPLIFY HOW YOU DISCOVER HEALTH DATA?" />

      <div className="w-full flex flex-col justify-between items-start">
        {/* Header Section */}
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold">
          Partner with Endpoint
        </h2>
        <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 mt-4 w-10/12">
          Join us as we build the future of healthcare data for life sciences.
          Get early access to our platform, and discover how Endpoint will
          transform how you access and use health data to drive innovation.
        </p>
      </div>

      {/* Updated Content Section */}
      <div className="mt-32 md:mt-14 ld:mt-60 flex flex-col justify-center items-start gap-8 md:gap-10">
        <button className="w-auto ld:h-14 ld:ml-4 h-10 flex px-4 items-center justify-start font-semibold bg-white text-black transition duration-150 ease-in-out hover:opacity-90">
          <a href="/contact us" className="flex items-center gap-2">
            CONTACT US
            <img src={chevron_icon} alt="chevron-button" className="h-5" />
          </a>
        </button>
      </div>
    </div>
  );
}
