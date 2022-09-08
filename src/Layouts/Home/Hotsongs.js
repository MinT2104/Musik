import songs from "../../Context";
// import { useState } from "react";
import { useContext } from "react";

const Hotsongs = () => {

    const dataSongs = Object.values(useContext(songs))
    const {setPlay} = useContext(songs)
    const sixSongs = []
    for (let i = 44; i < 50 ; i++ ){
        // console.log(dataSongs[0][i])
        sixSongs.push(dataSongs[0][i])
    }
    // console.log(sixSongs)
   

    return ( 
        <div className='flex flex-row flex-wrap gap-5 mx-auto w-full justify-center mb-20'>
            
           {sixSongs.map((item, index)=>(
            <div 
            key={index}
            onClick={()=>{
            setPlay(item)
        }
                
            }
            className='md:w-40 w-32 m-3 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                <img src={`${item.links.images[0].url}`} alt=''/>
                <h1 className='text-center text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                {item.name}
                </h1>
            </div>
           ))}


                {/* <div className='w-40 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                    <img src='https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828' alt=''/>
                    <h1 className='text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                    Look At Her Now
                    </h1>
                </div><div className='w-40 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                    <img src='https://i.scdn.co/image/ab6761610000e5ebaad54b2cf9044587eac7acdf' alt=''/>
                    <h1 className='text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                    Harpuia [NCS Release]
                    </h1>
                </div><div className='w-40 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                    <img src='https://i.scdn.co/image/ab67616d0000b2733be40769b1c2361cea9f0843' alt=''/>
                    <h1 className='text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                    Lost Sky
                    </h1>
                </div><div className='w-40 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                    <img src='https://i.scdn.co/image/ab6761610000e5eba91af711541f8807ed7f0676' alt=''/>
                    <h1 className='text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                    Here With Me Feat
                    </h1>
                </div><div className='w-40 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                    <img src='https://i.scdn.co/image/ab67616d0000b273da513d25e8b3cdd4f43f7512' alt=''/>
                    <h1 className='text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                    Slow Down
                    </h1>
                </div><div className='w-40 flex flex-col rounded-lg overflow-hidden cursor-pointer hover:scale-110 duration-300'>
                    <img src='https://i.scdn.co/image/ab6761610000e5ebe36787acbe5c4dc467e581c6' alt=''/>
                    <h1 className='text-white p-1 pl-0 uppercase font-semibold hover:text-[#FFC23C] duration-300'>
                    Mortals (feat. Laura Brehm) [NCS Release]
                    </h1>
                </div> */}
            </div>
     );
}
 
export default Hotsongs;
