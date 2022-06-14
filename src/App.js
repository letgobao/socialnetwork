import Home from "./page/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Profile from "./page/profile/Profile";
import Auth from "./page/Auth/Auth";


function App() {
  return (
    <div className="App">
      <div className="blur" style={{top:'-15%', right: '5%'}}></div>
      <div className="blur" style={{top:'35%', left: '15%'}}></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
