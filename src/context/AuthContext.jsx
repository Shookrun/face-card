import { createContext,useContext,useState } from "react"


const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider