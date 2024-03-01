
import React, { useState } from 'react'

function AddOffreForm() {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [category, setcategory] = useState("");
    const [image , setimage ] = useState("");
    const [enId, setenId] = useState("65d9ed6cd59b32d97b81fc1d")
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/e/create-offre/"+enId,{method : "POST" ,headers: { "Content-Type": "application/json" } , body:JSON.stringify({title, desc ,  idCategory : category , imageUrl : image})})
        const data = await res.json()
        console.log(JSON.stringify({title, desc ,  idCategory : category}));
        console.log(data);
    }
  return (
    <form className="addoffreform" onSubmit={(e)=>handleSubmit(e)}>
        <div>
            <label>Titre</label>
            <input placeholder="type title" onChange={(e)=>settitle(e.target.value)}></input>
        </div>
        <div>
            <label>Entreprise Id</label>
            <input placeholder="type Id" onChange={(e)=>setenId(e.target.value)}></input>
        </div>
        <div>
            <label>Category Id</label>
            <input placeholder="type Category" onChange={(e)=>setcategory(e.target.value)}></input>
        </div>
        <div>
            <label>Image Url</label>
            <input placeholder="type image url" onChange={(e)=>setimage(e.target.value)}></input>
        </div>
        <div>
            <label>Description</label>
            <textarea placeholder="type title" onChange={(e)=>setdesc(e.target.value)}></textarea>
        </div>
        <input type='submit' value="add offre"></input>
    </form>
  )
}

export default AddOffreForm