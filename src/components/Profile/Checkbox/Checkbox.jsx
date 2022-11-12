import { useDispatch, useSelector } from "react-redux";
import d from './Checkbox.module.css'

const Checkbox = () => {
  
    const isChanged = useSelector(state => state);
    const dispatch = useDispatch();
    const wasChanged = () => {
        return dispatch({type: 'TOGGLE_ACTION'})
    }
    return (
        <>
        <input className={d.input} type='checkbox' onChange={wasChanged} value={isChanged} />
        </>
    )
}

export default Checkbox;