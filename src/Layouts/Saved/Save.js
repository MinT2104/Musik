import User from "../../components/User/User";
import songs from '../../Context';
import { useContext , useState} from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const Save = () => {
   const saved_Songs =  JSON.parse(localStorage.getItem("savedSong"))
    const {accessToken} = useContext(songs)
    const [allSaveSong, setAllSaveSong] = useState(saved_Songs)
    const [songId, setSongId] = useState("")
    // useEffect(()=>{
    // setAllSaveSong(saved_Songs)
    // },[saved_Songs])
    const handleDeleteSong = (index,song)=>{
        setAllSaveSong(()=> allSaveSong.filter(function(value){
            if (value === song ){
                return false;
            }
            return true;
        })
        )
        console.log(allSaveSong)
        localStorage.setItem("savedSong",JSON.stringify(allSaveSong))
       
    }

    // const Numbers = ["10", "20", "30", "40"]
    // Numbers.filter(function(data){
    //     if(data === "20")
    //     {
    //         return false;
    //     }
    //     return true;
    // })
    // console.log(Numbers)
    // // ["10", "30", "40"]






    
    return ( 
    <div className="col-span-6 h-screen bg-[#170f23] overflow-auto">
            <User/>
        <h1 className="text-white uppercase text-center text-2xl font-bold mt-10">Saved</h1>
        
        <span className="flex flex-row items-center gap-2 justify-center mb-10 mt-3">
         <h1 className="text-white text-center text-lg font-light ">Your Favourite Songs</h1>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
        </span>
        
        {accessToken ?  
        <ul className="mx-auto w-full items-center flex flex-col gap-3">
            {Array.isArray(allSaveSong) && allSaveSong.map((song,index)=>(
                song.title ?
                <li key={song.id} className="hover:translate-x-1.5 duration-300 cursor-pointer w-4/5 w-4/5 h-fit p-2 rounded-full items-center justify-between flex flex-row bg-[#231b2e] pr-10">
                <div className="flex flex-row gap-4">
                    <div className="w-14 h-14 rounded-full truncate">
                        <img src={song.avtURL} alt=""/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h5 className="text-white">{song.title}</h5>
                        <h6 className="text-gray-500">{song.author}</h6>
                    </div>
                </div>
                
                <span>
                    <button
                    onClick={()=>{
                        handleDeleteSong(index,song)
                        setSongId(song.id)
                    }  
                    }
                    className="p-2 text-white bg-red-500 rounded-full px-4 hover:scale-110 duration-300"> Delete</button>
                </span>
            </li>
            : null
            ))}
            
           
        </ul>
        :       
            <div className="w-4/5 mx-auto">
                <Alert variant="filled" severity="info">
                    <AlertTitle>No Account was found</AlertTitle>
                    Please sign in to use it — <strong>check it out!</strong>
                </Alert>
            </div>
    }

       
        </div>
     );
}
 
export default Save;

