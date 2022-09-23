import { useState } from "react";
import songs from '../../Context';
import { useContext } from "react";
import LoginBtn from "../LoginBtn/LoginBtn";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { cleanup } from "@testing-library/react";
// import { useRef } from "react";

const User = () => {
    // const btn = 'text-white p-2 w-3/5 text-lg bg-[#FA2FB5] border-[1px] border-[#FA2FB5] rounded-full px-10 hover:text-[#FFC23C] duration-300'
    const NoteStyle = 'userAlert text-black bg-white w-72 h-[400px] absolute right-20 mt-5 text-center pt-2 rounded-sm'
    const LogoutStyle = 'userAlert bg-white text-[#FA2FB5] w-3/5 h-fit absolute top-12 right-0 text-center p-2 rounded-xl'
    const [GetNoti, setGetNoti] = useState(false)
    const [GetLogOut, setGetLogOut] = useState(false)

    const [searchField, setSearchField] = useState(false)
    const [inputVal, setInputVal] = useState("")
    const {navMob,setNavMob, dataUser, accessToken, logged} = useContext(songs)
    // const ref = useRef()

    const navigate = useNavigate()

    
    const handleGetNoti = ()=>{
        setGetNoti(!GetNoti)
    }
    const handleGetLogOut = ()=>{
        setGetLogOut(!GetLogOut)
    }
    const handleLogOut =()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.reload()

    }
   
    

    return ( 
        <>
       
        <div className="flex flex-row m-0 justify-between md:justify-center md:justify-between px-5 md:px-12 items-center h-[70px] mb-3 relative top-0 z-40 bg-[#170f23] sticky">  
            <div
            className="md:hidden block">
                {
                 !searchField ?  
                 <div
                 onClick={()=>{
                    setNavMob(!navMob)
                    setNavMob(!navMob)
                 }}>
                    <DehazeIcon className="text-white cursor-pointer"/> 
                 </div> 
                      :  
                 <div
                    onClick={()=>{
                        setInputVal("")
                        setSearchField(!searchField)}}
                    className="text-white cursor-pointer p-2 m-2">
                        <ClearIcon/>
                </div>
                    }
            </div> 
            <h1 className={`md:hidden ${searchField ? "hidden" : "block"} uppercase font-black text-xl w-full text-center`}>
                     <span className="text-white">Mu</span>
                     <span className="text-[#FA2FB5]">sik</span>
            </h1>
            <div className={`w-full ${!searchField ? "w-0 md:w-full" :"w-full"}`}>
                <input 
                onChange={(e)=>setInputVal(e.target.value)}
                className={`p-2 ${searchField ? "w-full" : "md:w-4/5 w-0 md:p-2 p-0"} block xl:w-[500px] outline-none rounded-md md:pl-5 bg-[#fff] text-black`} placeholder="Search..."/>
            </div>
            
                {!searchField ? 
                <button 
                    className=" md:hidden block p-2 bg-[#231b2e] rounded-full mr-3">
                    <SearchIcon 
                    onClick={()=>setSearchField(!searchField)}
                    className="text-white cursor-pointer"/>
                </button>
                    :
                <button className=" md:hidden block p-2 bg-[#231b2e] mx-3">
                    <SendIcon className="text-white cursor-pointer w-20"/>
                </button>
                }
            {logged ? 
            <div
             className={` ${searchField ? "hidden" : "block"} text-white flex flex-row gap-3 items-center relative`}>
                <div 
                onClick={handleGetNoti}
                className="p-2 rounded-full bg-[#231b2e]">
                    <NotificationsIcon className="cursor-pointer"/>
                    <div
                     className={`${GetNoti?'blockdisplay':'nonedisplay'} ${NoteStyle}`}>
                        Have no notification
                        <hr className="w-4/5 m-2 mx-auto bg-gray-500"></hr>
                    </div>
                </div>
                
                <div 
                
                className="p-1 rounded-full bg-[#231b2e]">
                    <button
                    onClick={handleGetLogOut}
                    className="flex flex-row gap-3 items-center pr-2 md:text-lg text-sm truncate ">
                        <div className="w-8 rounded-full overflow-hidden">
                            <img src={dataUser.providerData[0].photoURL ||
                                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_YYCMOcMCxYZYB1u-VgnLya2uk_cm7-7nVhsUF0M3csJ-3pvtKzb2_in9RsJzsBR-ss&usqp=CAU"} 
                                 alt=""/>
                        </div>
                        <h1>{ dataUser ? dataUser.providerData[0].displayName:""}</h1>
                        <div
                        onClick={
                           handleLogOut
                        }
                     className={`${GetLogOut?'blockdisplay':'nonedisplay'} ${LogoutStyle}`}>
                       Logout
                        
                    </div>
                    </button>
                </div>
            
            </div>
            :
            !searchField ? 
            <div className="text-white h-3/5 flex flex-row gap-3">
                <span className="font-bold p-2 px-4 rounded-full bg-[#231b2e] hidden md:inline ">Anonymous</span>
                <LoginBtn/>
            </div> 
            : null
            // <div className="text-white flex flex-row gap-3">
            //    <span className="font-bold p-2 px-4 rounded-full bg-[#231b2e] hidden md:block ">Anonymous</span>
            //    <LoginBtn/>
            // </div>
            }
        
         </div>
      
        </>
        
     );
}
 
export default User;