import {Route, Routes} from "react-router-dom"
import National from "./National"
import Navbar from "../Components/Navbar"
import Home from "./Home"

export default function AllRoutes(){

    return(
        <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/national" element={<National/>} />
         {/* <Route path="/" element={<h1>home</h1>}/> */}
        </Routes>
        </div>
    )
}