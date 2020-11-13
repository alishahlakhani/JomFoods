import React from "react";
import packageJson from "../package.json";
import ReactDOM from "react-dom";
import { SelectTable, Finder, MenuBoard, YourOrder } from "pages";
import { Router, Redirect } from "@reach/router";
import { GlobalStore } from "store";
import "index.module.scss";

console.log(`Version: ${packageJson.version}`);

ReactDOM.render(
  <GlobalStore.Container>
    <Router>
      <Redirect noThrow from="/" to="restaurants" />
      <Finder path="/restaurants" />
      <SelectTable path="/restaurants/:restId/tables"></SelectTable>
      <MenuBoard path="/restaurants/:restId/tables/:tableId/menus/*"></MenuBoard>
      <YourOrder path="/order/*"></YourOrder>
    </Router>
  </GlobalStore.Container>,
  document.getElementById("root")
);
