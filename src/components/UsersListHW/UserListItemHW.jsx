import React from "react";

function UserListItemHW(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, isSelected },
    onClickHandler,
  } = props;

  const liStyle = { backgroundColor: "#CCCCCC" };

  return (
    <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
      {" "}
      <img src={imgSrc} alt="Users Photo" /> ID: "{id}", Fullname: "{firstName}{" "}
      {lastName}" age: {age}
    </li>
  );
}

export default UserListItemHW;
