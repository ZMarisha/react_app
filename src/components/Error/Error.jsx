import React from "react";
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { getNewsThunk } from "../../redux/newsReducer";
import d from './Error.module.css'



const Error = () => {
    
    const dispatch = useDispatch();
    const reload = () => {
        dispatch(getNewsThunk())
    }

    return (
        <div className={d.error}>
            <h1>An error has occurred</h1>
            <Button onClick={reload} variant='contained' size='large' sx={{ fontWeight: '600', width: '120px', marginTop: '20px' }} type='submit'>RELOAD</Button>
        </div>
    )

}

export default Error;