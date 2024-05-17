

function form({changeNewClub , addNewClub} ) {

  const handleChange =(ev)=>{

    const value = ev.target.name === "name" ? ev.target.value :ev.target.checked
    const objet={key:ev.target.name, value:ev.target.value}
    changeNewClub(objet)

  }

  const handleClick=(ev)=>{
    ev.preventDefault()
    addNewClub()
  }
   

  return (
<form  acction = "" onchange={handleChange}>
    <label hmtlForm= "name">nombre del club</label>
      <input type="text" name="name" id="name" />
      
      <label htmlFor="">abre entte semama"</label>
    <input type="checkbox" name="openweekdays" id="openweekdays" />
    <label htmlFor="">abre el fin de  semama"</label>
    <input type="checkbox" name="openOneWeekdays" id="openOneWeekdays" />

    <button onClick={handleClick}>nuevo club</button>
</form>
  )
}

export default form
