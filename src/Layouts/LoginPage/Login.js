import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase, {app} from "../../Firebase/firebase";
import { GoogleAuthProvider, getAuth,signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
  const activePath = localStorage.getItem("activepath")
  const currentPath = localStorage.getItem("activepath")
    const signInWithFirebase=()=>{
        var google_provider = new GoogleAuthProvider();
        const auth = getAuth()
        signInWithPopup(auth,google_provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            localStorage.setItem("user",JSON.stringify(user))
            localStorage.setItem("token",JSON.stringify(token))
            if(token){
                navigate(activePath)
                window.location.reload()
            }
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        
        
    }
    const submit = (data)=>{
        
        console.log(data)
    }
    const { register, handleSubmit, formState: { errors }  } = useForm();
    const btn = 'outline-none my-4 text-white p-2 w-4/5 text-lg bg-[#FA2FB5] rounded-full px-5 border-[#FA2FB5] border-[1px] hover:bg-[#170f23]  duration-300'
    const inputStyle = "outline-none w-full bg-[#170f23] border-[1px] border-white mx-auto h-12 my-2 rounded-full px-6"
    return ( 
        <section className="text-white h-screen bg-[#170f23] z-20 absolute w-full top-0 left-0">
            <div className="relative w-full h-screen flex flex-row items-center justify-center">
                <form
                onSubmit={handleSubmit(submit)}
                className="w-96 h-fit pb-4 bg-[#231b2e] rounded-xl flex flex-col items-center">
                    <h1 className="text-xl font-bold uppercase text-center p-2 mt-2">LogIn</h1>
                    <span className="w-4/5">
                        <label className=" font-light mt-2">
                            UserName: 
                        </label>
                        <input name="username" className={inputStyle} {...register("username",{ required: true})}/>
                        {errors.username && 
                        <span className="text-red-500">Please enter your first name.</span>}
                    </span>
                    <span className="w-4/5">
                        <label className="font-light mt-2">
                            Password: 
                        </label>
                        <input type="password" name="password" className={inputStyle} {...register("password",{ required: true })}/>
                        {errors.password &&
                         <span className="text-red-500">Please enter your password.</span>}

                    </span>
                    <button type="submit" className={btn}> Login</button>
                <hr className="w-2/5 my-2"/>
                <div>Don't have an account? &nbsp;
                    <Link to="/signup" className="font-medium text-blue-500 cursor-pointer">
                        Register
                    </Link>
                </div>
                <div className="flex flex-row gap-2 items-center p-2 bg-white rounded-3xl cursor-pointer text-black w-2/3 mt-4">
                    <div className="w-8 h-8">
                        <img src="https://cdn.statically.io/img/barrazacarlos.com/f=auto%2Cq=50/wp-content/uploads/2021/06/google-logo-1.png" alt=""/>
                    </div>
                    <div
                    onClick={signInWithFirebase}
                    >
                        <span className="font-bold text-xl">
                            Sign In with Google
                        </span>
                    </div>
                </div>
                </form>
                <span className="absolute top-5 right-5 cursor-pointer">
                    <Link to={currentPath}>
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