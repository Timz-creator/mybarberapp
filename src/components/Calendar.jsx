import React from "react";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(null);
  const getValue = (event) => {
    console.log("Event: ", event.target.value);
  };
  const confirmation = () => {
    let name = document.getElementById("nameInput").value;
    let barbers = document.getElementById("barbers").value;
    alert(
      `Your Appointment at ${date} with ${barbers} is confirmed! See you soon ${name}`
    );
  };

  return (
    <div id="appointment" className="w-full my-32">
      <div className="pl-10 flex justify-center pb-10 text-[#DAA520] font-serif text-3xl">
        <h1>Appointment Booking</h1>
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center ">
            <StaticDateTimePicker
              onChange={(date) => setDate(date)}
            />
          </div>
          <form className="h-64 w-60 mb-1 ">
            <div className="pl-10 space-y-8">
              <div>
                <label className="text-[#DAA520]">Barbers</label>
                <select className="rounded-full pb-1" id="barbers">
                  <option value="">Choose your barber</option>
                  <option value="Dan">Dan</option>
                  <option value="Ty">Ty</option>
                  <option value="Reece">Reece</option>
                  <option value="Connor">Conor</option>
                  <option value="Nate">Nate</option>
                </select>
              </div>

              <div>
                <label className="text-[#DAA520]">Name</label>
                <input
                  id="nameInput"
                  placeholder="  Enter your name"
                  onChange={getValue}
                  required
                  className="rounded-full"
                />
              </div>
              <div>
                <label className="text-[#DAA520]">Email</label>
                <input
                  className="rounded-full"
                  placeholder="  Enter your Email"
                  required
                />
              </div>
              <div className="pb-10">
                <button
                  className="bg-white rounded-full p-1  "
                  onClick={confirmation}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
