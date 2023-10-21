import React, { useEffect } from "react";
import {
  LocalizationProvider,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(null);

  const [newAppointment, setNewAppointment] = useState({
    date: "",
    name: "",
    barber: "",
    email: "",
  });

  const getValue = (event) => {
    console.log("Event: ", event.target.value);
  };
  async function confirmation(event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value;
    let barber = document.getElementById("barbers").value;
    let email = document.getElementById("emailInput").value;

    setNewAppointment({
      date: date,
      name: name,
      barber: barber,
      email: email,
    });

    alert(
      `Your Appointment at ${date} with ${barber} is confirmed! See you soon ${name}`
    );

    console.log("Date:", date);
    console.log("Name", name);
    console.log("Barbr:", barber);
    console.log("Email:", email);

    
  }
  useEffect(() => {
    if (
      newAppointment.date &&
      newAppointment.name &&
      newAppointment.barber &&
      newAppointment.email
    ) {
      fetch("http://localhost:8000/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment),
      }).catch((error) => {
        window.alert(error);
        return;
      });
    }
  }, [newAppointment]);

  return (
    <div id="appointment" className="w-full my-32">
      <div className="pl-10 flex justify-center pb-10 text-[#DAA520] font-serif text-3xl">
        <h1>Appointment Booking</h1>
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center ">
            <StaticDateTimePicker onChange={(date) => setDate(date)} />
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
                  id="emailInput"
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
      <div className="pt-5">
        <hr className="bg-white " />
      </div>
    </div>
  );
};

export default Calendar;
