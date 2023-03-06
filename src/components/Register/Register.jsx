import React from "react";
import d from './Register.module.css';
import { Navigate, Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useDispatch} from "react-redux";
import { registerUserThunk } from '../../redux/registerReducer';
import { useAuth } from "../../hook/useAuth";



const Register = () => {

  const theme = useTheme();
  const dispatch = useDispatch();
  const isAuth = useAuth().isAuth;

  
  const handleSubmit = async(e) => {
    e.preventDefault()
    let displayName = `${e.target[0].value} ${e.target[1].value}`;
    console.log(displayName)
    let email = e.target[2].value;
    let password = e.target[3].value;
    dispatch(registerUserThunk({email, password, displayName}));
  }

  return !isAuth ? (
    <div className={d.container}>
        <div className={d.model} style={{background: theme.palette.primary.main}}>
            <h3>Chat</h3>
            <p>register</p>
            <form onSubmit={handleSubmit} className={d.form}>
                <input type='text' name='displayName' placeholder="first name"/>
                <input type='text' name='displayName' placeholder="last name"/>
                <input type='email' name='email' placeholder="email"/>
                <input type='password' name='password' placeholder='password' autoComplete='on'/>
                <button>Sign up</button>
            </form>
            <p>You don't have an account. Please, register!</p>
            <Link to='/login'>Login</Link>
        </div>
    </div>
  ) : <Navigate to={'/'} />
}

export default Register;
