import React, { useState } from 'react'
import Products from './products'

function Recipe() {


    const[search, setsearch] = useState("")

     const[data, setdata] = useState([])
    const changeHandler=(e)=>{
      setsearch(e.target.value)
      
      
    }


    const submitHandler=(e)=>{
        e.preventDefault()
       
     fetch(`https://dummyjson.com/recipes/search?q=${search}`).then(res=>res.json()).then(res=>{setdata(res.recipes)
      
     })
    }
  return (
    <div >

  <h1>food Recipe App</h1>
    <form onSubmit={submitHandler}>
    <input type="text"  value={search} onChange={changeHandler}/>
    <br />
    <input type="submit" className="btn btn-primary"value="search" />

    </form>

    {
      data.length>=1?<Products data={data}/>:null
    }

    </div>
  )
}

export default Recipe
