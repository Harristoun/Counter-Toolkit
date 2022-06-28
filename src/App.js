
import { useDispatch, useSelector } from 'react-redux';
import {dec, inc, clear } from './features/counterReducer'




function App() {

// 

  const num = useSelector((state) => state.counter)

const dispatch = useDispatch()


  const handleInc = () =>{
    dispatch(inc())
  }

  const handleDec = () =>{
    dispatch(dec())
  }
  const handleClear = () =>{
    dispatch(clear())
  }

  return  (
    <>
    <button onClick={handleDec}>➖</button>
    <button  onClick={handleClear}>🗑</button>
    <button onClick={handleInc}>➕</button>
    <input />
    <button>💢</button>
    <div>{num}</div>
    </>
  )
}

export default App;