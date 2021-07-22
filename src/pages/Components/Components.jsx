import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserListHW from "./../../components/UsersListHW";
import SingUpForm from "./../../components/SignUpForm";
import Calendar from "./../../components/Calendar";

const Components = () => (
  <>
    {" "}
    <Router>
      <ul>
        <li>
          {" "}
          <Link to={"/components/calendar"}>Calendar</Link>
        </li>
        <li>
          {" "}
          <Link to={"/components/singUpForm"}>SingUpForm</Link>
        </li>
        <li>
          {" "}
          <Link to={"/components/usersListHW"}>UsersListHW</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={"/components/calendar"}>
          <Calendar />
        </Route>
        <Route exact path={"/components/singUpForm"}>
          <SingUpForm />
        </Route>
        <Route exact path={"/components/usersListHW"}>
          <UserListHW />
        </Route>
      </Switch>{" "}
    </Router>
  </>
);

export default Components;
