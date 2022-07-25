import React, { useEffect, useMemo } from "react";
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer";

import { convertDateStringWithWeekDay } from "utils/date";
// import mixpanel from "mixpanel-browser";
// mixpanel.init(process.env.MIXPANEL_API_KEY)

const UpcomingEvent = ({ data }) => {
  let regClicked = false;
  let eventClicked = false;

  // useEffect(() => {
  //   window.$ = window.jQuery = require("jquery");

  //   $("#event-register").click(function () {
  //     if (!regClicked) {
  //       regClicked = true;
  //       mixpanel.track("REGISTER_EVENT", eventLink.register_info);
  //       window.location = eventLink.register;
  //     }
  //   });
  // });

  const eventLink = useMemo(() => {
    const link = {
      register: "",
      register_info: null,
      learnMore: "",
      learnMore_info: null,
    };

    if ("Register" in data.content) {
      link.register = data.content.Register.url;
      link.register_info = data.content.Register;
    }

    if ("LearnMore" in data.content) {
      link.learnMore = data.content.LearnMore.url;
      link.learnMore_info = data.content.LearnMore;
    }

    return link;
  }, [data]);

  const openRegistration = () => {
    console.log("click");

    mixpanel.track("REGISTER_EVENT", eventLink.register_info);
    window.location = eventLink.register;
  };

  return (
    <div className="event-item-container">
      <div className="event-image-wrapper">
        <img src={data.content.Image.filename} className="event-image" />
      </div>
      <div className="event-section">
        <div className="event-date">
          {convertDateStringWithWeekDay(data.content.EventTime, true)}
        </div>
        <div className="event-description">
          {render(data.content.Description, {
            nodeResolvers: {
              [NODE_IMAGE]: (children, props) => (
                <img
                  {...props}
                  style={{ borderRadius: "0px", maxWidth: "100%" }}
                />
              ),
            },
            blokResolvers: {
              ["YouTube-blogpost"]: (props) => (
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={
                      "https://www.youtube.com/embed/" +
                      props.YouTube_id.replace("https://youtu.be/", "")
                    }
                  ></iframe>
                </div>
              ),
            },
          })}
        </div>
        <div className="event-spacer"></div>
        <div className="event-buttons">
          {eventLink.register !== "" && (
            <a
              href={eventLink.register}
              className="event-register"
              target="_blank"
            >
              Register
            </a>
          )}
          {eventLink.learnMore !== "" && (
            <a id="event-register" className="event-register" target="_blank">
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
