import { addDays, format, startOfWeek } from "date-fns";
import DaysListItem from "./DaysListItem";

const Days = ({ currentMonth }) => {
  const formatForDay = "EEEE";

  let startDate = startOfWeek(currentMonth);

  let days = [];

  for (let i = 0; i < 7; i++) {
    days.push(format(addDays(startDate, i), formatForDay));
  }

  return (
    <>
      <div className="days-container">
        <div className="days-row">
          {days}
        </div>
      </div>
    </>
  );
};

export default Days;
