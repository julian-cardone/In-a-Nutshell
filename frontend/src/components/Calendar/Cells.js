import { endOfMonth, endOfWeek, startOfMonth, startOfWeek, format } from "date-fns";

const Cells = ({ currentMonth, setCurrentMonth, seletedDate, setSelectedDate }) => {

  const startOfMonthCur = startOfMonth(currentMonth);
  const endOfMonthCur = endOfMonth(currentMonth);
  // const days = 

  const formatOfDate = "D";
  const rows = [];

  console.log(endOfMonthCur);

  for (let i = 0; i < 5; i++){

  }

  return (
    <>
    <div className="cells-container">
      <div className="cells-row">
          {}
      </div>
    </div>
    </>
  )
}

export default Cells;