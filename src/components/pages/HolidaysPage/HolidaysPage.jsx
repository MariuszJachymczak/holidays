import React, { useState, useEffect } from "react";
import TextField from "../../atoms/TextField/TextField";
import Button from "../../atoms/Button/Button";
import { getHolidays } from "../../../services/holidays.service";
import HolidayItem from "../../atoms/Holidayitem/HolidayItem";
import "./HolidaysPage.css";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function HolidaysPage() {
  const [year, setYear] = useState(`${new Date().getFullYear()}`);
  const [country, setCountry] = useState("PL");
  const [holidays, setHolidays] = useState([]);

  return (
    <form
      className="holidays-page"
      onSubmit={(e) => {
        e.preventDefault();
        getHolidays(country, year).then((res) => {
          setHolidays([
            ...holidays,
            ...res.data.holidays.map((holiday) => {
              const newDate = new Date(holiday.date);
              const endDate = new Date(holiday.end);
              return {
                ...holiday,
                date: `${newDate.getFullYear()}-${
                  newDate.getMonth() + 1 < 10 ? "0" : ""
                }${newDate.getMonth() + 1}-${newDate.getDate() + 1 < 10 ? "0" : ""}${
                  newDate.getDate() + 1
                } ${weekdays[newDate.getDay()]}`,
                end: `${endDate.getFullYear()}-${
                  endDate.getMonth() + 1 < 10 ? "0" : ""
                }${endDate.getMonth() + 1}-${
                  endDate.getDate() + 1 < 10 ? "0" : ""
                }${endDate.getDate() + 1}`,
              };
            }),
          ]);
        });
      }}
    >
      <div className="wrapper">
        <TextField
          placeholder={"year"}
          value={year}
          type={"number"}
          handleOnChange={(e) => {
            if (parseInt(e.target.value) >= 2022) {
              setYear(e.target.value);
            } else {
              console.log("error");
            }
          }}
        />
        <Button label={"Submit"} type={"submit"} />
        <TextField
          placeholder={`country`}
          value={country}
          type={"text"}
          handleOnChange={(e) => {
            setCountry(e.target.value.toUpperCase());
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px 0" }}>
        {holidays.map((holiday) => {
          return (
            <HolidayItem
              holidayStart={holiday.date}
              holidayName={holiday.name}
              holidayEnd={holiday.end}
            
            />
          );
        })}
      </div>
    </form>
  );
}

export default HolidaysPage;
