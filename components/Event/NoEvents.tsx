import React from "react";

import { VOLUME_COMMUNITY, VOLUME_TWITTER } from "utils/constants";

const NoEvents = () => (
  <div className="no-events-container">
    <p>
      Nothing Here!
      <br />
      join our Community and Stay updated.
    </p>
    <div className="no-events-buttons">
      <a href={VOLUME_TWITTER} target="_blank">
        Twitter
      </a>
      <a href={VOLUME_COMMUNITY} target="_blank">
        Discord
      </a>
    </div>
  </div>
);

export default NoEvents;
