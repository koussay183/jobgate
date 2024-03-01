import React , {useEffect , useState} from 'react'
import { NavLink, Outlet, useNavigate  } from "react-router-dom"

function EntrepriseProfile() {
    const navigate = useNavigate()
    const [token, settoken] = useState("")

    // useEffect(() => {
    //     const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    //     for (const cookie of cookies) {
    //         const [name, value] = cookie.split('=');
    //         if (name == 'token') {
    //             settoken(decodeURIComponent(value));
    //             break;
    //         }
    //     }
    //     console.log(token);
    //     if(!token){
    //         navigate("/login/e")
    //     }
    // }, [])
  return (
    <div>
        <nav>
            <NavLink to="add-offre" className="navlink">Add Offre</NavLink>
            <NavLink to="my-offres" className="navlink">My Offers</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}

export default EntrepriseProfile