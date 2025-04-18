// App.jsx
import { Route, Routes, Navigate } from "react-router-dom"; // Import necessary components
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Locations from "./pages/Locations";

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
      <Route path="/location" element={<PrivateRoute><Locations /></PrivateRoute>} /> 
    </Routes>
  );
}

export default App;
