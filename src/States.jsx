import React, { useState } from 'react'
import axiosInstance from './helper/axiosInstance'

const States = () => {
    let[name, setName]=useState("")
    let[password, setPassword]=useState("")

    let submit=(c)=>{
        c.preventDefault()
        let payload={name, password}

        axiosInstance.post("posts",payload)
        alert("Sucess")

    }

  return (
    <>
    <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" 
        onChange={(a)=>{
            setName(a.target.value)
        }}/>

        <label htmlFor="pass">Password</label>
        <input type="text" name="pss" id="pass" onChange={(b)=>{
            setPassword(b.target.value)
        }}/>

        <button type="submit" onClick={submit}>Submit</button>
        <button type="reset">Cancel</button>
    </form>
    </>
  )
}

export default States