import React , {useState} from 'react'
import { Link } from "react-router-dom"
import Row from '../components/Row';

function Home() {
    const [genres, setgenres] = useState([
        {"id": "a8sdf92", "name": "Web Developer"},
        {"id": "1dkl0sd", "name": "Designer"},
        {"id": "c7ds91j", "name": "IT Specialist"},
        {"id": "m2n9sdf", "name": "Web Developer"},
        {"id": "p0dsf84", "name": "IT Specialist"},
        {"id": "5ldskf3", "name": "Web Developer"},
        {"id": "9dsk2m1", "name": "Web Developer"},
        {"id": "sdf1k2j", "name": "Designer"},
        {"id": "klsdfj4", "name": "IT Specialist"},
        {"id": "o9dfk3s", "name": "Web Developer"},
        {"id": "6dskfl9", "name": "IT Specialist"},
        {"id": "z2klsdf", "name": "Designer"},
        {"id": "2lksdf0", "name": "Web Developer"},
        {"id": "lksd4f9", "name": "Web Developer"},
        {"id": "sdfgj32", "name": "Designer"},
        {"id": "2sdlk4j", "name": "IT Specialist"}
      ])
  return (
    <div className="Home">
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

        <div className="genreHolder">
                  
            <div className="row__posters">
                {genres?.map((genre, key) => {
                    
                        return (
                            <Link
                            id={genre.id}
                            key={key}
                            className="genree"
                            to={`/discover/genre/${genre.id}/${genre.name}`}
                            >
                                {genre.name}
                            </Link>
                        );
                })}
            </div>
        </div>

        <main>
            {genres?.map((genre, key) => {
                        
                        return (
                            <Row title={genre.name} genreId={genre.id}/>
                        );
                })}
        </main>
        <footer>
            <div className="innerFooter">
                <h1 className="logo">JobGate.</h1>
                <label>Support@jobgate.com</label>
            </div>
        </footer>     
    </div>
  )
}

export default Home