import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/NSLogos/Logo.svg";
import { SessionModal } from "../SessionForms";
import LoginForm from "../SessionForms/LoginForm";
import "./SplashPage.css";

function SplashPage() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

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
            <LoginForm />
            <p className={`p2`}>
              Need an account?{" "}
              <span className={`modalLink`} onClick={handleModal}>
                Sign up here
              </span>
              {showModal && (
                <SessionModal onClose={() => setShowModal(false)} />
              )}
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
