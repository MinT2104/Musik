import songs from "../../Context";
import { useContext } from "react";

const AllSongs = () => {
    const {setPlay} = useContext(songs)
    const dataSongs = Object.values(useContext(songs))
//     dataSongs[0].map(function(item ,index){
//         console(item.name)
// })
    return ( 
    <>
        <h1 className='font-bold text-xl text-white uppercase md:ml-12 mt-5 text-center'>All Songs</h1>
        <div className="w-4/5 h-fit mx-auto mt-10">
            <div className="text-white flex flex-row flex-wrap justify-between mb-20">
            {dataSongs[0].map((items ,index)=>(
                <div 
                onClick={()=>setPlay(items)}
                key={index} 
                className="break-words flex flex-col w-32 md:w-52 gap-2  hover:translate-y-3 duration-300 mb-10">
                    <div className="cursor-pointer truncate h-32 w-32 md:w-52 md:h-52 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img 
                      src={`${items.links.images[0].url}`}
                      alt=""/>
                    </div>
                    <h3 className="text-white h-fit text-center font-bold uppercase break-normal">{items.name}</h3>
                </div>
    
                 ))}
            </div>
        </div>
    </>
 
        
     );
}
 
export default AllSongs;