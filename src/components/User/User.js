import { useState } from "react";
import { Link } from "react-router-dom";
import songs from '../../Context';
import { useContext } from "react";
import LoginBtn from "../LoginBtn/LoginBtn";
const User = () => {
    // const btn = 'text-white p-2 w-3/5 text-lg bg-[#FA2FB5] border-[1px] border-[#FA2FB5] rounded-full px-10 hover:text-[#FFC23C] duration-300'
    const NoteStyle = 'userAlert bg-[#231b2e] w-72 h-[400px] absolute right-12 mt-5 text-center pt-2 rounded-xl'
    const [GetNoti, setGetNoti] = useState(false)
    const {navMob,setNavMob} = useContext(songs)
    const handleGetNoti = ()=>{
        setGetNoti(!GetNoti)
    }
    
    const [logged, getLogged] = useState(false)
    return ( 
        <>
        <div className="flex flex-row justify-between md:justify-center md:justify-between px-5 md:px-12 items-center h-[70px] my-3 relative top-0 z-40 bg-[#170f23] sticky">  
            <div
            onClick={()=>setNavMob(!navMob)}
            className="md:hidden block">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>   
            </div> 
            <h1 className="md:hidden block uppercase font-black text-xl w-full text-center">
                     <span className="text-white">Mu</span>
                     <span className="text-[#FA2FB5]">sik</span>
            </h1>
            <div>
                <input className=" md:p-2 w-0 md:w-[200px] lg:w-[500px] outline-none rounded-md md:pl-5 bg-[#fff] text-white" placeholder="Search..."/>
            </div>
            <button className=" md:hidden block p-2 bg-[#231b2e] rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            {logged ? 
            <div
            onClick={handleGetNoti}
             className="text-white flex flex-row gap-3 items-center relative">
        
                <div className="p-2 rounded-full bg-[#231b2e]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <div className={`${GetNoti?'blockdisplay':'nonedisplay'} ${NoteStyle}`}>
                        Have no notification
                        <hr className="w-4/5 m-2 mx-auto bg-gray-500"></hr>
                    </div>
                </div>
                <div className="md:block hidden p-2 rounded-full bg-[#231b2e]">
                    <Link to="/setting">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg> 
                    </Link>
                </div>
                <div className="p-1 rounded-full bg-[#231b2e]">
                    <button className="flex flex-row gap-3 items-center pr-2 ">
                        <div className="w-8 rounded-full overflow-hidden">
                            <img src="https://i.scdn.co/image/ab67616d0000b27391b709ced968e29e8f00dfe3" alt=""/>
                        </div>
                        <h1>User</h1>
                    </button>
                </div>
            
            </div>
            :
            <div className="text-white flex flex-row gap-3">
               <span className="font-bold p-2 px-4 rounded-full bg-[#231b2e] hidden md:block "> Anonymous</span>
               <LoginBtn/>
            </div>
            }
        
         </div>
      
        </>
        
     );
}
 
export default User;