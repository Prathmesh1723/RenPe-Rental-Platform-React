import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Better luck next time!</Popover.Header>
    <Popover.Body>
      Thank you showing interest in working with us. We will soon reach out to
      you when we are hiring!
    </Popover.Body>
  </Popover>
);

function jumbotron() {
  return (
    <div
      className="jumbotron col-md-12"
      style={{ paddingLeft: "50px", paddingRight: "50px" }}
    >
      <div className="h-100 p-5 bg-light border rounded-3">
        <h2>We are live all around the Globe!</h2>
        <h4>Why Choose us?</h4>
        <hr />
        <p>
          * Fast Listing Complete your listing in minutes, and it’ll be listed
          likely in 1 business day. <br />
          * Real Savings. No Hidden Fees Save an average of $15,000 selling your
          home. 0% seller agent commission. $0 at closing in most states.
          <br />
          * Cutting Edge Tech Complete your listing paperwork, make changes to
          your listing, even add open houses. All online.
          <br />* Easy Seller Disclosures Documentation is the #1 FSBO concern.
          We've made filing seller disclosures simple and all online!
        </p>
        <a className="btn btn-primary btn-lg" href="/howItWorks" role="button">
          How Rentpe Works{" "}
          <i className="fa-duotone fa-arrow-right-long-to-line"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success" style={{ padding: "12px" }}>
            Work with us?
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default jumbotron;
