import React from "react";
import packageJson from "../package.json";
import ReactDOM from "react-dom";
import "index.module.scss";

import { Finder } from "pages";

console.log(`Version: ${packageJson.version}`);

ReactDOM.render(<Finder></Finder>, document.getElementById("root"));
