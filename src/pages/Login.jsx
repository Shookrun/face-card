import { use, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
    const[username,setUsername] = useState("")
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        login(username)
        navigate("/")
    }
  return (
    <div>
        <h2>Login Page</h2>
        <input type="text"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login