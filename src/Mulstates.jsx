import React, { useState } from 'react'
import axiosInstance from './helper/axiosInstance'

const Mulstates = () => 
{

   let [name, setName] =useState(
        {
            Name:"",
            Age:"",
            Role:""
        }
    )

    let {Name, Age, Role} = name
    let nameChange =(e) =>{
        
        let{name,value} =e.target
        setName({...name, [name] : value})
  
    }


    let handleSubmit = async (e)=>{
        e.preventDefault()


        let p ={
            Name,
            Age,
            Role
        
        }

    await axiosInstance.post("/posts", p)

    }

  return (
    <div>
        <form action="">
                Name: <input type="text" name="Name" onChange={nameChange} />
                Age: <input type="text"  name="Age" onChange={nameChange}/>
                Role: <input type="text" name="Role" onChange={nameChange} />
                <button onClick={handleSubmit}>Submit</button>



        </form>
    </div>
  )
}

export default Mulstates;