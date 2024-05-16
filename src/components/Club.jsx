

function Club({club}) {
  return (
    <article>
      <title>{club.name}</title>
      <p>Abierto entre semana{club.openOneWeekdays ? "SI" : "NO"} </p>
      <p>Abierto el fin de semana{club.openOneWeekend  ? "SI" : "NO"}</p>
    </article>
  )
}

export default Club
