import React, { Component } from "react";
import UserListItemHW from "./UserListItemHW";

const dbUsers = [
  {
    id: 1,
    firstName: "John",
    secondName: "Deer",
    age: 33,
    imgSrc: "http://vertex-art.ru/wp-content/uploads/portretvizo_.jpg",
  },
];

class UserListHW extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div></div>;
  }
}

export default UserListHW;
