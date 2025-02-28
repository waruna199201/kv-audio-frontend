import { SiAxios } from "react-icons/si";
import "./login.css";
import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState ("");

    function handleOnSubmit(e){
        e.preventDefault()
        console.log(email , password)

        axios.post("http://localhost:3000/api/users/login",
           { 
            email : email,
            password : password
           }
        ).then((res)=>{
            console.log(res)
            toast.success("Login successfully")
        
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.error)
        })
    }
        
    


    return (
       
        <div className="bg-picture w-full h-screen flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col">
                <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover"/>

                <input type="email"
                placeholder="Email"
                className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none mt-6"
                value={email}
                onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }

                }/>



<input type="password"
                placeholder="Password"
                className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none mt-6"
                value={password}
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }

                }
                />

           <button className="my-8 w-[300px] h-[50px] bg-[#f0ad38] text-2xl text-white rounded-lg" >Login</button>
            </div>
            </form>
        </div>

    )
}