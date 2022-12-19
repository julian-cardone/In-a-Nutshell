
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, clearSessionErrors } from '../../store/session';

function SignupForm () {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password2, setPassword2] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = field => {
    let setState;

    switch (field) {
      case 'email':
        setState = setEmail;
        break;
      case 'username':
        setState = setUsername;
        break;
      case 'firstName':
        setState = setFirstName;
        break;
      case 'lastName':
        setState = setLastName;
        break;
      case 'password':
        setState = setPassword;
        break;
      case 'password2':
        setState = setPassword2;
        break;
      default:
        throw Error('Unknown field in Signup Form');
    }

    return e => setState(e.currentTarget.value);
  }

  const usernameSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      username,
      firstName,
      lastName,
      password
    };

    dispatch(signup(user)); 
  }

  return (
    <form className="session-form" onSubmit={usernameSubmit}>
      <h2>Sign Up Form</h2>
      <div className="errors">{errors?.email}</div>
      <label>
        <span>Email</span>
        <input type="text"
          value={email}
          onChange={update('email')}
          placeholder="Email"
        />
      </label>
      <div className="errors">{errors?.username}</div>
      <label>
        <span>Username</span>
        <input type="text"
          value={username}
          onChange={update('username')}
          placeholder="Username"
        />
      </label>
      <label>
        <span>First Name</span>
        <input type="text"
          value={firstName}
          onChange={update('firstName')}
          placeholder="firstName"
        />
      </label>
      <label>
        <span>Last Name</span>
        <input type="text"
          value={lastName}
          onChange={update('lastName')}
          placeholder="lastName"
        />
      </label>
      <div className="errors">{errors?.password}</div>
      <label>
        <span>Password</span>
        <input type="password"
          value={password}
          onChange={update('password')}
          placeholder="Password"
        />
      </label>
      <div className="errors">
        {password !== password2 && 'Confirm Password field must match'}
      </div>
      <label>
        <span>Confirm Password</span>
        <input type="password"
          value={password2}
          onChange={update('password2')}
          placeholder="Confirm Password"
        />
      </label>
      <input
        type="submit"
        value="Sign Up"
        disabled={!email || !username || !firstName || !lastName || !password || password !== password2}
      />
    </form>
  );
}

export default SignupForm;