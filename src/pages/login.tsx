import { useState } from "react";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
const LoginSignup: React.FC = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handlelogin=()=>{
  return navigate('/dashboard')
   }
   
 
  return (
    <main className="flex justify-center items-center h-screen w-full fullbgcolor text-black font-[poppins] ">
      <div className="sm:w-4/10 xl:w-3/10 w-8/10 boxcolor flex flex-col rounded py-6">
        <h1 className="mx-auto md:text-4xl text-3xl font-bold ">
          Login
        </h1>
        <div className="w-4/5 self-center">
          <h3 className="mt-6 font-semibold text-lg ">Email</h3>
        </div>
        <input
          type="email"
          value={email}
          className="w-4/5 mt-0.5 border-2 focus:border-black rounded h-8 self-center px-2"
          placeholder="Enter your email"
          onChange={(e)=>{setEmail(e.target.value)}}
        ></input>
        <div className="w-4/5 self-center">
          <h3 className="mt-6 font-semibold text-lg ">Password</h3>
        </div>
        <Input setPassword={setPassword} password={password} />
    
    
        <div className="w-4/5 self-center mt-5">
          <button onClick={handlelogin} className="mt-1 font-semibold text-lg bg-blue-800 hover:bg-blue-600 w-full rounded py-1 cursor-pointer text-white">
            Login
          </button>
        </div>
      </div>
    </main>
  );
};
export default LoginSignup;