import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/NSLogos/Logo.svg";
import "./SplashPage.css";

// const handleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(login({ email, password }));
// };

function SplashPage() {
  return (
    <main className={`content-container`}>
      <div className={`splash-container`}>
        <section className={`splash-body`}>
          <article className={`page-intro`}>
            <img src={logo} alt="" width={250} />
            <header className={`page-header`}>
              <h1>You got this ...in a Nutshell!</h1>
            </header>
            <p className={`p2`}>
              Keep track of everything you need to ace the next interview
            </p>
          </article>
          <article className={`page-form`}>
            <form className={`form-fields`}>
              <input
                className={`field`}
                type={`email`}
                placeholder="Enter Email"
              />
              <br />
              <input
                className={`field`}
                type={`password`}
                placeholder="Enter Password"
              />
              <br />
              <button className={`btnPrimary btn`} onClick={null}>
                Sign In
              </button>
            </form>
            <p className={`p2`}>
              Need an account? <Link to="/signup">Sign up here</Link>
            </p>
          </article>
        </section>
      </div>
      {/* <img
        id="sqrl"
        src="http://pm1.narvii.com/7097/8b066da70abf0f5730d310687faf0fd6c3754691r1-971-880v2_00.jpg"
        alt=""
      /> */}
    </main>
  );
}

export default SplashPage;
