import React from "react";
import d from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={d.preloader}>
            <img src='https://flevix.com/wp-content/uploads/2019/07/Color-Loading-2.gif' alt='preloader'/>
        </div>
    )
}

export default Preloader;