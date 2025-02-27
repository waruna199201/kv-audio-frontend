import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Home from "./home";
import ErrorNotFound from "./error";

export default function HomePage(){

    return(
        <>
            <Header/>
            <div className="h-[calc(100vh-100px)] w-full">
                <Routes path="/*">
                <Route path="/contact" element=
                {<contact/>}/>
                <Route path="/gallery" element=
                {<gallery/>}/>
                <Route path="/items" element=
                {<items/>}/>
                <Route path="/" element=
                {<Home/>}/>
                <Route path="/*" element=
                {<ErrorNotFound/>}/>
              

                </Routes>
        </div>
        </>
    )
}