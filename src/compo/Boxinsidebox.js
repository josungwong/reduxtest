import React from 'react'
import { useSelector } from 'react-redux'

const Boxinsidebox = () => {
    const number = useSelector(state=>state.number)
  return (
    <div>{number}입니다</div>
  )
}

export default Boxinsidebox