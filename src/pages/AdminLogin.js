import React, {useState}from 'react'

function AdminLogin() {
    const [key,setKey] = useState("")
    return (
        <div className='AdminLogin'>
            <form>
                <div>
                    <label>Admin Key</label>
                    <input type='password' placeholder='type admin key' onChange={(e)=>setKey(e.target.value)}></input>
                </div>
                <input type='submit' value="login"></input>
            </form>
        </div>
    )
}

export default AdminLogin