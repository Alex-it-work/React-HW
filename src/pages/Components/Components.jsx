import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import UserListHW from "./../../components/UsersListHW";
import SingUpForm from "./../../components/SignUpForm";
import Calendar from "./../../components/Calendar";
import NotFound from "./../../components/NotFound";

function Components() {
  const { path, url } = useRouteMatch();
  return (
    <>
      <ul style={{ flex: "1 0 auto" }}>
        <li>
          <Link to={`${url}/calendar`}>Calendar</Link>
        </li>
        <li>
          <Link to={`${url}/singUpForm`}>SingUpForm</Link>
        </li>
        <li>
          <Link to={`${url}/usersListHW`}>UsersListHW</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/calendar`}>
          <div
            style={{
              flex: "1 0 auto",
            }}
          >
            <Calendar />
          </div>
        </Route>
        <Route path={`${path}/singUpForm`}>
          <>
            <div style={{ flex: "1 0 auto" }}>
              <SingUpForm />
            </div>
          </>
        </Route>
        <Route path={`${path}/usersListHW`}>
          <div style={{ flex: "1 0 auto" }}>
            <UserListHW />
          </div>
        </Route>
        <Route path={`${path}/*`} component={NotFound} />
      </Switch>
    </>
  );
}
export default Components;
