import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
//from component
import CircleHoverButton from "../Button/ButtonCircleHover";
import HeaderLeftCalendar from "./headerLeftCalendar";
import Month from "../TimeFormat/Month";
//from utils
import getMonth from "../../utils/getMonth";
import { monthOfYear } from "../../utils/variables";

const LeftCalendar = () => {
  const [currMonth, setCurrMonth] = React.useState(getMonth());
  const [currMonthName, setCurrMonthName] = React.useState("");
  const [currYearName, setCurrYearName] = React.useState(0);
  //Get current month name
  React.useEffect(() => {
    const currDate = new Date();
    const currMonthIndex: number = currDate.getMonth();
    const currMonth: string = monthOfYear[currMonthIndex];
    console.log("🚀 ~ getMonthAndYear ~ currMonth:", currMonth);
    const currYear: number = currDate.getFullYear();
    console.log("🚀 ~ getMonthAndYear ~ currYear:", currYear);
    setCurrMonthName(currMonth);
    setCurrYearName(currYear);
  }, [currMonth]);
  return (
    <React.Fragment>
      <HeaderLeftCalendar month={currMonthName} year={currYearName} />
      <div className="col-span-12 ">
        <Month month={currMonth} />
      </div>
    </React.Fragment>
  );
};

export default LeftCalendar;
