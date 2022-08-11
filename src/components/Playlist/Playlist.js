
import MyService from "../MyService/MyService";
import User from "../Pages/User/User";
import AllSongs from "./AllSong";
import CreatePlaylist from "./CreatePlaylist";
import HotPlaylist from "./HotPlaylist";

const Playlist = () => {
    return ( 
        <div className="col-span-6 h-screen bg-[#170f23] overflow-auto">
            <User/>
            <CreatePlaylist/>
            <HotPlaylist/>
            <AllSongs/>
            <MyService/>
        </div>
     );
}
 
export default Playlist;