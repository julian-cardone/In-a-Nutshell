import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(login({ email, password }));
};

function SplashPage() {
  return (
    <main>
      <div className={`content-container`}>
        <div className={`page-header`}>
          <h2>You got this</h2>
          <h1>...in a Nutshell!</h1>
          <img
            id="sqrl"
            src="http://pm1.narvii.com/7097/8b066da70abf0f5730d310687faf0fd6c3754691r1-971-880v2_00.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default SplashPage;
