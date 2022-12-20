import  { format, addMonths, subMonths } from "date-fns";
import { useState, useEffect } from "react";

const Header = ({ currentMonth, setCurrentMonth }) =>{

  //guide for formatting:
  // https://date-fns.org/docs/format

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
                    <ul className="profile-dropdown">
                      <li>test</li>
                      <li>placeholder</li>
                      <li>cheeseburger</li>
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