import Club from "./Club"

function AllClubs({data}) {

  return (
    <ul>

      {data.map ((club ,i) => <li key ={club.id} className="li" > <Club club={club} /> </li>)}
      

    </ul>
  )
}

export default AllClubs
