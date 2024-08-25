import React from 'react'
import { useSelector } from 'react-redux'
import Boxinsidebox from './Boxinsidebox'

const Box = () => {

    const number = useSelector(state=>state.number)
  return (
    <div>현제 숫자는 {number}
    
    <Boxinsidebox/>
    </div>
  )
}

export default Box