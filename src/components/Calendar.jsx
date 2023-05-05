import React from "react";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Calendar = () => {
  const getValue = (event) => {
    console.log("Event: ", event.target.value);
  };
  const confirmation = () => {
    let name = document.getElementById("nameInput").value;
    let barbers = document.getElementById('barbers').value
    alert(`Appointment confirmed with ${barbers}! See you soon ${name}`);
  };

  return (
    <div className="flex items-center justify-center">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="grid space-y-5">
          <StaticDateTimePicker onChange={(date) => console.log(date)} />
          <select id='barbers'>
            <option>Dan</option>
            <option>Ty</option>
            <option>Reece</option>
            <option>Conor</option>
            <option>Nate</option>
          </select>
          <input
            id="nameInput"
            placeholder="Name"
            onChange={getValue}
            required
          />
          <input placeholder="Email" required />
          <button className="bg-white" onClick={confirmation}>
            Submit
          </button>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
