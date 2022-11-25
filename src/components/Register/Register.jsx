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
    // let displayName = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    // let file = e.target[4].value;
    dispatch(registerUserThunk(email, password));
  }

  return !isAuth ? (
    <div className={d.container}>
        <div className={d.model} style={{background: theme.palette.primary.main}}>
            <h3>Chat</h3>
            <p>register</p>
            <form onSubmit={handleSubmit} className={d.form}>
                <input type='text' name='displayName' placeholder="display name"/>
                <input type='email' name='email' placeholder="email"/>
                <input type='password' name='password' placeholder='password' autoComplete='on'/>
                <input  style={{display: 'none'}} type='file' name='file'/>
                <label htmlFor="file" className={d.avatarka}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ds_6MHw0J7Ynb45lX_QaD-i10_rkjV7JLX-6zCZlsl79vzTdcB08N9R6DCZh00zigpc&usqp=CAU" alt='add avatarka'/>
                    <span>Add an avatarka</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You don't have an account. Please, register!</p>
            <Link to='/login'>Login</Link>
        </div>
    </div>
  ) : <Navigate to={'/'} />
}

export default Register;
