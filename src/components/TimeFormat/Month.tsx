import React from "react";
import Day from "./Day";
import dayjs from "dayjs";
import { dayOfWeek } from "../../utils/variables";

interface MonthProps {
  month: dayjs.Dayjs[][];
}

const Month: React.FC<MonthProps> = ({ month }) => {
  const [currMonth, setCurrMonth] = React.useState<number>();
  const [isWithinMonth, setIsWithinMonth] = React.useState<boolean[]>([]);

  React.useEffect(() => {
    const currDate = new Date();
    const currentIndexMonth = currDate.getMonth();
    setCurrMonth(currentIndexMonth);
    //get Array include  whether the date is within this month or not
    const monthStatus = month.map((row: any) => {
      // return true if day are in current  month , else false
      return row.map((day: any) => day.month() === currentIndexMonth);
    });
    console.log(monthStatus);
    setIsWithinMonth(monthStatus.flat());
    console.log(isWithinMonth);
  }, [month]);

  return (
    <React.Fragment>
      <div className="grid grid-cols-7 py-2 pb-3">
        {/* Title day of week */}
        {dayOfWeek.map((day, index) => (
          <div className="flex flex-col text-center items-center" key={index}>
            <p className="text-base font-semibold uppercase opacity-50">
              {day}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-1 ">
        {month.flat().map((day: any, idx: number) => (
          <button
            key={idx}
            className=" rounded-full  hover:bg-primary active:bg-primary focus:outline-none focus:ring focus:bg-secondary  focus:text-white"
          >
            <Day day={day} isWithinMonth={isWithinMonth[idx]} />
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Month;
