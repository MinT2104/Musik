import User from "../../components/User/User";

const Save = () => {
    return ( 
    <div className="col-span-6 h-screen bg-[#170f23] overflow-auto">
            <User/>
        <h1 className="text-white uppercase text-center text-2xl font-bold mt-10">Saved</h1>
        
        <span className="flex flex-row items-center gap-2 justify-center mb-10 mt-3">
         <h1 className="text-white text-center text-lg font-light ">Your Favourite Songs</h1>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
        </span>
        
        <ul className="mx-auto w-full items-center flex flex-col gap-3">
            <li className="hover:translate-x-1.5 duration-300 cursor-pointer w-full md:w-4/5 h-fit p-2 rounded-full items-center justify-between flex flex-row bg-[#231b2e] pr-10">
                <div className="flex flex-row gap-4">
                    <div className="w-14 h-14 rounded-full truncate">
                        <img src="https://i.scdn.co/image/ab6761610000e5eb9e3acf1eaf3b8846e836f441" alt=""/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h5 className="text-white">Blank Space</h5>
                        <h6 className="text-gray-500">Taylor Swift</h6>
                    </div>
                </div>
                
                <span>
                    <button className="p-2 text-white bg-red-500 rounded-full px-4 hover:scale-110 duration-300"> Delete</button>
                </span>
            </li>
            <li className=" hover:translate-x-1.5 duration-300 cursor-pointer w-full md:w-4/5 h-fit p-2 rounded-full items-center justify-between flex flex-row bg-[#231b2e] pr-10">
                <div className="flex flex-row gap-4">
                    <div className="w-14 h-14 rounded-full truncate">
                        <img src="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36" alt=""/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h5 className="text-white">What Do You Mean</h5>
                        <h6 className="text-gray-500">Justin Bieber</h6>
                    </div>
                </div>
                
                <span>
                    <button className="p-2 text-white bg-red-500 rounded-full px-4 hover:scale-110 duration-300"> Delete</button>
                </span>
            </li>
            <li className=" hover:translate-x-1.5 duration-300 cursor-pointer w-full md:w-4/5 h-fit p-2 rounded-full items-center justify-between flex flex-row bg-[#231b2e] pr-10">
                <div className="flex flex-row gap-4">
                    <div className="w-14 h-14 rounded-full truncate">
                        <img src="https://i.scdn.co/image/ab6761610000e5ebd546aecf1aac2633551f4c26" alt=""/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h5 className="text-white">Can't blame a girl for trying</h5>
                        <h6 className="text-gray-500">Sabrina Carpenter</h6>
                    </div>
                </div>
                
                <span>
                    <button className="p-2 text-white bg-red-500 rounded-full px-4 hover:scale-110 duration-300"> Delete</button>
                </span>
            </li>
           
        </ul>
       
        </div>
     );
}
 
export default Save;