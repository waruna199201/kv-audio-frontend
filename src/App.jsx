import "./App.css"
import ProductCard from "./components/productCard"
import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import AdminPage from "./pages/admin/adminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import Testing from "./components/testing";
import LoginPage from "./pages/login/login";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
   <Routes path="/*">
   <Route path ="/testing" element={<Testing/>}/>
   <Route path="/login" element={<LoginPage/>}/>
    <Route path="admin/*" element={<AdminPage/>}/>
    <Route path="/*" element={<HomePage/>}/>
    
    <Route path="about" element={<h1>H</h1>}/>


   </Routes>
   </BrowserRouter>
  );
}
export default App