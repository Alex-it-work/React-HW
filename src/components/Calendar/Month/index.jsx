import React from "react";
import Week from "./../Week";
import { format } from "date-fns";

const getWeeks = date => {
  const month = date.getMonth();
  const week = [];

  return week.map(w => <Week week={w} year={date.getFullYear()} />);
};

function Month(props) {
  const { date } = props;
  return (
    <section>
      <table>
        <caption>{format(date, "MMM yyyy")}</caption>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{getWeeks(date)}</tbody>
      </table>
    </section>
  );
}

export default Month;
