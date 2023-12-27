import React, { useEffect, useState } from 'react'
import axiosInstance from './helper/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let[name, setName]=useState("")
    let[password, setPassword]=useState("")

    let{id}=useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/posts/${id}`)
            setName(data.name)
            setPassword(data.password)
        }
        fetchData();

    },[])

    let submit=(c)=>{
        c.preventDefault()
        let payload={name, password}

        axiosInstance.put(`/posts/${id}`,payload)
        alert("Sucess")
        navigate("/view")

    }

  return (
    <>
    <form action="">
        <label htmlFor="name">Name</label>
        <input value={name} type="text" name="name" id="name" 
        onChange={(e)=>{
            setName(e.target.value)
        }}/>

        <label htmlFor="pass">Password</label>
        <input value={password} type="text" name="pss" id="pass" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>

        <button type="submit" onClick={submit}>Submit</button>
        <button type="reset">Cancel</button>
    </form>
    </>
  )
}

export default Update