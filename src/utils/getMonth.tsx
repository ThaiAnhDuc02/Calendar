import dayjs from "dayjs";

const getMonth = (month: number = dayjs().month()) => {
  const year: number = dayjs().year();
  const firstDayOfTheMount = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMount;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

export default getMonth;
