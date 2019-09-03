import React from "react";
import packageJson from "../package.json";
import ReactDOM from "react-dom";
import { SelectTable, Finder, MenuBoard } from "pages";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router";
import "index.module.scss";

console.log(`Version: ${packageJson.version}`);

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Finder} />
      <Route
        exact
        path="/restaurants/:restId/tables/:tableId/menus"
        component={MenuBoard}
      />
      <Route path="/restaurants/:restId/tables" component={SelectTable} />
      <Redirect from="**" to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
// ReactDOM.render(<Finder></Finder>, document.getElementById("root"));
