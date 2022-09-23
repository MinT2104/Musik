import { useState, useEffect} from "react";


const NewPlaylist = ({ data, setData}) => {
      const Playlists = [
        {
            title: "My Favorite music",
            url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/3/e/023ec1a260786a871b488a508b81ad8f.jpg"
        }
    ]
    const allPlaylists = JSON.parse(localStorage.getItem("Playlist"))
    
    // const { register, handleSubmit, formState: { errors }, minlength  } = useForm();
    const [urlVal, getUrlVal] = useState("")
    const [allPlaylist, setAllPlaylist] = useState(allPlaylists || Playlists)
    const [titleVal, getTitleVal] = useState("")
    const [dataPlaylist, setDataPlaylist] = useState({title: String, url: String})
    useEffect(()=>{
        setDataPlaylist({
            title: titleVal,
            url: urlVal
        })

    },[urlVal, titleVal])
    const Submit =(e)=>{        
        // e.preventDefault()
        console.log(dataPlaylist)
        setAllPlaylist(prev=>[...prev, dataPlaylist])

    }
    localStorage.setItem("Playlist", JSON.stringify(allPlaylist))


    
    
    
    return ( 
   <form onSubmit={Submit}>
          <section
        className=" text-white w-full bg-none z-50 absolute h-screen top-0 left-0 flex items-center justify-center">
            <div className="rounded-xl lg:w-2/3 lg:h-1/2 lg:gap-0 gap-5 w-full h-screen bg-[#231b2e] p-2 flex lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full mx-auto">
                <div className="flex flex-row justify-start px-2 gap-2 py-2">
                    <span
                    className=" cursor-pointer z-50">
                        <button
                        type="submit"
                        className=" text-white p-2 bg-blue-500 rounded-xl">
                          Save
                        </button>
                    </span>
                    <span
                    onClick={()=>{
                        setData(!data)
                    }}
                    className=" cursor-pointer z-50">
                        <button className=" text-white">
                            <button className=" text-white p-2 bg-red-500 rounded-xl">
                                Cancel
                            </button>

                        </button>
                    </span>
                </div>

           
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col w-4/5 mx-auto my-2">
                        <label className="font-bold text-sm uppercase py-2 ml-4">Title</label>
                        <input
                        onChange={(e)=>getTitleVal(e.target.value)}
                        name="title"
                        required
                        className="bg-transparent w-full outline-none p-2 px-4 border-[1px] border-white rounded-full text-white"
                        placeholder="Title"
                        // {...register("title",{ required: true})}
                        />
                    </div>
                    <div className="flex flex-col w-4/5 mx-auto my-2">
                        <label className="font-bold text-sm uppercase py-2 ml-4">Image Link</label>
                        <input
                         onChange={(e)=>{getUrlVal(e.target.value)}}
                            className="bg-transparent w-full outline-none p-2 px-4 border-[1px] border-white rounded-full text-white"
                            placeholder="URL Link"/>
                    </div>
                    <hr className="w-3/5 mt-10" />
                    <h1 className="font-bold text-center mt-10 uppercase text-[#FA2FB5]">create your list of songs</h1>
                </div>
                </div>
               
                <div className="w-2/3 flex items-center mx-auto justify-center ">
                    <div  className="text-center rounded-xl w-80 h-80 bg-black truncate before:content-[attr(before)] text-white ">
                        {/* <p className="text-center">no file chosen</p> */}
                    <img className="" src={urlVal} alt=""/>  
                    </div>
                </div>
    
            </div>

        </section>
        </form>
      
     );
}
 
export default NewPlaylist;