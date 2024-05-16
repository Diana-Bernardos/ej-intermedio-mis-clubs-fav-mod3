import React from 'react'

function Filter({setFilter}) {

  /* const handleChange =(ev)=>{
    setFilter(ev.target.value)
  } */
  return (
    <div>
      <label htmlFor=""></label>
      <select onChange={(ev)=>setFilter(ev.target.value)}>
     <option value="all"></option>
     <option value="weekdays">os que abren entre semana</option>
     <option value="weekend">los que abren el fin de semana</option>
     </select>
    </div>
  )
}

export default Filter

