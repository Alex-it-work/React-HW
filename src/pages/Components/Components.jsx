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
      <ul>
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
        <Route exact path={`${path}/calendar`}>
          <Calendar />
        </Route>
        <Route exact path={`${path}/singUpForm`}>
          <SingUpForm />
        </Route>
        <Route exact path={`${path}/usersListHW`}>
          <UserListHW />
        </Route>
        <Route path={`${path}/*`} component={NotFound} />
      </Switch>
    </>
  );
}
export default Components;
