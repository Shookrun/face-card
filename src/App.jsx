import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom"
import { AuthProvider,useAuth } from "./context/AuthContext"
import Home from "./pages/Home"
import Login from "./pages/Login"

const ProtectedRoute = ({children})=>{
const {user} = useAuth()
if(!user){
  return <Navigate to="/login" />
}
return children
}
function App() {

  return (
    <AuthProvider>
     <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </Router>
    </AuthProvider>
  )
}

export default App
