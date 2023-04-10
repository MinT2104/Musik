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
import { useEffect } from "react";
import NavMob from "./components/Nav/NavMob";


function App() {
  const activePath = localStorage.getItem("activepath")
  localStorage.setItem("activepath", activePath || "/" )
  const savedSong = [
    {
        id: "A",
        title: "Blank Space",
        author: "Taylor Swift",
        avtURL: "https://i.scdn.co/image/ab6761610000e5eb9e3acf1eaf3b8846e836f441"
    },{
        id: "B",
        title: "What Do You Mean",
        author: "Justin Bieber",
        avtURL: "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
    },{
        id: "C",
        title: "Can't blame a girl for trying",
        author: "Sabrina Carpenter",
        avtURL: "https://i.scdn.co/image/ab6761610000e5ebd546aecf1aac2633551f4c26"
    }
]
  const dataUser = JSON.parse(localStorage.getItem("user"))
  const accessToken = JSON.parse(localStorage.getItem("token"))
  const [Play,setPlay] = useState(null) 
  const [navMob, setNavMob] = useState(false)
  const [logged, getLogged] = useState(false)
    useEffect(()=>{
        accessToken ? getLogged(true) : getLogged(false)
    },[accessToken])
  return (
    <>
      <div className='grid md:grid-cols-7 w-full'>
      <songs.Provider value={{DataSongs, Play, setPlay, navMob, setNavMob, dataUser, accessToken, logged, savedSong}}>
        <div className="md:block hidden">
          <Nav />
        </div>
        <div className="md:hidden block">
          <NavMob dataNav={navMob} setDataNav={setNavMob}/>
        </div>

        
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route  path="/playlist" element={<Playlist/>} />
        <Route  path="/saved" element={<Save/>} />
        <Route  path="/setting" element={<Setting/>} />
      </Routes>
    {
      Play !== null && 
      <Audio/>
    }
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
