import { Link } from "react-router-dom";
import Home from "../Home/Home";

const Login = () => {
    const btn = 'outline-none my-4 text-white p-2 w-4/5 text-lg bg-[#FA2FB5] rounded-full px-5 hover:border-[#FA2FB5] hover:border-[1px] hover:bg-[#170f23]  duration-300'
    const inputStyle = "outline-none w-full bg-[#170f23] border-[1px] border-white mx-auto h-12 my-2 rounded-full px-6"
    return ( 
        <section className="text-white h-screen bg-[#170f23] z-20 absolute w-full top-0 left-0">
            <div className="relative w-full h-screen flex flex-row items-center justify-center">
                <div className="w-96 h-96 bg-[#231b2e] rounded-xl flex flex-col items-center">
                    <h1 className="text-xl font-bold uppercase text-center p-2 mt-2">LogIn</h1>
                    <span className="w-4/5">
                        <div className=" font-light mt-2">
                            UserName: 
                        </div>
                        <input className={inputStyle}/>
                    </span>
                    <span className="w-4/5">
                        <div className="font-light mt-2">
                            Password: 
                        </div>
                        <input  className={inputStyle}/>
                    </span>
                    <button type="button" className={btn}> Login</button>
                <hr className="w-2/5 my-2"/>
                <div>Don't have an account? &nbsp;
                    <Link to="/signup" className="font-medium text-blue-500 cursor-pointer">
                        Register
                    </Link>
                </div>
                </div>
                <span className="absolute top-5 right-5 cursor-pointer">
                       
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                </span>
            </div>
          
          

        </section>
     );
}
 
export default Login;