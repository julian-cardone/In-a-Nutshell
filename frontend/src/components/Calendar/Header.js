import  { format, addMonths, subMonths, getMonth } from "date-fns";
import { useState, useEffect } from "react";
import eachMonthOfInterval from "date-fns/eachMonthOfInterval";
import getYear from "date-fns/getYear";

const Header = ({ currentMonth, setCurrentMonth }) =>{

  //guide for formatting:
  // https://date-fns.org/docs/format

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const monthNums = eachMonthOfInterval({
    start: new Date(getYear(currentMonth), 1, 1),
    end: new Date(getYear(currentMonth), 12, 1)
  })

  const formatForDate = "LLLL yyyy"

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
//dropdown logic
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);
//end of dropdown logic

//change date/year logic:
const changeDate = (e) => {
  const monthNum = e.target.value;
  for (let i = 0; i < monthNums.length; i++){
    if (getMonth(monthNums[i]) === monthNum){
      setCurrentMonth(monthNums[i]);
    }
  }
  if (e.target.innerHTML === "December"){
    setCurrentMonth(monthNums[10]);
  }
}

  return (
    <>
    <div className="header-flex-row">

      <div className="back-button-div">
        <div className="back-icon"onClick={previousMonth}>
          left symbol
        </div>
      </div>

      <div className="date-div"onClick={openMenu}>
        <span className="date-display">
                  {showMenu && (
                <div className="dropdown-root">
                  <div className="dropdown-container">
                    <ul className="ul-dropdown">
                      {months.map((month, idx)=>(
                          <div className="list-container-dropdown"onClick={(e)=>changeDate(e)}>
                            <li value={((idx)%11)}>{month}</li>
                          </div>
                      ))}
                    </ul>
                  </div>
                </div>)}
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