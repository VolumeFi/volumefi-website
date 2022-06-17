import React from "react";

import { JOB_LINK } from "utils/constants";

export default function Careers({ state, router }) {
  return (
    <div className="page-container">
      <div className="careers-page-container">
        <div className="careers-page-top">
          <h1 className="careers-page-top-title">Careers</h1>
        </div>
        <iframe className="careers-job-list" src={JOB_LINK} />
      </div>
    </div>
  );
}
