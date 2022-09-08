const CreatePlaylist = () => {
    return ( 
        <>
        <h1 className='font-bold text-xl text-white uppercase ml-12 mt-5'>Your Playlist</h1>
            <div className="w-4/5 mx-auto mt-5 bg-[#231b2e] p-4 rounded-3xl mb-14">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-gray-200 rounded-3xl flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                </div>
            </div>
        </>
     );
}
 
export default CreatePlaylist;