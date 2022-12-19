import  { format, addMonths, subMonths } from "date-fns";

const Header = ({ currentMonth, setCurrentMonth }) =>{

  const formatForDate = "MM dd yyyy"

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <>
    <div className="header-flex-row">

      <div className="back-button-div">
        <div className="back-icon"onClick={previousMonth}>
          left symbol
        </div>
      </div>

      <div className="date-div">
        <span className="date-display">
          {format(currentMonth, formatForDate)}
        </span>
      </div>

      <div className="forward-button-div">
        <div className="forward-icon"onClick={nextMonth}>
          right symbol
        </div>
      </div>

    </div>
    </>
  )
}

export default Header;