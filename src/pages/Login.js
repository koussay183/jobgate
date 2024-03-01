import React, { useEffect , useState} from 'react'
import { useParams ,useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
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

  const [token,settoken] = useState("")
  useEffect(() => {
    const AuthCheck = async ()=> {
      const res = await fetch("http://localhost:3000/check-auth")
      const data = await res.json()
      console.log(data);
    }
    AuthCheck()
}, [])

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/"+role+"/login",
    {
      method : "POST",
      body : JSON.stringify({email : email , password : password}),
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    })
    const data = await res.json();
    document.cookie = `${"token"}=${data.token}; path=/`;
    console.log(Cookies.get('token'));
    return navigate('/profile/c');

  }

  return (
    <div className="Login">
      <Link to="/" className="goHomeBtn">Home</Link>
        <form onSubmit={(e)=>handleLogin(e)}>
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