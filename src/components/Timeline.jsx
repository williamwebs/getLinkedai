import { timeline, timelineMobile } from "../constants";

const Timeline = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <h3 className="heading__3 text-center clash700">Timeline</h3>
      <span className="block paragraph__2 text-center w-full md:w-1/3 mx-auto px-2 -mt-4">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </span>

      {/* desktop */}
      <div className="hidden md:block timeline my-10">
        {timeline.map((i) => (
          <div className="grid grid-cols-9 my-2">
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-transparent mt-16">
                <h3 className="text-lightPurple font-Montserrat font-bold text-[24px] leading-[29.26px] text-right">
                  {i.left.text}
                </h3>
                {i.left.content ? (
                  <p className="paragraph__2 text-right my-2">
                    {i.left.content}
                  </p>
                ) : (
                  <p className="paragraph__2 text-right my-2"></p>
                )}
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-end">
              <div className="h-full w-1 bg-lightPurple"></div>
              <div className="absolute w-12 h-12 rounded-full bg-darkPurple z-10 flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-full bg-lightPurple z-10 text-primary font-Montserrat font-bold text2xl flex items-center justify-center">
                  {i.number}
                </div>
              </div>
            </div>
            <div className="col-span-4 w-full h-full mt-16">
              <div className="w-full h-full bg-transparent">
                <h3 className="text-lightPurple font-Montserrat font-bold text-[24px] leading-[29.26px] text-left">
                  {i.right.text}
                </h3>
                {i.right.content ? (
                  <p className="paragraph__2 text-left my-2">
                    {i.right.content}
                  </p>
                ) : (
                  <p className="paragraph__2 text-right my-2"></p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="timeline mt-10 md:hidden">
        {timelineMobile.map((i) => (
          <div className="grid mb-4 grid-cols-5">
            <div className="relative col-span-1 w-full h-full flex justify-center items-end">
              <div className="h-full w-1 bg-lightPurple"></div>
              <div className="absolute w-10 h-10 rounded-full bg-darkPurple z-10 flex items-center justify-center">
                <div className="absolute w-6 h-6 rounded-full bg-lightPurple z-10 text-primary font-Montserrat font-bold text-sm flex items-center justify-center">
                  {i.numbeer}
                </div>
              </div>
            </div>
            <div className="col-span-4 w-full h-full">
              <div className="w-full h-full bg-transparent">
                <h3 className="text-lightPurple font-Montserrat font-bold text-[12px] leading-[14px] text-left">
                  {i.text}
                </h3>
                <p className="font-Montserrat font-normal text-[12px] leading-[18px] text-primary text-left my-1">
                  {i.content}
                </p>
                <h3 className="text-lightPurple font-Montserrat font-bold text-[12px] leading-[14px] text-left">
                  {i.date}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
