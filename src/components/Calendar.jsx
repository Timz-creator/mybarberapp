import React from "react";
import DtPicker from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker";
import { useState } from "react";
import "react-calendar-datetime-picker/dist/index.css";

const Calendar = () => {
  const [date, setDate] = useState(null);
  return (
    <div className="grid items-center">
      <DtPicker
        onChange={setDate}
        local="en"
        withTime
        showWeekend
        placeholder="Book an appointment "
        showTimeInput
        clearBtn
        todayBtn
        autoClose={false}
      />
      <button className="text-white font-bold "> Confirm Appointment</button>
    </div>
  );
};

export default Calendar;
