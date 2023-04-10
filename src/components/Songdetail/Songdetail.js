
import { stringify } from "postcss"
import {useEffect, useState} from "react"
import songs from '../../Context';
import { useContext } from "react";




const Songdetail = ({ data, setData, detail}) => {
    let UserComment = [
    {
     title: "This is a great song!!",
     userAvt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_YYCMOcMCxYZYB1u-VgnLya2uk_cm7-7nVhsUF0M3csJ-3pvtKzb2_in9RsJzsBR-ss&usqp=CAU",
     children: ["Thanks for listening bro <3!!","vip","haha"]
    },
    {  
        title: "nice Bro?!",
        userAvt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_YYCMOcMCxYZYB1u-VgnLya2uk_cm7-7nVhsUF0M3csJ-3pvtKzb2_in9RsJzsBR-ss&usqp=CAU",
        children: ["mlem mlem =))"]
    } 
    ]
    const {accessToken} = useContext(songs)
    const [valueComment, setValueComment] = useState("")
    const [valueReply, setValueReply] = useState("")
    const [like, setLike] = useState(false)
    const [idComment, setIdComment] = useState(false)
    const [allComments, setAllComments] = useState(UserComment)
    const [inputComment, setInputComment] = useState(false)
    const [reply, setReply] = useState("")
    // const [allReply, setAllReply] = useState(UserComment)
    const [comment, setComment] = useState("")
    // const [songDetail, setSongdetail] = useState(false)

    const handleGetIdComment = (idComment)=>{
        setIdComment(idComment)
    }
    const handleLike =(like)=>{
        setLike(like)
    }
    const handleAddComment = () =>{
        if(comment){
     setAllComments(prev => [...prev, {title: comment, children:[]}])
        }
        setComment('')
        setValueComment("")
    }
    const handleAddReplyComment = () =>{
        if(reply){
            setAllComments(allComments[idComment].children.push(reply))
        }
        // localStorage.setItem("comment", UserComment)
        console.log(allComments)
        // console.log(allReply)
      

        setReply('')
        // setAllReply(UserComment)
        setValueReply("")
        setInputComment(!inputComment)
    }


    return ( 
        <section
        className="animate-opacity text-white w-full bg-none z-50 absolute h-screen top-0 left-0 ">
            <span
             onClick={()=>{
                setData(!data)
            }}
            className="absolute top-5 md:right-20 right-6 cursor-pointer z-50">
                <button className="px-5 p-2 rounded-full bg-white text-black">
                    Back
                </button>
               </span>
            <div className="h-full lg:w-3/5  w-full bg-[#231b2e] mx-auto z-50 overflow-auto scrollbar ">
                <div className="w-full md:h-72 h-60 overflow-hidden bg-cover bg-black">
                    <img src="https://wallpaperaccess.com/full/1363015.jpg" alt=""/>
                </div>
                <div className="w-60 mx-auto relative bottom-32 rounded-xl truncate border-[5px] border-[#231b2e]">
                    <img className="" src={detail.avtIMG} alt="" />
                </div>
                <div className="h-screen relative bottom-32">
                    <div className="text-center flex flex-col block">
                       <h1 className="font-black text-3xl"> {detail.title} </h1>
                      <h1 className="font-light text-lg text-white">({detail.author}) </h1> 
                    </div>
                <div className="md:px-20 px-10 break-words my-10 ">
                    <span className="font-bold text-xl text-[#FA2FB5]">Author: </span>
                    <p className="text-gray-500 md:px-10 px-2"> 
                    One day a wolf found a sheepskin. He covered himself with the sheepskin and got into a flock of sheep grazing in a field. He thought, 
                    "The shepherd will shut the sheep in the pen after sunset. At night I will run away with a fat sheep and eat it." <br/><br/>
                    All went well till the shepherd shut the sheep in the pen and left. The wolf waited patiently for the night to advance and grow darker. 
                    But then an unexpected thing happened. One of the servants of the shepherd entered the pen. His master had sent him to bring a fat sheep for supper. 
                    As luck would have it, the servant picked up the wolf dressed in the sheepskin. That night the shepherd and his guests had the wolf for supper </p>
                </div>
                <div className="font-bold text-xl text-[#FA2FB5] px-10 md:px-20">
                    <span className="w-1/2 text-center font-bold text-xl">Lyrics: </span>
                    <p className="font-light mt-20 text-sm text-center">This Audio is lack of lyrics</p>
                    <hr className="mb-10 mt-2 w-3/5 mx-auto"/>
                </div>
                <div className="px-10 mt-10 font-bold text-xl text-[#FA2FB5]">
                    <span className="w-1/2 text-center font-bold text-xl">Comments</span>

                </div>
            <div className="h-full w-full bg-[#231b2e] flex flex-col">
                <div className="w-4/5 mx-auto">
                    { accessToken && 
                        <div className="w-full flex flex-row mt-2">
                            
                        <input
                            value={valueComment}
                            onChange={(e)=>{
                                    setValueComment(e.target.value)
                                    setComment(e.target.value)
                        }
                            }
                            className="mt-2 mx-auto md:p-2 w-full p-2 px-4 md:w-4/5 lg:w-4/5 outline-none rounded-full border-[1px] border-white md:pl-5 bg-[#170f23] text-white" placeholder="Write Your Opinion..."/>
                    <div
                    onClick={handleAddComment}
                    className="w-full h-full mx-auto mt-2 w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                    </div>
                </div>    
                            }
                
                    

                <div className="mt-5">

           
   { 
   Array.isArray(allComments) && accessToken ?
   allComments.map((comment,index)=>(
    comment ? 
    <div key={index} className="flex flex-row justify-between py-4">
        <div className="w-1/5">
            <div className="md:ml-5 md:w-14 md:h-14 w-10 h-10 truncate rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_YYCMOcMCxYZYB1u-VgnLya2uk_cm7-7nVhsUF0M3csJ-3pvtKzb2_in9RsJzsBR-ss&usqp=CAU" alt=""/>
            </div>
        </div>
        <div className="w-4/5 flex flex-col">
            <span className="font-bold text-xl">Anonymous</span>
            <p>{comment.id}</p>
            <p className="break-words text-gray-500">{comment.title}</p>
            <div className="flex flex-col gap-2 mt-[2px]">
                <div className="flex flex-row gap-5">
                <span
                onClick={()=>handleLike(index)}
                className={`font-light text-sm cursor-pointer text-[#FA2FB5]
                ${like === index && "text-[#FA2FB5]"}
                `}>
                    Like </span>
                <span 
                onClick={()=>{
                    setInputComment(!inputComment)
                    handleGetIdComment(index)
                }
                    
                }
                className="font-light text-sm  cursor-pointer">Reply </span>
                <span className="font-light text-sm cursor-pointer">Report </span>
                </div>


                {/* ----------------------------------reply-------------------------------- */}
        {Array.isArray(allComments[index].children) ?  
        allComments[index].children.map((data, index)=>(
            <div key={index} className="flex flex-row mt-5">
                <div className="w-1/5 justify-between">
                    <div className="md:ml-5 md:w-14 md:h-14 w-10 h-10 truncate rounded-full">
                        <img src="https://a08.t26.net/taringa/avatares/8/0/F/8/2/C/master_miller/250x250_54C.jpg" alt=""/>
                    </div>
                </div>
                <div className="ml-2 w-4/5 flex flex-col">
                    <span className="font-bold text-xl text-[#FA2FB5]">Musik</span>
                    <p className="break-words text-gray-500 md:w-full w-4/5">{data}</p>
                    <div className="flex flex-col gap-2 mt-[2px]">
                <div className="flex flex-row gap-5">
                    
                        <span
                        onClick={()=>handleLike(index)}
                        className={`font-light text-sm cursor-pointer text-[#FA2FB5]
                        ${like === index && "text-[#FA2FB5]"}
                        `}>Like </span>
                        <span 
                        onClick={()=>{
                            setInputComment(!inputComment)
                            handleGetIdComment(index)
                        }
                            
                        }
                        className="font-light text-sm  cursor-pointer"  >Reply </span>
                        <span className="font-light text-sm cursor-pointer">Report </span>
                   
                    
                </div>
                </div>
                </div>
        </div>
        ))
        
                :null
            }
            {/* <replyComment data={allComments} index={index} handleLike={handleLike}
             like={like} setInputComment={setInputComment}
             inputComment={inputComment} handleGetIdComment={handleGetIdComment} /> */}
           


            {/* -----------------------------inputComment-------------------------------- */}
                {inputComment && idComment  === index ? 
                 <div className="flex flex-row  items-center justify-center">
                    <input
                            value={valueReply}
                            onChange={(e)=>{
                                setReply(e.target.value)
                                setValueReply(e.target.value)
                            }}
                            className="mt-2 mx-auto md:p-2 p-2 px-4 w-full md:w-4/5 lg:w-4/5 outline-none rounded-full 
                            border-[1px] border-white md:pl-5 bg-[#170f23] text-white" placeholder="Write Your Opinion..."/>
                    <div
                    
                    onClick={()=>{
                        handleAddReplyComment(idComment)
                         console.log("send!") }
                       
                    }
                    className="w-full h-full mt-2 mx-auto w-1/12 flex justify-start items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                    </div>
                </div>
                :
                null

            }
               
            </div>


        </div>
    </div>
    :
    null
    ))
          :  
          <p className="text-center text-xl text-red-500 font-bold mt-20 uppercase">Log in to see comments</p>
          }
                       
                 </div>
                </div>
            </div>
        </div>
    </div>
        
            
        </section>
     );
}
 
export default Songdetail;