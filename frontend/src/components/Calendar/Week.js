import { addDays, format, startOfWeek } from "date-fns";

const Days = ({ currentMonth }) => {
  const formatForDay = "EEEE";

  let startDate = startOfWeek(currentMonth);

  let days = [];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="day-name-box p2" key={i}>
        {format(addDays(startDate, i), formatForDay)}
      </div>
    );
  }

  return (
    <>
      <div className="days-container">
        <div className="days-row">{days}</div>
      </div>
    </>
  );
};

export default Days;
