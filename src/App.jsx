
import { Route, Routes, Navigate } from "react-router-dom"; 
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Location from "./pages/Location";
import Locations from "./pages/Locations";
import NewMerchant from "./pages/NewMerchant";
import Navbar from "./components/Navbar";
import Clients from "./pages/Clients";
import Client from "./pages/Client";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
      <Route path="/location" element={<PrivateRoute><Location /></PrivateRoute>} /> 
      <Route path="/locations" element={<PrivateRoute><Locations /></PrivateRoute>} />
      <Route path="/newmerchant" element={<PrivateRoute><NewMerchant /></PrivateRoute>} />
      <Route path="/clients" element={<PrivateRoute><Clients /></PrivateRoute>} />
      <Route path="/client" element={<PrivateRoute><Client /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
