import "./App.css";
import React, { Component } from "react";
import Greeting from "./components/greeting";
import React from "react";
import UserListHW from "./components/UsersListHW";

// Создать список пользователей (компоненты UsersListHW, UserListItemHW). (Взаимодействие parent -> child: props).
// У пользователей есть такая инфа: id, firstName, lastName, age, imgSrc.
// Застилить карточки пользователей (пример в приложении или по-своему).

// Реализовать (одно или оба):
// - * выбор пользователя (по клику на него). Выбранных пользователей стилить, например, бордером и фоном;
// - * удаление пользователя (по клику на кнопке возле пользователя).
//  (Взаимодействие child -> parent: callback).

function App() {
  return (
    <div>
      <UserListHW />
    </div>
  );
}

export default App;
