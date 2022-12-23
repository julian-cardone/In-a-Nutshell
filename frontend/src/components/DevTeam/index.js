import "./DevTeam.css"

function DevTeam() {
    return (
        <>
        <div className="meet-the-team">
        <h1 style={{margin: "20px"}}>Meet the Team</h1>
        <div className="meet-the-team-names">
        <div className="meet-the-team-each-name"><h2 className="meet-the-team-title">Team Lead</h2>
        <img src={require('../../assets/1643330472842.jpg')} alt="julian-pic" style={{height: "160px", width: "160px",margin: "10px"}}/>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/juliancardone/" className="">
                <img src="https://cdn-icons-png.flaticon.com/512/38/38669.png" style={{height: "30px", margin: "10px"}} />
            </a>
            <a href="https://github.com/julian-cardone" target="_blank" className="center-nav-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{height: "30px", margin: "10px"}}/>
            </a>
        </div>
        <h3 className="meet-the-team-name">Julian Cardone</h3>
        </div>
        <div className="meet-the-team-each-name"><h2 className="meet-the-team-title">Backend</h2>
        <img src={require('../../assets/1565349938936.jpg')} alt="anthony-pic" style={{height: "160px", width: "160px",margin: "10px"}}/>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/anthony-chiodi-b5a8a9167/" className="">
                <img src="https://cdn-icons-png.flaticon.com/512/38/38669.png" style={{height: "30px", margin: "10px"}} />
            </a>
            <a href="https://github.com/adc1021" target="_blank" className="center-nav-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{height: "30px", margin: "10px"}}/>
            </a>
        </div>
        <h3 className="meet-the-team-name">Anthony Chiodi</h3>
        </div>
        <div className="meet-the-team-each-name"><h2 className="meet-the-team-title">Frontend</h2>
        <img src={require('../../assets/92495987.jpg')} alt="ross-pic" style={{height: "160px", width: "160px",margin: "10px"}}/>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/ross-mabbett-0684a164/" className="">
                <img src="https://cdn-icons-png.flaticon.com/512/38/38669.png" style={{height: "30px", margin: "10px"}} />
            </a>
            <a href="https://github.com/rtexelm" target="_blank" className="center-nav-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{height: "30px", margin: "10px"}}/>
            </a>
         </div>
         <h3 className="meet-the-team-name">Ross Mabbett</h3>
        </div>
        <div className="meet-the-team-each-name"><h2 className="meet-the-team-title">Flex</h2>
        <img src={require('../../assets/1619197065648.jpg')} alt="ethan-pic" style={{height: "160px", width: "160px",margin: "10px"}}/>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/ethan-graham-28454918b/" className="">
                <img src="https://cdn-icons-png.flaticon.com/512/38/38669.png" style={{height: "30px", margin: "10px"}} />
            </a>
            <a href="https://github.com/ethangraham43" target="_blank" className="center-nav-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{height: "30px", margin: "10px"}}/>
            </a>
        </div>
        <h3 className="meet-the-team-name">Ethan Graham</h3>
        </div>
        </div>
        </div>
        </>
    )
}

export default DevTeam;