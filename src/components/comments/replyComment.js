const replyComment = ({data, index, handleLike,like,setInputComment,inputComment,handleGetIdComment}) => {

    return ( 
         data[index].children  ?
            data[index].children.map((data, index)=>(
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
                            className="font-light text-sm  cursor-pointer">Reply </span>
                            <span className="font-light text-sm cursor-pointer">Report </span>
                       
                        
                    </div>
                    </div>
                    </div>
            </div>
            ))
            
                   :null
                
     );
            }
 
export default replyComment;