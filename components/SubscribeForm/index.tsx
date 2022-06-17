import React from "react";

import Button from "components/Button";

const SubscribeForm = () => (
  <div className="subscribe-form-container">
    <div className="join">Join our newsletter</div>
    <div className="cc">CROSS-CHAIN</div>
    <div className="weekly">WEEKLY</div>
    <p className="content">
      Each week, we’ll share resources related to cross chain development to
      keep you informed and bring you one step closer on your journey from
      blockchain engineer to crosschain engineer.
    </p>
    <div className="email-box">
      <input className="email-box-input" type="text" placeholder="Join the Cross Chain Coalition"/>
      <Button className="submit">
        Subscribe
      </Button>
    </div>
  </div>
);

export default SubscribeForm;
