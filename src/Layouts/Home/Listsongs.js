import { useContext } from "react";
import songs from "../../Context";
import { useState, useEffect } from "react";
import Songdetail from "../../components/Songdetail/Songdetail";
// import { act } from "react-dom/test-utils";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Listsongs = () => {
    const btn = 'mx-auto text-[#FA2FB5] p-2 w-fit text-lg bg-none border-[1px] border-[#FA2FB5] rounded-full px-5 hover:text-[#FFC23C] hover:border-[#FFC23C] duration-300'

    const [Allsongs, setAllsongs] = useState(false)
    const [idSong, setidSong] = useState(false)
    const [songDetail, setSongdetail] = useState(false)
    const [songData, setSongData] = useState({title: String, avtIMG: String})
    const {setPlay, savedSong, accessToken} = useContext(songs)
    const [heartAlert, setHeartAlert] = useState(true)
    const [saveSong, setSaveSong]= useState(JSON.parse(localStorage.getItem("savedSong")) || savedSong)
    const dataSongs = Object.values(useContext(songs))
    const handleActive =(idSong)=>{
        setidSong(idSong)
    }
    const handleActiveHeart =(item)=>{
        if(accessToken){
            item.active = true
        }else{
            setHeartAlert(false)
            setTimeout(() => {
                setHeartAlert(true)
            }, 2500);
        }
    }
 
    const handleGetAllsongs = ()=>{
        setAllsongs(!Allsongs)
        console.log(Allsongs)
    }
    const handleAddSaveSong =(item)=>{
        if(accessToken){
        setSaveSong(prev=>[...prev,  {
                id: item.id,
                title: item.name,
                avtURL: item.links.images[0].url,
                author: item.author,
                }])
        }
    }
    localStorage.setItem("savedSong", JSON.stringify(saveSong))
    return ( 
        <>
        {!heartAlert && 
        <div className="w-4/5 md:w-1/5 mx-auto absolute bottom-24 left-4 z-50">
            <Alert variant="filled" severity="info">
                <AlertTitle>No Account was found</AlertTitle>
                 Please sign in to save this song — <strong>check it out!</strong>
            </Alert>
        </div>}
        <h1 className='font-bold text-xl text-white uppercase ml-12 mt-20'>All Songs</h1>
        <div className={`relative w-4/5 mx-auto overflow-hidden ${ Allsongs ? "h-fit" : "sm:h-[680px] h-[650px]"} text-white z-20 mt-5 mb-10`}>
           <table className="mx-auto w-full">
                <tr className="text-left">
                    <th className=" text-center text-[#FA2FB5]">#</th>
                    <th className="py-2 pl-2 text-left">Name</th>
                    {/* <th className="py-2 md:inline hidden">Author</th> */}
                    <th className="py-2 w-32 text-left">Download</th>
                </tr>
                     {dataSongs[0].map((item ,index)=>(
                    
                        <tr 
                        className={
                        ` rounded-xl  hover:translate-x-3 hover:text-[#FFC23C] duration-300
                        ${idSong === item.id && "bg-[#231b2e] text-[#FFC23C]"}
                        `} 
                        key={index}
                        onClick={()=>{
                           console.log("alo")
                        }
                        }
                        >
                            <td
                            onClick={
                                ()=>{
                                    handleActive(item.id)
                                    setPlay(item)
                                }
                            }
                            className="pl-2 text-center  font-black">
                                {/* {idSong === item.id &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>
                                  
                                || */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`w-6 h-6 cursor-pointer ${idSong === item.id && "text-[#FA2FB5] animate-spin scale-150"} `}>
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
                                </svg>

                                {/* } */}
                               

                            </td>
                            <td className="py-2 pl-2 flex flex-row text-sm md:text-lg items-center">
                                <div className="flex flex-row items-center gap-3 mt-2">
                                    <img className="w-10 h-10" src={item.links.images[0].url} alt=""/>
                                    <div>
                                        <h1
                                        className="cursor-pointer"
                                        onClick={()=>{
                                            setSongdetail(!songDetail)
                                            setSongData({
                                                title: item.name,
                                                avtIMG: item.links.images[0].url,
                                                author: item.author
                                            })
                                        }}
                                        >{item.name}</h1>
                                        <h3 className="text-gray-500 text-sm">{item.author}</h3>
                                    </div>
                                </div>
                                
                                

                            </td>
                            {/* <td className="py-5 text-left md:inline hidden">{item.author}</td> */}
                            <td className="py-2 cursor-pointer " href={item.url}>
                                <div className="md:py-5 cursor-pointer flex flex-row gap-4 items-center justify-center">
                                    <a href={item.url}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                    <button
                                    onClick={()=> {
                                    handleAddSaveSong(item)
                                     handleActiveHeart(item)
                                    console.log(item)
                                }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`${item.active ? "text-[#FA2FB5]" : ""} w-6 h-6`}>
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>

                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        // console.log(item)
        
                     ))}

                
             </table>
        </div>
        <div className="w-full flex justify-center mb-20">
            {!Allsongs ?
            <button className={btn} onClick={()=>handleGetAllsongs()}>
                {/* {console.log(Allsongs)} */}
            <h1 className=" text-sm">Get All Songs</h1>
            </button>
                :
                <button className={btn} onClick={()=>handleGetAllsongs()}>
                {/* {console.log(Allsongs)} */}
            <h1 className=" text-sm">Get Back</h1>
            </button>
            }
        </div>
        {
            songDetail ? 
            <>
        <div className="w-full h-screen absolute top-0 left-0 bg-black opacity-80 z-40 ">
        </div>
            <Songdetail data={songDetail} setData={setSongdetail} detail={songData} />
        </>
        :
       null
        }
        
        
        </>
     );
}
 
export default Listsongs;