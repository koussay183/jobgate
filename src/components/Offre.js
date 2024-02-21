import React from 'react'

function Offre({title , image , id}) {
  return (
    <div className="Offre">
        <span>{title}</span>
        <img className="imageInOffre" src={image}></img>
    </div>
  )
}

export default Offre