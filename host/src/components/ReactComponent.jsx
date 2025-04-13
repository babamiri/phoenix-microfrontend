import React from "react";
import MicroFrontendA from "http://localhost:7100/bundle.js";
import MicroFrontendB from "http://localhost:7200/bundle.js";
import MicroFrontendX from "http://localhost:7400/bundle.js";

const ReactComponent = () => (
  <>
    <MicroFrontendA />
    <MicroFrontendB />
    <MicroFrontendX />
  </>
);

export default ReactComponent;
