import SectionSeparator from "../ui/SectionSeparatorWhiteBg";

export default function WhyProvider() {
  const reasons = [
    {
      title: "Accelerate medical research",
      img: "/medicalresearch.svg",
    },
    {
      title: "Unlock new revenue streams",
      img: "/moneymaking.svg",
    },
    {
      title: "Stay in control of your data",
      img: "/controldata.svg",
    },
    {
      title: "Seamless data sharing",
      img: "/sharedata.svg",
    },
    {
      title: "Ensure full compliance",
      img: "/compliance.svg",
    },
  ];

  return (
    <div className="w-full lg:h-[900px] bg-white flex flex-col justify-center ld:justify-start items-start gap-4 px-6 sm:px-10 lg:px-14 pt-10 sm:pt-16 lg:pt-20 ld:pt-20">
      <SectionSeparator TitleSection="KEY BENEFITS" />

      {/* Title & Paragraph */}
      <div className="w-full flex flex-col gap-6 justify-between items-start">
        <h3 className="text-black text-[28px] lg:text-[48px] font-semibold mt-3 py-[20px]">
          Why join Endpoint?
        </h3>
        <p className="text-black text-base sm:text-lg lg:text-xl xl:text-2xl mb-8">
          Become part of a network where your data fuels life-saving research
          while keeping you in control of who accesses it, how it&apos;s used,
          and for what purpose
        </p>
      </div>
      <div className="lg:h-[80%] xl:h-[100%] ld:gap-20 flex flex-wrap justify-center items-center w-full">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center p-4 xl:gap-5"
          >
            {/* Image container with subtle background color and smaller size */}
            <div className="bg-violet-400 w-16 h-16 xl:w-20 xl:h-20 flex rounded-md justify-center items-center mb-2 p-1">
              <img
                src={reason.img}
                alt={reason.title}
                className="w-12 h-12 xl:w-16 xl:h-16 object-contain" // Smaller image size
              />
            </div>
            <h3 className="text-black text-sm sm:text-base lg:text-lg xl:text-2xl xmax-w-[175px] font-medium">
              {reason.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
