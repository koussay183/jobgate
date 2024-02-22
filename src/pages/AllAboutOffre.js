import React, { useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'

function AllAboutOffre() {
    const {id} = useParams();
    const [offre, setoffre] = useState({ id: "1aBcDeF",desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", title: "Software Developer", image: "https://picsum.photos/200" })
    useEffect(()=>{
        console.log("get Data From Here");
    },[])
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
            <img src={offre?.image}></img>
            <p>{offre?.desc}</p>
            <div className="buttonsInOffreHolder">
                <button>Postuler</button>
                <button>Recommender</button>
            </div>
        </div>
    </div>
  )
}

export default AllAboutOffre