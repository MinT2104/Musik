import { Routes , Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav/Nav';
import songs from "./Context";
import Home from './components/Home/Home';
import Playlist from './components/Playlist/Playlist';
import Save from './components/Pages/Save';
import Setting from './components/Pages/Setting';
import DataSongs from './components/dataSongs/songs.json'
import Audio from "./components/Audio/Audio";
import { useState } from "react";


function App() {

  const [Play,setPlay] = useState(DataSongs[0]) 
  return (
    
    <div className='grid grid-cols-7 w-full'>
      <songs.Provider value={{DataSongs, Play, setPlay}}>
         <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/playlist" element={<Playlist/>} />
      <Route path="/saved" element={<Save/>} />
      <Route path="/setting" element={<Setting/>} />
    </Routes>
    {/* <User /> */}
    <Audio/>
      </songs.Provider>
     
   
    </div>
   

  );
}

export default App;
