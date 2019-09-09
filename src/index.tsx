import React from "react";
import packageJson from "../package.json";
import ReactDOM from "react-dom";
import { SelectTable, Finder, MenuBoard } from "pages";
import { Router, Redirect } from "@reach/router";
import "index.module.scss";

console.log(`Version: ${packageJson.version}`);

ReactDOM.render(
  <Router>
    <Finder path="/" />
    <SelectTable path="/restaurants/:restId/tables"></SelectTable>
    <MenuBoard path="/restaurants/:restId/tables/:tableId/menus/*"></MenuBoard>
    <Redirect from="**" to="/" />
  </Router>,
  document.getElementById("root")
);
