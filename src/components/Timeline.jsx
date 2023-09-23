import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <section className="container mx-auto md:px-20 py-0 relative">
      <h3 className="heading__3 text-center">Timeline</h3>
      <span className="block paragraph__2 text-center w-full md:w-1/3 mx-auto px-2 -mt-4">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </span>

      <div className="timeline">
        <VerticalTimeline className="py-24">
          <VerticalTimelineElement
            className="vertical__timeline"
            contentStyle={{
              background: "transparent",
              color: "rgba(212, 52, 254, 1)",
            }}
            contentArrowStyle={{ borderRight: "none" }}
            date={<span className="custom__date">November 18, 2023</span>}
            iconStyle={{
              background: "rgba(212, 52, 254, 1)",
              borderRadius: "0%",
              width: "30px",
              height: "30px",
              transform: "translateX(50%)",
              outline: "none",
              marginTop: "2px",
              marginBottom: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0",
            }}
            textClassName="text"
            icon="1"
          >
            <h3 className="text-lightPurple font-Montserrat font-bold text-[24px] leading-[29.26px] text-right">
              Hackathon Announcement
            </h3>
            <p className="paragraph__2 text-right">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
