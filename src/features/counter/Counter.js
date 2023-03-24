import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "./counterSlice";
import './style.css'
const Counter=()=>{
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
    return(
        <div id='main'>
        <div><button onClick={()=>dispatch(increment())}>+</button></div>
        <div id='count'> {count} </div>
        <div><button onClick={()=>dispatch(decrement())}>-</button></div>
        </div>
    )
}
export default Counter;