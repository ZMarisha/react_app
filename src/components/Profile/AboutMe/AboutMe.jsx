import React from "react";
import d from './AboutMe.module.css';
import { useSelector } from "react-redux";
import { useTheme } from '@emotion/react';

const AboutMe = () => {
    const myAvatarka = useSelector(state => state.profile.myProfile.avatarka);
    const theme = useTheme();


    return (
        <>
            <h1>My Profile</h1>
            <div className={d.profile}>
                <div className={d.avatarka} style={{border: theme.palette.primary.border}}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Ds_6MHw0J7Ynb45lX_QaD-i10_rkjV7JLX-6zCZlsl79vzTdcB08N9R6DCZh00zigpc&usqp=CAU' alt='myAvatar'/>
                </div>
                
                <div className={d.description}>
                    <h1>Marina Zinchenko</h1>
                    <p>Date of Birth: <span>27 October</span></p>
                    <p>City: <span>Moscow</span></p>
                    <p>Education: <span>BNTU</span></p>
                    <p>Website: <span>https://my-app</span></p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;