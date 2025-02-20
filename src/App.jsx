import "./App.css"
import ProductCard from "./components/productCard"
import { GoGraph } from "react-icons/go";
import { FaRegBookmark, FaRegUser } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import AdminPage from "./pages/admin/adminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";


function App() {
  return (
    <BrowserRouter>
   <Routes path="/*">
    <Route path="admin/*" element={<AdminPage/>}/>
    <Route path="/*" element={<HomePage/>}/>
    
    <Route path="about" element={<h1>H</h1>}/>


   </Routes>
   </BrowserRouter>
  );
}
export default App