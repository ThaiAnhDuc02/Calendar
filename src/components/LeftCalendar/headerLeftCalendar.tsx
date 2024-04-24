import React from "react";
import CircleHoverButton from "../Button/ButtonCircleHover";
interface HeaderLeftCalendarProps {
  month?: string | null;
  year?: number | null;
}
const HeaderLeftCalendar: React.FC<HeaderLeftCalendarProps> = ({
  month,
  year,
}) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12">
        <header className="col-span-12 text-center py-6  pb-2 flex justify-center items-center gap-4 text-secondary">
          <CircleHoverButton iconClassName="fa-solid fa-chevron-left" />
          <h3 className="text-xl font-bold flex">
            {month ? `${month}` : ""} {year ? ` ${year}` : ""}
          </h3>
          <CircleHoverButton iconClassName="fa-solid fa-chevron-right" />
        </header>
      </div>
    </React.Fragment>
  );
};
export default HeaderLeftCalendar;
