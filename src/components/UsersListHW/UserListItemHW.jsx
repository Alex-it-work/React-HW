import React from "react";

function UserListItemHW(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, isSelected, like },
    onClickHandler,
    onDeleteHandler,
    addLikeHandler,
  } = props;

  const liStyle = { backgroundColor: "#CCCCCC" };

  return (
    <>
      <li style={isSelected ? liStyle : null} onClick={onClickHandler}>
        {" "}
        <img src={imgSrc} alt="" /> ID: "{id}", Fullname: "{firstName}{" "}
        {lastName}" age: {age}
      </li>
      <button onClick={addLikeHandler}>Like {like}</button>
      <button onClick={onDeleteHandler}>Del</button>
    </>
  );
}

export default UserListItemHW;
