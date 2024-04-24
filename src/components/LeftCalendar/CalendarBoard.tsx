import React from "react";
import CircleHoverButton from "../Button/ButtonCircleHover";
import Button from "../Button";

const CalendarBoard = () => {
  return (
    <React.Fragment>
      <header className="grid grid-cols-12">
        <h2 className=" text-2xl col-span-9 font-extrabold text-secondary">
          Upcoming Events
        </h2>
        <div className="col-span-3 flex justify-end gap-x-6">
          <Button isPill children="View All" />
        </div>
      </header>
    </React.Fragment>
  );
};

export default CalendarBoard;
