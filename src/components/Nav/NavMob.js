import { Link} from "react-router-dom"
import { useState } from "react"
import { Parser } from 'html-to-react'
import songs from '../../Context';
import { useContext } from "react";

const NavMob = () => {
    
    const [Active , setActive] = useState(1)
    const {navMob} = useContext(songs)

    const activeLink = "border-r-4 border-[#FFC23C] text-[#FFC23C]"

    console.log(Active)
    const li_nav = "text-gray-400 w-full text-center m-4 pl-12 font-semibold hover:border-r-4 hover:border-[#FFC23C] hover:text-[#FFC23C] duration-300 flex flex-row justify-left gap-2 items-center"
   const navPages = [
    {
        id:1,
        title: "Home",
        path: '/',
        logo: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
             </svg>`,

    },
    {
        id:2,
        title: "Playlist",
        path: '/playlist',
        logo: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>`,

    },  
    {
        id:3,
        title: "Saved",
        path: '/Saved',
        logo: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>`,

    },
    {
        id:4,
        title: "Setting",
        path: '/setting',
        logo: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>`,

    }
   ]

//    console.log(navPages)

    return ( 

        <div className={`col-span-1 h-screen bg-[#231b2e] md:relative absolute md:z-10 ${(navMob) ? "block" : "hidden" } z-40 w-full`}>
            <div className="md:blockdisplay nonedisplay  w-full h-16 bg-[#000000] absolute bottom-20 flex flex-row justify-between items-center px-5 text-white">
                <div className="flex flex-row items-center gap-5">
                    <span className="p-2 bg-[#231b2e] rounded-full">
                        <div className="w-8 rounded-full overflow-hidden">
                            <img src="https://i.scdn.co/image/ab67616d0000b27391b709ced968e29e8f00dfe3" alt=""/>
                        </div>
                    </span>
                    <span>
                        <h1 className=" font-black text-xl">User</h1>
                        <h5 className="text-green-500 text-sm font-light uppercase">A c t i v e</h5>
                    </span>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="flex flex-row w-full justify-center p-5 gap-2 items-center relative cursor-pointer ">
            <div className="absolute w-4 border-[#FA2FB5] border-t-2 border-l-2 h-4 top-4 left-14"></div>
            <div className="absolute w-4 border-white border-b-2 border-r-2 h-4 bottom-4 right-12"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FA2FB5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                <h1 className="uppercase font-black text-xl">
                     <span className="text-white">Mu</span>
                     <span className="text-[#FA2FB5]">sik</span>
                </h1>
            </span>
            <nav> 
                
                <h1 className="uppercase text-white font-bold text-lg pl-5 mt-7">Pages</h1>
                <ul className=" w-full flex flex-col items-center justify-center ">

                    
                {navPages.map((item, index) =>(
                     <li key={index}
                     onClick={()=>{
                        setActive(item.id)
                        console.log(index +1)
                    }}
                     className={`${ item.id === Active && activeLink} ${li_nav}`}>
                     
                     {Parser().parse(item.logo)}
                    <Link to={item.path} className="hover:translate-x-1.5 duration-300">{item.title}</Link>
                   </li> 
                
                  
                ))
                   }

                    {/* <li 
                    onClick={()=>{setActive(!Active)}}
                    className={`${ Active ? activeLink : normalLink} ${li_nav}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <Link to="/" className="hover:translate-x-1.5 duration-300">{navPages[0].title}</Link>
                    </li>
                    <li onClick={()=>{setActive(!Active)}}
                    className={`${Active ? activeLink : normalLink} ${li_nav}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <Link to="/playlist" className="hover:translate-x-1.5 duration-300">Playlist</Link>
                    </li>
                    <li
                    onClick={()=>{setActive(!Active)}}
                     className={`${ Active ? activeLink : normalLink} ${li_nav}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                            <Link to="/saved" className="hover:translate-x-1.5 duration-300">Saved</Link>
                    </li>
                    <li
                    onClick={()=>{setActive(!Active)}}
                     className={`${ Active ? activeLink : normalLink} ${li_nav}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <Link to="/setting" className="hover:translate-x-1.5 duration-300">Setting</Link>
                    </li> */}
                </ul>
            </nav>

        </div>
     );
}
 
export default NavMob;