
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './compo/Box';
function App() {

  let number = useSelector(state=>state.number)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  const dispatch = useDispatch()

  const plusone = () =>{
    dispatch({type:"INCREMENT",payload:{Num:5}})//payload?

  }

  const login = () => {
    dispatch({type:"LOGIN",payload:{id:"chosoungwoong",password:"q1w2e3r4"}})
  }

  const minusthree = () =>{
    dispatch({type:"DECREMENT",payload:{Num:3}})
  }
  return (
    <div className="App">
      <h1>{id},{password}</h1>
      <div>
        {number}
      </div>
      <button onClick={plusone} >+5</button>
      <button onClick={minusthree}>-3</button>
      <button onClick={login} >로그인</button>
      <Box/>
    </div>
  );
}

export default App;
