import React, { useEffect , useState} from 'react'
import { useParams ,useNavigate, Link } from 'react-router-dom';


function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {role} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(role != "c" && role != "e"){
        navigate("/")
    };
  },[])

  return (
    <div className="Login">
      <Link to="/" className="goHomeBtn">Home</Link>
        <form>
            <h1> {role == "c" ? "Candidat" : "Entreprise"} Login</h1>
            <div>
                <label>Email</label>
                <input type='email' placeholder='Type Your Eamil' onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder='Type Your Password' onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <input type='submit' value="login"></input>
            <Link to={role == "c" ? "/login/e" : "/login/c"} className="loginSwitcher">{role == "c" ? "Login as Entreprise" : "Login as Candidat"}</Link>
        </form>
    </div>
  )
}

export default Login