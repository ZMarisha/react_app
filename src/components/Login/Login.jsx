import d from './Login.module.css';
import { Link, Navigate, useNavigate} from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../hook/useAuth";
import { loginUserThunk } from "../../redux/registerReducer";
import { useEffect } from 'react';



const Login = () => {

  const theme = useTheme(); 
  const dispatch = useDispatch();
  const isAuth = useAuth().isAuth;
  const getError = useSelector(state => state.register.err);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    console.log(email)
  
    dispatch(loginUserThunk(email, password));
  };


  useEffect(() => {
    if (getError) {
      navigate('/register')
    }
  }, [navigate, getError])


  return !isAuth ? (
    <div className={d.container}>
        <div className={d.model} style={{background: theme.palette.primary.main}}>
            <h3>Chat</h3>
            <p>Login</p>
            <form className={d.form} onSubmit={handleSubmit}>
                <input type='email' placeholder="email" nama='userEmail'/>
                <input type="password" autoComplete="on"/>
                <button type='submit'>Sign in</button>
            </form>
            <p>You don't have an account? <Link to='/register' style={{color: 'white'}}>Register</Link></p>
        </div>
    </div>
  ) : <div><Navigate to={'/'}/>
      </div>
  
}

export default Login;

