import { useContext } from "react";
import songs from "../../Context";
import { useState } from "react";
// import songs from "../../Context";

const Listsongs = () => {
    const [Allsongs, setAllsongs] = useState(false)
    const [idSong, setidSong] = useState(false)
    const {setPlay} = useContext(songs)
    const btn = 'mx-auto text-[#FA2FB5] p-2 w-fit text-lg bg-none border-[1px] border-[#FA2FB5] rounded-full px-5 hover:text-[#FFC23C] hover:border-[#FFC23C] duration-300'
    const dataSongs = Object.values(useContext(songs))
    const handleActive =(idSong)=>{
        setidSong(idSong)
    }
    const handleGetAllsongs = ()=>{
        setAllsongs(!Allsongs)
        console.log(Allsongs)
    }
    return ( 
        <>
        <h1 className='font-bold text-xl text-white uppercase ml-12 mt-20'>All Songs</h1>
        <div className={`relative w-4/5 mx-auto overflow-hidden ${ Allsongs ? "h-fit" : "h-[680px]"} text-white z-20 mt-5 mb-10`}>
           <table className="mx-auto w-full">
                <tr className="text-left">
                    <th className="py-2 text-center text-[#FA2FB5]">#</th>
                    <th className="py-2 pl-2 text-left">Name</th>
                    <th className="py-2">Author</th>
                    <th className="py-2 w-32 text-center">Download</th>
                </tr>
                     {dataSongs[0].map((item ,index)=>(
                    
                        <tr 
                        className={
                        `cursor-pointer rounded-xl hover:bg-[#231b2e] hover:translate-x-3 hover:text-[#FFC23C] duration-300
                        ${idSong === item.id && "bg-[#231b2e] text-[#FFC23C]"}
                        `} 
                        key={index}
                        onClick={()=>{
                            handleActive(item.id)
                            console.log(item)
                            setPlay(item)
                        }
                        }
                        >
                            <td className="py-5 text-center text-[#FA2FB5] font-black">{index + 1}</td>
                            <td className="py-5 pl-2 flex flex-row">
                                <h1>{item.name}</h1>
                            </td>
                            <td className="py-5 text-left">{item.author}</td>
                            <td className="py-5 cursor-pointer" href={item.url}>
                              <a href={item.url}>
                                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                </a>
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
        
        </>
     );
}
 
export default Listsongs;