import { parse, addDays, isSameMonth, isSameDay } from "date-fns";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import CalendarDate from "./../CalendarDate";
import styles from "./../Calendar.module.scss";

const getDaysOfWeek = (date, week, year) => {
  const startOfWeek = parse(`${year} ${week}`, "Y w", new Date());

  const days = [];
  for (let i = 0; i < 7; ++i) {
    const dateIndex = addDays(startOfWeek, i);
    const newClass = classNames(styles.currentMonth, {
      [styles.currentDay]: isSameDay(new Date(), dateIndex),
    });
    isSameMonth(date, dateIndex)
      ? days.push(
          <CalendarDate
            key={dateIndex.getDate()}
            dateClass={newClass}
            date={dateIndex.getDate()}
          />
        )
      : days.push(
          <CalendarDate
            key={dateIndex.getDate()}
            dateClass={styles.otherMonth}
            date={dateIndex.getDate()}
          />
        );
  }
  return days;
};

function Week(props) {
  const { date, week, year } = props;

  return <tr>{getDaysOfWeek(date, week, year)}</tr>;
}

Week.propTypes = {
  week: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Week;
