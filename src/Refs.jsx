import React, { useRef } from 'react'

const Refs = () => {
    let a=useRef()
    let handleChange = () =>{
        a.current.style.color="Red"
    }
  return (
    <div>
        <h1 ref={a}>Prajwal</h1>
        <button onClick={handleChange}>Click</button>
    </div>
  )
}

export default Refs
