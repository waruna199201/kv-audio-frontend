import { GoGraph } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-full h-screen flex">
        <div className="w-[300px] h-full bg-green-200">
          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center ">
          <GoGraph />
            Dashboard
  
  
          </button>
  
          <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaRegBookmark />
            Bookings
  
  
          </Link>
  
          <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <BsFillSpeakerFill />
            Items
  
  
          </Link>
  
          <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
          <FaUser />
            Users
  
  
          </button>
  
        </div>
        <div className="w-[calc(100vw-300px)] bg-red-900">
          <Routes path="/*">
          <Route path="/bookings" element={<h1>Booking</h1>}/>
          <Route path="/items" element={<h1>Items</h1>}/>
        

  
          </Routes>
        </div>
      </div>



    )
}