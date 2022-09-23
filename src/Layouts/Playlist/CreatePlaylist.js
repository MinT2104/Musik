import { useState } from "react";
import songs from '../../Context';
import { useContext } from "react";
import NewPlaylist from "../../components/NewPlaylist/NewPlaylist";
// import { message } from 'antd';
// import 'antd/dist/antd.css';

const CreatePlaylist = ({alert, setAlert}) => {
    const [addNewPlaylist, setAddNewPlaylist] = useState(false)
    const Playlists = JSON.parse(localStorage.getItem("Playlist"))
    // const Playlists = [
    //     {
    //         title: "My Favorite music",
    //         url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/3/e/023ec1a260786a871b488a508b81ad8f.jpg"
    //     }
    // ]
    const {accessToken} = useContext(songs)
    // const [allPlaylist, setAllPlaylist] = useState(Playlists)
    const handleAddNewPlaylist=()=>{
        accessToken ?
        setAddNewPlaylist(!addNewPlaylist)
        :
        setAlert(true)
        setTimeout(()=>{setAlert(false)},3000)
        // alert("Sign to create your own Playlist")
        
       
    }

    return ( 
        <section>
        <h1 className='font-bold text-xl text-white uppercase ml-12 mt-5'>Your Playlist</h1>
            <div className="w-4/5 overflow-auto flex flex-row gap-4 mx-auto mt-5 bg-[#231b2e] p-4 rounded-3xl mb-14">
                <div>
                    <div 
                        onClick={handleAddNewPlaylist}
                        className="w-32 h-32 md:w-36 md:h-36 bg-gray-200 rounded-3xl flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                    </div>
                        <h1 className="font-bold text-sm text-center mt-2 uppercase text-[#FA2FB5]">
                            Click to create
                        </h1>
                </div>
               
                {
                     Array.isArray(Playlists) && accessToken ?
                    Playlists.map((list, index)=>(
                    <div key={index} className="w-32 ml-4">
                        <div
                            className="flex-col truncate w-32 h-32 md:w-36 md:h-36 bg-gray-200 rounded-3xl flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
                        <img src={list.url || "https://photo-playlist-zmp3.zmdcdn.me/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rPDEvnhYVG300C-qZtTyri1LM-DQuhvNmC4ODbhtFeF0rCnYZdUfWzENtZODPZq10KTCO1-pBrJI55saJxOzqH8KdR3Fjkz4b079v5gYkf5K5XmmptNxn003IV4QDInHL09VPGnpBbK3mKxnZg7-nrGJc-FQigtMa4E8CKlohvQ5GuftNo6urf12NtQBuFdKq5SVTSgrUTUGrryrY_JumGL36FUF83lGaS7A9nrtgGM3bPbq3BFv5T4GcNHCitaLWqGBjLamh5N2HagqscNi080H7hHRypaL58MA80_pUGU35OjZ7q&size=thumb/240_240"}
                             alt=""/>
                            {/* <h3>{list.title}</h3> */}
                        </div>
                        <h1 className="text-white font-bold text-sm text-center mt-2 truncate">
                            {list.title}
                        </h1>
                    </div>
                
                    ))
                   :null
                }
            </div>
            {
            addNewPlaylist ? 
            <>
        <div className="w-full h-screen absolute top-0 left-0 bg-black opacity-80 z-40 ">
            
        </div>
            <NewPlaylist data={addNewPlaylist} setData={setAddNewPlaylist} />
        </>
        :
        null
        }
        </section>
     );
}
 
export default CreatePlaylist;