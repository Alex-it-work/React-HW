import React from "react";
import styles from "./UserListItem.module.css";

function UserListItemHW(props) {
  const {
    user: { id, firstName, lastName, age, imgSrc, isSelected, like },
    onClickHandler,
    onDeleteHandler,
    addLikeHandler,
  } = props;

  const liStyle = { border: "5px solid green" };

  return (
    <>
      <li
        className={styles.userItem}
        style={isSelected ? liStyle : null}
        onClick={onClickHandler}
      >
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
