const HotPlaylist = () => {
    return ( 
        <>
        <h1 className='font-bold text-xl text-white uppercase ml-12 mt-5'>Popular Playlist</h1>
            <div className="w-4/5 mx-auto mt-5 p-4 rounded-3xl flex flex-row justify-between mb-20">
                <div className=" flex flex-col w-fit gap-2 hover:translate-y-1.5 duration-300">
                    <div className="cursor-pointer truncate w-36 h-36 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/3/5/6/e356cfb856cff468379a650e6520d1a9.jpg" alt=""/>
                    </div>
                    <h3 className="text-white text-center font-bold uppercase">Your Music</h3>
                </div>
                <div className=" flex flex-col w-fit gap-2 hover:translate-y-1.5 duration-300">
                    <div className="cursor-pointer truncate w-36 h-36 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/2/1/f/121fde6fe3898bc64cf04b716ddbe590.jpg" alt=""/>
                    </div>
                    <h3 className="text-white text-center font-bold uppercase">Best Choice</h3>
                </div>
                <div className=" flex flex-col w-fit gap-2 hover:translate-y-1.5 duration-300">
                    <div className="cursor-pointer truncate w-36 h-36 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/8/c/5a8ceb8218d07cc00dfbbb4d5f9fd491.jpg" alt=""/>
                    </div>
                    <h3 className="text-white text-center font-bold uppercase">Rap Viet</h3>
                </div>
                <div className=" flex flex-col w-fit gap-2 hover:translate-y-1.5 duration-300">
                    <div className="cursor-pointer truncate w-36 h-36 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/2/3/e/023ec1a260786a871b488a508b81ad8f.jpg" alt=""/>
                    </div>
                    <h3 className="text-white text-center font-bold uppercase">Hot EDM Music</h3>
                </div>
                <div className=" flex flex-col w-fit gap-2 hover:translate-y-1.5 duration-300">
                    <div className="cursor-pointer truncate w-36 h-36 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/a/1/5/6a15eecd2ba3526500e0f6c8a0340da9.jpg" alt=""/>
                    </div>
                    <h3 className="text-white text-center font-bold uppercase">V - Factor</h3>
                </div>
                <div className=" flex flex-col w-fit gap-2 hover:translate-y-1.5 duration-300">
                    <div className="cursor-pointer truncate w-36 h-36 bg-gray-200 rounded-3xl flex items-center justify-center cursor-pointer">
                      <img  src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/1/1/f/e11fd94e675c52807e95325163dbb687.jpg" alt=""/>
                    </div>
                    <h3 className="text-white text-center font-bold uppercase">US-UK: The A-List</h3>
                </div>
                
            </div>
        </>
     );
}
 
export default HotPlaylist;