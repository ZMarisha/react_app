import React from "react";

const Preloader = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'white'
            }}>
            <img src='https://flevix.com/wp-content/uploads/2019/07/Color-Loading-2.gif' alt='preloader' style={{
                display: 'block',
                objectFit: 'contain',
                height: 'inherit',
                width: 'inherit',
            }}/>
        </div>
    )
}

export default Preloader;