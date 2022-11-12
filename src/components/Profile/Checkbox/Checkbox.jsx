import { useDispatch, useSelector } from "react-redux";
import d from './Checkbox.module.css'

const Checkbox = () => {
  
    const isChanged = useSelector(state => state.profile.valueCheckbox);
    const dispatch = useDispatch();
    const wasChanged = () => dispatch({type: 'TOGGLE_ACTION'});
    
    return (
        <>
        <input className={d.input} type='checkbox' onChange={wasChanged} value={isChanged} />
        </>
    )
}

export default Checkbox;