import { Link} from "react-router-dom"
const btn = ' flex items-center justify-center text-white p-2 w-24 md:w-32 text-lg bg-[#FA2FB5] border-[1px] border-[#FA2FB5] rounded-full  px-4 hover:text-[#FA2FB5] hover:bg-[#231b2e] duration-300'


const LoginBtn = () => {
    return ( 
        <button  className={btn}>
           {/* <a href="/login">Login</a> */}
           <Link  className="text-" to="/login">Log In</Link>
        </button>
     );
}
 
export default LoginBtn;