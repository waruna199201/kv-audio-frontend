import { GoGraph } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";

export default function AdminPage(){

    return(
        <div className="w-full h-screen flex">
        <div className="w-[300px] h-full bg-green-200">
          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center ">
          <GoGraph />
            Dashboard
  
  
          </button>
  
          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark />
            Bookins
  
  
          </button>
  
          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <BsFillSpeakerFill />
            Items
  
  
          </button>
  
          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaUser />
            Users
  
  
          </button>
  
        </div>
        <div className="w-full bg-red-900">
        
  
  
        </div>
  
    
  
  
  
  
  
      </div>



    )
}