import User from '../Pages/User/User';
import songs from "../../Context";
import { useContext } from "react";

const NewSongs = () => {
    const dataSongs = Object.values(useContext(songs))
    const {setPlay} = useContext(songs)
    const twoSongs = []
    for (let i = 79; i < 81 ; i++ ){
        // console.log(dataSongs[0][i])
        twoSongs.push(dataSongs[0][i])
    }
    const btn = 'text-[#FA2FB5] p-2 w-3/5 text-lg bg-none border-[1px] border-[#FA2FB5] rounded-lg px-5 hover:text-[#FFC23C] hover:border-[#FFC23C] duration-300'
    return(
        <>
        <User/>
        
        
        <h1 className='font-bold text-xl text-white uppercase ml-12'>New Songs</h1>
        <div className="flex flex-row gap-5 justify-evenly items-center mt-10 flex-wrap">
        {
            twoSongs.map((item,index)=>(

                <div key={index} className=" flex flex-row  justify-left gap-7 p-2 bg-[#231b2e] w-fit rounded-xl pr-12 relative hover:translate-y-1.5 duration-300">
                <span className="font-semibold text-white text-sm p-2 bg-[#FA2FB5] rounded-lg w-fit absolute h-fit left-[-20px] top-[-20px]" >New Song</span>
                    <div className="w-60 h-60 overflow-hidden rounded-xl">
                    <img src={`${item.links.images[0].url}`} alt=""/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                        <h4 className="text-gray-400">EDM</h4>
                        <h1 className="text-2xl mt-2 text-white">{item.name}</h1>
                        <h1 className="text-gray-400 mt-2 cursor-pointer hover:text-[#FFC23C] duration-300" >{item.author}</h1>
                        </div>
                       
                        <div className="flex flex-row gap-10 items-center mb-2">
                            <button 
                            onClick={()=>setPlay(item)}
                            className={btn}
                                >
                                    Play
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

            ))
        }
            
         {/* <div className="flex flex-row  justify-left gap-7 p-2 bg-[#231b2e] w-fit rounded-xl pr-12 relative hover:translate-y-1.5 duration-300">
            <span className="font-semibold text-white text-sm p-2 bg-[#FA2FB5] rounded-lg w-fit absolute h-fit left-[-20px] top-[-20px]" >New Song</span>
                <div className="w-60 h-60 overflow-hidden rounded-xl">
                <img src="https://i.scdn.co/image/ab67616d0000b273cac40eaa1c17e52e45a8098f" alt=""/>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                    <h4 className="text-gray-400">EDM</h4>
                    <h1 className="text-2xl mt-2 text-white">Harpuia [NCS Release]</h1>
                    <h1 className="text-gray-400 mt-2 cursor-pointer hover:text-[#FFC23C] duration-300" >Kadenza</h1>
                    </div>
                   
                    <div className="flex flex-row gap-10 items-center mb-2">
                        <button className={btn}>Play</button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-row pr-12 justify-left gap-7 p-2 bg-[#231b2e] w-fit rounded-xl relative hover:translate-y-1.5 duration-300">
            <span className="font-semibold text-white text-sm p-2 bg-[#FA2FB5] rounded-lg w-fit absolute h-fit left-[-20px] top-[-20px]" >New Song</span>
                <div className="w-60 h-60 overflow-hidden rounded-xl">
                <img src="https://i.scdn.co/image/ab67616d0000b2734f1608584777e92bddd5c904" alt=""/>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                    <h4 className="text-gray-400">EDM</h4>
                    <h1 className="text-2xl mt-2 text-white">Link [NCS Release]</h1>
                    <h1 className="text-gray-400 mt-2 cursor-pointer hover:text-[#FFC23C] duration-300" >im Yosef</h1>
                    </div>
                   
                    <div className="flex flex-row gap-10 items-center mb-2">
                        <button className={btn}>Play</button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div> */}
        </div>
        <div className='text-white flex flex-row items-center justify-between m-12 mb-5'>
            <h1 className='font-bold text-xl text-white uppercase '>Hot Songs</h1>
            <a href='/' alt>
                <h4 className='font-semibold uppercase text-sm mr-10 text-gray-500 flex flex-row items-center gap-1 hover:text-[#FFC23C] duration-300'>
                View more 
                <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
                </h4>
            </a>
        </div>
        </>
    )
}
export default NewSongs