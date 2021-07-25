import moment from "moment";
import React from "react";

import { useDatepicker } from "../context/datepicker.context";

export const Today = ({
  className = "",
  children = "Today",
}: {
  className?: string;
  children?: any;
}) => {
  const { handleMonthUpdate, handleSelectedDate } = useDatepicker();
  return (
    <p
      className={className}
      data-testid="today"
      tabIndex={0}
      onClick={() => {
        handleMonthUpdate(moment().startOf("month").toDate());
        handleSelectedDate(moment().toDate());
      }}
      onKeyPress={() => {
        handleMonthUpdate(moment().startOf("month").toDate());
        handleSelectedDate(moment().toDate());
      }}
    >
      {children}
    </p>
  );
};