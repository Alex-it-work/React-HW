import "./App.css";
import React from "react";
// import UserListHW from "./components/UsersListHW";
// import SingUpForm from "./components/SignUpForm";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default App;

// 1)
// Создать список пользователей (компоненты UsersListHW, UserListItemHW). (Взаимодействие parent -> child: props).
// У пользователей есть такая инфа: id, firstName, lastName, age, imgSrc.
// Застилить карточки пользователей (пример в приложении или по-своему).

// Реализовать (одно или оба):
// - * выбор пользователя (по клику на него). Выбранных пользователей стилить, например, бордером и фоном;
// - * удаление пользователя (по клику на кнопке возле пользователя).
//  (Взаимодействие child -> parent: callback).

// 2)
// Создать компонент для SignUp-формы с полями Name, email, password, кнопкой SignUp.
// Застилить форму.
// Реализовать валидацию для любого выбранного поля со стилизованной подсветкой.
// Отменить стандартное поведение для нажатия SignUp.

// Используемые технологии: https://www.npmjs.com/package/classnames.
