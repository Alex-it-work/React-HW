import React from "react";
import { format, getWeeksInMonth, getWeek } from "date-fns";
import PropTypes from "prop-types";

import Week from "./../Week";
import styles from "./../Calendar.module.scss";

const getWeeks = date => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeek = getWeek(firstDayOfMonth);

  const year = date.getFullYear();

  const weeks = [];
  for (let i = firstWeek; i < firstWeek + getWeeksInMonth(date); i++) {
    weeks.push(<Week key={i} date={date} week={i} year={year} />);
  }

  return weeks;
};

function Month(props) {
  const { date } = props;

  return (
    <section className={styles.monthContainer}>
      <table className={styles.dateGrid}>
        <caption className={styles.currentMonthYear}>
          {format(date, "MMMM y")}
        </caption>
        <thead className={styles.weekDays}>
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

Month.protoTypes = {
  date: PropTypes.object.isRequired,
};

export default Month;
