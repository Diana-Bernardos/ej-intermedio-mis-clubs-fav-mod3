import "../styles/App.scss";
 import Header from "../components/Header";
import AllClubs from "../components/AllClubs";
import data from "../Services/data.json"
import Form from "../components/Form";
import { useState } from "react";
import Filter from "./Filter";




function App() {
  const [clubs,setClubs]=useState(data);
  const[newClub,setNewClub]= useState ({name:"", openOneWeekdays:false,openOneWeekend:
  false })
  const [filter,setFilter]=useState("all")


  // añadir nuevo club
  const changeNewClub =(objet)=>{
    const newObjet ={
      ...newClub,
      [key]:value
    }
    newObjet.id= clubs.length+1
    setNewClub({...newClub,[objet.key]:objet.value})
  }
  //añadir nuvo club al array del allclubs( todos )
const addNewClub =() =>{
  setClubs ([...clubs,newClub])
}
const filteredClubs = clubs.filter((club)=>{
if(filter === "weekend"){
  return clubs.openOneWeekend === true
}else if (filter === "weekdays"){
  return clubs.openOneWeekdays === true
}
return true

})


  return (
    <>
      <Filter setFilter={setFilter}/>
      <AllClubs data ={filteredClubs} />
      <Form  changeNewClub={changeNewClub} addNewClub={addNewClub}/>
     

    </>
  )
}

export default App
