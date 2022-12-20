import  { format, addMonths, subMonths } from "date-fns";
import { useState, useEffect } from "react";

const Header = ({ currentMonth, setCurrentMonth }) =>{

  //guide for formatting:
  // https://date-fns.org/docs/format

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // eachMonthOfInterval({
  //   start: new Date(2014, 1, 6),
  //   end: new Date(2014, 7, 10)
  // })

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
  console.log(e.target.value)
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
                            <li value={(idx%11)}>{month}</li>
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