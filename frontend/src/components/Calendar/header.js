const Header = () =>{

  const formatForDate = "MMMM YYYY"

  const previousMonth = () => {

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
        <span className="date-display"onClick={previousMonth}>
          left symbol
        </span>
      </div>


    </div>
    </>
  )
}

export default Header;