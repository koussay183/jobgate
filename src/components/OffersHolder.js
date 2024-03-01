import React, { useEffect, useState } from 'react'
import Offre from './Offre'

function OffersHolder() {
  const [offres, setoffres] = useState([1,2])
  useEffect(()=>{
    const fecthData = async () => {
      const res = await fetch("http://localhost:3000/e/offres/65d9ed6cd59b32d97b81fc1d")
      const data = await res.json()
      setoffres(data?.offers)
    }
    fecthData()
  },[])
  return (
    <div>
      {offres?.map(offre => <Offre id={offre._id} image={offre.imageUrl} title={offre.title}/>)}
    </div>
  )
}

export default OffersHolder