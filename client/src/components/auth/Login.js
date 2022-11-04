import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./AuthProvider";

import axios from '../../api/axios';
const LOGIN_URL = '/api/users/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({email, password}),
      {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
      }   
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
      // for different roles like admin/investor/poster use:
      // const roles = response?.data?.roles;     and make sure to add this to the backend api router
      setAuth({ email, password, accessToken });
      setEmail('');
      setPassword('');
      setSuccess(true); /*danger*/
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Data in forms or token');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else{
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }

  }

  return (
    <>
      {success ? (
          <section>
            <h1>You are loggin in!</h1>
            <br />
            <p>
              <a href="#">Go to Home</a>
            </p>
          </section>
      ):(
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label>
        <input type="text" 
               id="email" 
               ref={userRef} 
               autoComplete="off" 
               onChange={(e) => setEmail(e.target.value)} 
               value={email}
               required/>

        <label htmlFor="password">Password:</label>
        <input type="password" 
               id="password" 
               ref={userRef} 
               onChange={(e) => setPassword(e.target.value)} 
               value={password}
               required/>
          <button>Sign In</button>
      </form>
      <p>
        Need an Account?<br />
        <span className="line">
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
      )}
    </>
  )
}

export default Login;
