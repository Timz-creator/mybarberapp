import React from "react";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";




const Calendar = () => {

  const getValue = (event) => {
    console.log('Event: ', event.target.value);
  }

  return (
    <div className="flex items-center justify-center">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="grid space-y-20">
          <StaticDateTimePicker />
          <h1>Barbers</h1>
          <select>
            <option>Dan</option>
            <option>Ty</option>
            <option>Reece</option>
            <option>Conor</option>
            <option>Nate</option>
          </select>
          <input placeholder="Name" onChange= {getValue} required />
          <input placeholder="Email" required/>
          <button className="bg-white">Submit</button>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
