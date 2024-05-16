

function form({changeNewClub , addNewClub} ) {

  const handlehange =(ev)=>{

    const value= ev.target.name ==="name" ? ev.target.name:ev.target.checked,
    changeNewClub=()=> {([key](ev.target.name ,value))}
  }

  const handleClick=(ev)=>{

    ev.preventDefault();
  addNewClub();
  }
  
  return (
<form  acction = ""onchange={handlehange}>
    <label hmtlForm= "name ">nomnre del club
      <input type="text" name="Club" id="name" />
      </label>
      <label htmlFor="">abre entte semama"</label>
    <input type="checkbox" name="openweekdays" id="openweekdays" />
    <label htmlFor="">abre el fin de  semama"</label>
    <input type="checkbox" name="openOneWeekdays" id="openOneWeekdays" />

    <button  type="submit" value="añadir "onClick={handleClick}>nuevo club</button>
</form>
  )
}

export default form
