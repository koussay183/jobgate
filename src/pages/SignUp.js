import React , {useState}from 'react'
import { Link ,useNavigate  } from "react-router-dom"

function SignUp() {
    const [role, setrole] = useState('c')
    const [fullName, setfullName] = useState("")
    const [ename, setename] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        console.log(JSON.stringify({email : email , password : password}));
        e.preventDefault();
        const res = await fetch("http://localhost:3000/"+role+"/signup",
        {
          method : "POST",
          body : JSON.stringify({email : email , password : password , fullName : fullName , name : ename , phoneNumber :phone}),
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
          },
        })
        
        return navigate(`/login/${role}`)
      }
  return (
    <div className='SignUp'>
        <Link to="/" className="goHomeBtn">Home</Link>
        <form onSubmit={(e)=>handleSignup(e)}>
            <h1>SignUp {role == "c" ? "Candidat" : "Entreprise"}</h1>
            <div style={{flexDirection : "row"}} className="radbtnHolder">
                <input type="radio" id="contactChoice1" name="role" value="c" onClick={(e)=>setrole(e.target.value)} checked={role === 'c'}/>
                <label for="contactChoice1" style={{marginRight : "1em"}}>Candidat</label>

                <input type="radio" id="e" name="role" value="e" onClick={(e)=>setrole(e.target.value)} checked = {role === 'e'}/>
                <label for="e">Entreprise</label>
            </div>
            {role == 'c' && <div>
                <label>Full Name</label>
                <input type='text' placeholder='type full name' onChange={(e)=>setfullName(e.target.value)}></input>
            </div>}
            {role == 'e' && <div>
                <label>Entreprise Name</label>
                <input type='text' placeholder='type full name' onChange={(e)=>setename(e.target.value)}></input>
            </div>}
            <div>
                <label>Phone Number</label>
                <input type='tel' placeholder='type full name' onChange={(e)=>setphone(e.target.value)}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='email' placeholder='type full name' onChange={(e)=>setemail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder='type full name' onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <input type="submit" value="SignUp"></input>
        </form>
    </div>
  )
}

export default SignUp