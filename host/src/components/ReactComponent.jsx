import React from "react";
// import MicroFrontendA from "http://localhost:7100/bundle.js";
// import MicroFrontendB from "http://localhost:7200/bundle.js";
// import MicroFrontendX from "http://localhost:7400/bundle.js";
import MicroFrontendN from "http://localhost:7500/bundle.js";

const ReactComponent = () => (
  <>
    {/* <MicroFrontendA /> */}
    {/* <MicroFrontendB /> */}
    {/* <MicroFrontendX /> */}
    <MicroFrontendN />
    <h1>reusable app</h1>
    <MicroFrontendN />
  </>
);

export default ReactComponent;
