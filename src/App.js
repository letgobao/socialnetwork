import Home from "./page/home/Home";
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { useSelector } from "react-redux";
import Profile from "./page/profile/Profile";
import Auth from "./page/Auth/Auth";


function App() {
  const user = useSelector((state)=> state.authReducer.authData)
  return (
    <div className="App">
      <div className="blur" style={{top:'-15%', right: '5%'}}></div>
      <div className="blur" style={{top:'35%', left: '15%'}}></div>
        <Routes>
          <Route path="/" element={user? <Navigate to='home'/> : <Navigate to='auth'/>}/>
          <Route path="/home" element={user? <Home/> : <Navigate to='../auth'/>}/>
          <Route path="/auth" element={user? <Navigate to='../home'/> : <Auth/>}/>
        </Routes>      
    </div>
  );
}

export default App;
