import { endOfMonth, endOfWeek, startOfMonth, startOfWeek, format, addDays, eachDayOfInterval, subMonths, subDays } from "date-fns";

const Cells = ({ currentMonth, setCurrentMonth, seletedDate, setSelectedDate }) => {

  const startOfMonthCur = startOfMonth(currentMonth);
  const endOfMonthCur = endOfMonth(currentMonth);
  // const days = 

  const daysInMonth= format(endOfMonthCur, "dd");
  const numberOfRows = 5;
  const rows = [];

  const lastMonth = subMonths(currentMonth, 1);

  const endOfLastMonth = endOfMonth(lastMonth);

  const endOfLastMonthLowerInterval = subDays(endOfLastMonth, 5);

  const range = eachDayOfInterval({
    start: endOfLastMonthLowerInterval,
    end: startOfMonthCur
  });

  const findFirstSunday = () =>{
  for (let i = 0; i < range.length; i ++){
    if (range[i].getDay() === 0){
      const firstSundayDate = range[i]
      return firstSundayDate;
    }
  }
}

let firstSunday = findFirstSunday();

  for (let i = 1; i <= numberOfRows; i++){
    let row = [];
      for (let j = 1; j <= 7; j++){
          row.push(
              <div className="cell-box-container"width={``}>
                <div className="date-in-cell-box">
                  {format(firstSunday, "dd")}
                </div>
              </div>
          )
          firstSunday = addDays(firstSunday, 1);
      }
      rows.push(
        <div className="cells-row-container">
          {row}
        </div>
        );
  }

  return (
    <>
    <div className="cells-container">
      {rows.map((row)=>(
        row
      ))}
    </div>
    </>
  )
}

export default Cells;