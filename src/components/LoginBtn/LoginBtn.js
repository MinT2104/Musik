import { Link} from "react-router-dom"
const btn = 'text-white p-2 w-24 md:w-3/5 text-lg bg-[#FA2FB5] border-[1px] border-[#FA2FB5] rounded-full md:px-10 px-4 hover:text-[#FFC23C] duration-300'


const LoginBtn = () => {
    return ( 
        <button  className={btn}>
           {/* <a href="/login">Login</a> */}
           <Link to="/login">Log In</Link>
        </button>
     );
}
 
export default LoginBtn;