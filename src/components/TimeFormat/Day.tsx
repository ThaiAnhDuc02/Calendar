import React from "react";
import CircleHoverButton from "../Button/ButtonCircleHover";

interface DayProps {
  day: any;
  isWithinMonth: boolean;
}
const Day: React.FC<DayProps> = ({ day, isWithinMonth }) => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-col items-center">
        {isWithinMonth ? (
          <p className=" text-base p-4 text-center font-semibold">
            {day.format("DD")}
          </p>
        ) : (
          <p className="text-base p-4  text-center font-semibold opacity-50">
            {day.format("DD")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Day;
