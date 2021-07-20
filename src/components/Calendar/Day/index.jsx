import React from "react";
import { format } from "date-fns";
import styles from "./../Calendar.module.scss";

function Day() {
  const currentDate = new Date();
  return (
    <section className={styles.dayContainer}>
      <div className={styles.currentDayOfWeek}>
        {format(currentDate, "eeee")}
      </div>
      <div className={styles.currentDayNumber}>{currentDate.getDate()}</div>
    </section>
  );
}

export default Day;
