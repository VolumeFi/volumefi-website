import React from "react";

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
      <div className="event-spacer"></div>
      <div className="event-description">{data.content.Description}</div>
    </div>
  </div>
);

export default PastEvent;
