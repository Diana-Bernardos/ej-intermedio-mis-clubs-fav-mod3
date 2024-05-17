

function Filter({setFilter}) {

  const handleChange =(ev)=>{
    setFilter(ev.target.value)
  } 
  return (
    <div>
      <label htmlFor="">mostrar</label>
      <select onChange={handleChange}>
     <option value="all">todos</option>
     <option value="weekdays">os que abren entre semana</option>
     <option value="weekend">los que abren el fin de semana</option>
     </select>
    </div>
  )
}

export default Filter

