import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login, clearSessionErrors } from "../../store/session";
import "./SessionForms.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((state) => {
    return state.errors.session;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === "email" ? setEmail : setPassword;
    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const demoLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email: "demo-user@appacademy.io", password: "starwars" }));
  };

  return (
    <>
      <form className="form-fields" onSubmit={handleSubmit}>
        <div className="errors">{errors?.email}</div>
        {/* <label> */}
        {/* <span>Email</span> */}
        <input
          className={`loginField`}
          type="text"
          value={email}
          onChange={update("email")}
          placeholder="Email"
        />
        {/* </label> */}
        <div className="errors">{errors?.password}</div>
        {/* <label>
        <span>Password</span> */}
        <input
          className={`loginField`}
          type="password"
          value={password}
          onChange={update("password")}
          placeholder="Password"
        />
        {/* </label> */}
        <input
          className={`btnPrimary btn demo`}
          type="submit"
          value="Log In"
          disabled={!email || !password}
        />
        <br />
        <button className={`btnPrimary btn demo`} onClick={demoLogin}>
          Demo Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
