const MyService = () => {
    const btn = ' mx-auto text-[#FA2FB5] p-2 w-full md:w-3/5 text-lg bg-none border-[1px] border-[#FA2FB5] rounded-full px-5 hover:text-[#FFC23C] hover:border-[#FFC23C] duration-300'
    return ( 
        <footer className="w-full h-fit bg-black flex flex-col md:grid grid-cols-5 text-white pb-40 ">
            <div className="col-span-2 flex items-center justify-top flex-col md:w-full w-4/5 mx-auto">
                <h2 className="h-1/5 font-black text-3xl text-[#FA2FB5] my-5 flex-1">About Me</h2>
                <p className="h-2/5 text-center">
                   Hi, I'm Thang. I'm from VietNam. My website is about Songs
                 </p>
                <ul className="flex flex-row gap-5  items-center justify-center h-2/5 mt-2">
                    <li className="hover:scale-110 duration-300">
                        <a className="cursor-pointer" href="https://www.facebook.com/pkkute.account.pass">
                            <span className="iconify text-[30px] md:text-[50px]" data-icon="logos:facebook" ></span>
                        </a>
                    </li>
                    <li className="w-fit hover:scale-110 duration-300">
                        <a className="cursor-pointer" href="https://www.facebook.com/pkkute.account.pass">
                    <span className="iconify text-[45px] md:text-[60px] text-red-700" data-icon="ant-design:instagram-filled" ></span>
                        </a>
                    </li>
                    <li className="hover:scale-110 duration-300">
                        <a className="cursor-pointer" href="https://www.facebook.com/pkkute.account.pass">
                    <span className="iconify text-[20px] md:text-[40px]" data-icon="logos:youtube-icon"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 flex items-center flex-col md:w-full w-4/5 mx-auto">
            <div>
                            <h2 className="font-black text-3xl text-[#FA2FB5] my-5">My Pages</h2>
                            <ul className="flex gap-2 flex-col">
                                <li><a className="text-lg uppercase hover:text-[#FFC23C] duration-300" href="/">Home</a></li>
                                <li><a className="text-lg uppercase hover:text-[#FFC23C] duration-300" href="/playlist">Playlist</a></li>
                                <li><a className="text-lg uppercase hover:text-[#FFC23C] duration-300" href="/saved">Saved</a></li>
                                <li><a className="text-lg uppercase hover:text-[#FFC23C] duration-300" href="/setting">Setting</a></li>
                               
                            </ul>
                        </div>
            </div>
            <div className="col-span-2 flex flex-col items-center gap-5 md:w-full w-4/5 mx-auto">
                <h2 className="h-fit font-black text-3xl text-[#FA2FB5] my-5">Contact</h2>
                <input className="w-full md:w-3/5 h-10 rounded-sm p-2 pl-5 text-black font-semibold outline-none" placeholder="Write your Email..."/>
                <button className={btn} >
                    Send
                </button>
            </div>
        </footer>
     );
}
 
export default MyService;