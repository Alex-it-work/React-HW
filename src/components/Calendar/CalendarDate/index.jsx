import React from "react";
import PropTypes from "prop-types";

function CalendarDate(props) {
  const { date, dateClass } = props;
  return <td className={dateClass}>{date}</td>;
}

CalendarDate.protoTypes = {
  date: PropTypes.number.isRequired,
  dateClass: PropTypes.string,
};

export default CalendarDate;
