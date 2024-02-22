import React from 'react'
import { Link } from 'react-router-dom'

function Offre({title , image , id}) {
  return (
    <Link className="Offre" to={`/offre/${id}`} style={{textDecoration : "none"}}>
        <span>{title}</span>
        <img className="imageInOffre" src={image}></img>
    </Link>
  )
}

export default Offre