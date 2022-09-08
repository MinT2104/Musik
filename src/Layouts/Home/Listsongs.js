import { useContext } from "react";
import songs from "../../Context";
import { useState, useEffect } from "react";
// import { comment } from "postcss";
// import songs from "../../Context";

const Listsongs = () => {
    let UserComment = ["This is a great song!!", "nice Bro?!"]
    const [like, setLike] = useState(false)
    const [allComments, setAllComments] = useState(UserComment)
    const [reply, setReply] = useState(false)
    const [Allsongs, setAllsongs] = useState(false)
    const [idSong, setidSong] = useState(false)
    const [songDetail, setSongdetail] = useState(false)
    const [comment, setComment] = useState("")
    const {setPlay} = useContext(songs)
    const btn = 'mx-auto text-[#FA2FB5] p-2 w-fit text-lg bg-none border-[1px] border-[#FA2FB5] rounded-full px-5 hover:text-[#FFC23C] hover:border-[#FFC23C] duration-300'
    const dataSongs = Object.values(useContext(songs))
    const handleActive =(idSong)=>{
        setidSong(idSong)
    }
    const handleLike =(like)=>{
        setLike(like)
    }
    const handleAddComment =()=>{
     setAllComments(prev=> [...prev,comment])
     setComment("")
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
                    <th className=" text-center text-[#FA2FB5]">#</th>
                    <th className="py-2 pl-2 text-left">Name</th>
                    {/* <th className="py-2 md:inline hidden">Author</th> */}
                    <th className="py-2 w-32 text-left">Download</th>
                </tr>
                     {dataSongs[0].map((item ,index)=>(
                    
                        <tr 
                        className={
                        `cursor-pointer rounded-xl hover:bg-[#231b2e] hover:translate-x-3 hover:text-[#FFC23C] duration-300
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
                            className="pl-2 text-center text-[#FA2FB5] font-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>

                            </td>
                            <td className="py-2 pl-2 flex flex-row text-sm md:text-lg items-center">
                                <div className="flex flex-row items-center gap-3 mt-2">
                                    <img className="w-10 h-10" src={item.links.images[0].url} alt=""/>
                                    <div>
                                        <h1
                                        onClick={()=>{
                                            setSongdetail(!songDetail)
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
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
        <section
        className="text-white w-full bg-none z-50 absolute h-screen top-0 left-0 ">
            <span
             onClick={()=>{
                setSongdetail(!songDetail)
            }}
            className="absolute top-5 right-20 cursor-pointer z-50">
                <button className="px-5 p-2 rounded-full bg-white text-black">
                    Back
                </button>
               </span>
            <div className="
            h-full w-3/5 bg-[#231b2e] mx-auto z-50 overflow-auto
            ">
                <div className="w-full h-72 overflow-hidden bg-cover bg-blue-500">
                    <img src="https://wallpaperaccess.com/full/1363015.jpg" alt=""/>
                </div>
                <div className="w-60 mx-auto relative bottom-32 rounded-xl truncate border-[5px] border-[#231b2e]">
                    <img className="" src="https://i.scdn.co/image/ab6761610000e5ebd546aecf1aac2633551f4c26" alt="" />
                </div>
                <div className="h-screen relative bottom-32">
                    <h1 className="font-light text-lg text-white text-center">
                       <span className="font-black text-3xl"> I m Fakin </span>(Sabrina Carpenter) 
                    </h1>
                <div className="px-20 break-words mt-10">
                    <span className="font-bold text-xl text-[#FA2FB5]">Author: </span>
                    <p className="text-gray-500"> Carpenter was born on May 11, 1999, in Quakertown, Pennsylvania, to David and Elizabeth Carpenter,
                         and raised in East Greenville.[1][6][9] She was raised alongside three older sisters and was homeschooled.
                         [10] At age 10, she began posting videos on YouTube of her singing. Her father built a recording studio for her to fuel her passion for music.
                        [10] In 2011, she placed third in a singing contest, The Next Miley Cyrus Project, run by Miley Cyrus.[11]
                     </p>
                </div>
                <div className="mt-10 flex flex-row">
                    <span className="w-1/2 text-center font-bold text-xl">Comments</span>
                    <span className="w-1/2 text-center font-bold text-xl">Lyrics</span>

                </div>
                <div className="h-full w-full bg-[#231b2e] flex flex-col">
                <div className="w-4/5 mx-auto">
                    
                        <div className="w-full flex flex-row mt-5">
                        <input
                            onChange={(e)=> setComment(e.target.value)}
                            className="mt-10 mx-auto md:p-2 w-0 md:w-[200px] lg:w-4/5 outline-none rounded-full border-[1px] border-white md:pl-5 bg-[#170f23] text-white" placeholder="Write Your Opinion..."/>
                    <div
                    onClick={handleAddComment}
                     className="w-full h-full mx-auto mt-10 w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </div>
                </div>
                    

                <div className="mt-5">

               
   { allComments.map((comment,index)=>(
    <div key={index} className="flex flex-row justify-between py-4">
        <div className="w-1/5">
            <div className="ml-5 w-14 h-14 truncate rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_YYCMOcMCxYZYB1u-VgnLya2uk_cm7-7nVhsUF0M3csJ-3pvtKzb2_in9RsJzsBR-ss&usqp=CAU" alt=""/>
            </div>
        </div>
        <div className="w-4/5 flex flex-col">
            <span className="font-bold text-xl">Anonymous</span>
            <p className="break-words text-gray-500">{comment}</p>
            <div className="flex flex-row gap-5 mt-[2px]">
                <span
                onClick={()=>handleLike(index)}
                className={`font-light text-sm cursor-pointer text-[#FA2FB5]
                ${like === index && "text-[#FA2FB5]"}
                `}>
                    Like </span>
                <span className="font-light text-sm  cursor-pointer">Comment </span>
                <span className="font-light text-sm cursor-pointer">Report </span>
            </div>

        </div>
    </div>
    ))

  }
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
        
            
        </section>
        </>
        :
       null
        }
        
        
        </>
     );
}
 
export default Listsongs;