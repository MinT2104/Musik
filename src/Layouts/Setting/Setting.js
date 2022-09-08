import User from "../../components/User/User";

const Setting = () => {
    return ( 
        <div className="col-span-6 h-screen bg-[#170f23] overflow-auto">
            <User/>
        <h1 className="text-white uppercase text-center text-2xl font-bold my-10">Setting</h1>
        <div className="flex flex-col gap-20 w-fit mx-auto mt-20">
            <label>
                <div className="mb-2">
                    <span className="text-white w-10">Languages: </span>
                </div>
                
                <select name="language" className="w-96 outline-none h-8 rounded-sm px-2">
                    <option value="volvo">English (US)</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

            </label>
            <label>
                <div className="mb-2">
                    <span className="text-white w-10">Themes: </span>
                </div>
                <select name="language" className="w-96 outline-none h-8 rounded-sm px-2">
                    <option value="Light Mode">Light Mode</option>
                    <option value="Dark Mode">Dark Mode</option>
                </select>
                
            </label>
            <label>
                <div className="mb-2">
                    <span className="text-white w-10">My Services: </span>
                </div>
                <select name="language" className="w-96 outline-none h-8 rounded-sm px-2">
                    <option value="volvo">My Services</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </label>

        </div>
        </div>
        
     );
}
 
export default Setting;