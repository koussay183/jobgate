import React, { useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function AllAboutOffre() {
    const {id} = useParams();
    const [offre, setoffre] = useState({})
    const [letter, setletter] = useState("")
    const [cvLink, setcvLink] = useState("")
    const [idCandidat, setidCandidat] = useState("")
    useEffect(()=>{
        console.log("get Data From Here");
        const fetchData = async () => {
            const res = await fetch("http://localhost:3000/c/get-offre/"+id)
            const data = await res.json()
            setoffre(data)
        }
        fetchData()
    },[])
    const handlePostule = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/c/postule/"+idCandidat+"/"+id,{method : "POST" ,headers: { "Content-Type": "application/json" } , body:JSON.stringify({letter , cvLink})})
    }
  return (
    <div>
        <nav >
            <div className="innerNav">
                <Link className="logo" to="/">JobGate.</Link>
                <div className="menu">
                    <input type='search' placeholder="Search For a Job"></input>
                    <div className="links">
                        <Link to="/signup">SignUp</Link>
                        <Link to="/login/c">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="offreDetlais">
            <h1>{offre?.title}</h1>
            <img src={offre?.imageUrl}></img>
            <p>{offre?.desc}</p>
            <div className="buttonsInOffreHolder">
                <button>Recommender</button>
            </div>
        </div>
        <form onSubmit={(e)=>handlePostule(e)} className="addoffreform">
            <div>
                <label>id Candidat</label>
                <input placeholder="type Id" onChange={(e)=>setidCandidat(e.target.value)}></input>
            </div>
            <div>
                <label>Cv Url</label>
                <input placeholder="type image url" onChange={(e)=>setcvLink(e.target.value)}></input>
            </div>
            <div>
                <label>letter</label>
                <textarea placeholder="type title" onChange={(e)=>setletter(e.target.value)}></textarea>
            </div>
            <input type='submit' value="Postuler"></input>
        </form>
    </div>
  )
}

export default AllAboutOffre