
import MyService from "../../components/MyService/MyService";
import User from "../../components/User/User";
import AllSongs from "./AllSong";
import CreatePlaylist from "./CreatePlaylist";
import HotPlaylist from "./HotPlaylist";
import NewPlaylist from "../../components/NewPlaylist/NewPlaylist";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';




const Playlist = () => {

    const [alertCreate, setAlertCreate] = useState(false)
    return ( 
        <div className="col-span-6 h-screen bg-[#170f23] overflow-auto">
            <User/>
            {
                alertCreate &&
                // <div className="origin-top w-3/5 text-center text-white bg-orange-500 p-4 py-6 rounded-xl mx-auto  border-[1px] border-orange-700">
                // Please Sign In To Create Your Own Playlist
                // </div>
                <div className="w-4/5 md:w-1/5 mx-auto absolute bottom-24 left-4 z-50">
                    <Alert variant="filled" severity="info">
                        <AlertTitle>No Account was found</AlertTitle>
                        Please sign in to save this song — <strong>check it out!</strong>
                    </Alert>
                </div>
                

            }
            
            <CreatePlaylist alert={alertCreate} setAlert={setAlertCreate}/>
            <HotPlaylist/>
            <AllSongs/>
            <MyService/>
           
        </div>
     );
}
 
export default Playlist;