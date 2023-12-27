// import React, { useState } from 'react'
// import axiosInstance from './helper/axiosInstance'
// import { useNavigate } from 'react-router-dom'

// const States = () => {
//     let[name, setName]=useState("")
//     let[password, setPassword]=useState("")

//     let navigate =useNavigate()

//     let submit=(c)=>{
//         c.preventDefault()
//         let payload={name, password}

//         axiosInstance.post("/posts",payload)
//         alert("Sucess")
//         navigate("/view")


//     }

//   return (
//     <>
//     <form action="">
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" id="name" 
//         onChange={(a)=>{
//             setName(a.target.value)
//         }}/>

//         <label htmlFor="pass">Password</label>
//         <input type="text" name="pss" id="pass" onChange={(b)=>{
//             setPassword(b.target.value)
//         }}/>

//         <button type="submit" onClick={submit}>Submit</button>
//         <button type="reset">Cancel</button>
//     </form>
//     </>
//   )
// }

// export default States

import React from 'react'
import Hoc from './Hoc'

const States = (props) => {
  return (
    <div>{props.data}</div>
  )
}

export default Hoc( States)