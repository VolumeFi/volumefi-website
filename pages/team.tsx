import React from "react";

import { TEAM } from "utils/constants";

const TeamMember = ({ data }) => (
  <div className="team-member-container">
    <div className="team-member-image-wrapper">
      <img className="team-member-image" src={data.photo} />
    </div>
    <span className="team-member-name">{data.name}</span>
    <span className="team-member-title">{data.title}</span>
  </div>
);

export default function Team({ state, router }) {
  return (
    <div className="page-container">
      <div className="team-page-container">
        <div className="team-page-top">
          <h2 className="team-page-top-title">Our Team</h2>
        </div>
        <div className="team-member-list">
          {TEAM.map((data, index) => (
            <TeamMember data={data} key={`team-member-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
