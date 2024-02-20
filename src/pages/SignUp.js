import React , {useState}from 'react'

function SignUp() {
    const [role, setrole] = useState('c')
    const [fullName, setfullName] = useState("")
  return (
    <div className='SignUp'>
        <form>
            <h1>SignUp {role == "c" ? "Candidat" : "Entreprise"}</h1>
            <div>
                <input type="radio" id="contactChoice1" name="role" value="c" onClick={(e)=>setrole(e.target.value)} checked={role === 'c'}/>
                <label for="contactChoice1">Candidat</label>

                <input type="radio" id="e" name="role" value="e" onClick={(e)=>setrole(e.target.value)} checked = {role === 'e'}/>
                <label for="e">Entreprise</label>
            </div>
            {role == 'c' && <div>
                <label>Full Name</label>
                <input type='text' placeholder='type full name' onChange={(e)=>setfullName(e.target.value)}></input>
            </div>}
        </form>
    </div>
  )
}

export default SignUp