import React, { Component } from "react";
import UserListItemHW from "./UserListItemHW";

const dbUsers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Deer",
    age: 33,
    imgSrc: "http://vertex-art.ru/wp-content/uploads/portretvizo_.jpg",
  },
  {
    id: 2,
    firstName: "Den",
    lastName: "Polo",
    age: 44,
    imgSrc:
      "https://st.depositphotos.com/1008939/1880/i/950/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg",
  },
  {
    id: 3,
    firstName: "Martin",
    lastName: "King",
    age: 55,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Lennon",
    age: 22,
    imgSrc:
      "https://cdn.ananasposter.ru/image/cache/catalog/poster/music/85/8817-1000x830.jpg",
  },
  {
    id: 5,
    firstName: "Angela",
    lastName: "Merkel",
    age: 18,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYni8G4eLkns7X1Ku10jX2jtL3gGDF5drU2A&usqp=CAU",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Deer",
    age: 33,
    imgSrc: "http://vertex-art.ru/wp-content/uploads/portretvizo_.jpg",
  },
  {
    id: 7,
    firstName: "Silvestre",
    lastName: "Stallone",
    age: 25,
    imgSrc:
      "https://i.pinimg.com/originals/45/c8/63/45c863ced621cfb5cc6ca6162cd48c9a.jpg",
  },
];

class UserListHW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: dbUsers.map(u => ({ ...u, isSelected: false, like: 0 })),
    };
  }
  mapUser = (user, index) => {
    const { users } = this.state;
    const onClickHandler = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({ users: newUsers });
    };
    const onDeleteHandler = () => {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      this.setState({ users: newUsers });
    };
    const addLikeHandler = () => {
      const newUsers = [...users];
      newUsers[index].like = newUsers[index].like + 1;
      this.setState({ users: newUsers });
    };
    return (
      <UserListItemHW
        key={user.id}
        user={user}
        onClickHandler={onClickHandler}
        onDeleteHandler={onDeleteHandler}
        addLikeHandler={addLikeHandler}
      />
    );
  };
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UserListHW;
