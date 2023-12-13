import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from './helper/axiosInstance'

const View = () => {
    let[userData, setUserData]=useState([])
    let navigate=useNavigate()

    useEffect(()=>{
        let fetchDate=async()=>{
            let {data}=await axiosInstance.get('/posts')
            setUserData(data)
        }
        fetchData();

    },[])
  return (
    <div>
        {userData.map((x)=>{
            return(
                <>
                <h1>{x.name}</h1>
                <h1>{x.password}</h1>
                <button onClick={()=>{
                    navigate(`/updates/${x.id}`)
                }}>Update</button>
                <button onClick={handleChange}>Delete</button>
                </>
            )

        })}
    </div>
  )
}

export default View