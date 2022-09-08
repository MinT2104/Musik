import { Routes , Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav/Nav';
import songs from "./Context";
import Home from './Layouts/Home/Home';
import Playlist from './Layouts/Playlist/Playlist';
import Save from './Layouts/Saved/Save';
import Setting from './Layouts/Setting/Setting';
import DataSongs from './dbnobe/dataSongs/songs.json'
import Audio from "./components/Audio/Audio";
import { useState } from "react";
import Login from "./Layouts/LoginPage/Login";
import Signup from "./Layouts/LoginPage/Signup";
import NavMob from "./components/Nav/NavMob";
import Songdetail from "./components/Songdetail/Songdetail";


function App() {

  const [Play,setPlay] = useState(DataSongs[0]) 
  const [navMob, setNavMob] = useState(false)
  return (
    <>
      <div className='grid md:grid-cols-7 w-full'>
      <songs.Provider value={{DataSongs, Play, setPlay, navMob, setNavMob}}>
        <div className="md:block hidden">
          <Nav />
        </div>
        <div className="md:hidden block">
          <NavMob />
        </div>

        
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/playlist" element={<Playlist/>} />
      <Route path="/saved" element={<Save/>} />
      <Route path="/setting" element={<Setting/>} />
    </Routes>
  
    <Audio/>
      </songs.Provider>
    </div>
    <div>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </>
  
   

  );
}

export default App;
