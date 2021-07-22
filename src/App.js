import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import About from "./pages/About/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Router>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/components"}>Components</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/components"}>
            <Components />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
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

// 3)
// Застилить календарь (https://github.com/pecourses/pe20211-react-app/tree/main/src/components/Calendar) по макету. Макет в приложении. Желательно использовать SASS (scss).
// Примечания: не выводить дни другого месяца, подсвечивать текущую дату (можно использовать isSameDay, isSameMonth).
// При необходимости отрефакторить код.

// Используемые технологии:
// https://www.npmjs.com/package/date-fns

// https://www.npmjs.com/package/prop-types
