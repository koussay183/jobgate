import React, { useEffect, useState } from 'react'

import { useNavigate  } from "react-router-dom"

function CandidatProfile() {
    const navigate = useNavigate()
    const [token, settoken] = useState("")

    useEffect(() => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name == 'token') {
                settoken(decodeURIComponent(value));
                break;
            }
        }
        
    }, [])
    if(!token){
        navigate("/login/c")
    }
    return (
        <div>CandidatProfile</div>
    )
}

export default CandidatProfile