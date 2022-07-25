import React from "react";
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer";

import { convertDateStringWithWeekDay } from "utils/date";

const PastEvent = ({ data }) => (
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
    </div>
  </div>
);

export default PastEvent;
