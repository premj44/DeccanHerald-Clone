import {Route, Routes} from "react-router-dom"
import National from "../Components/National"
import Navbar from "../Components/Navbar"

export default function AllRoutes(){

    return(
        <div>
        <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/national" element={<National/>} />
         {/* <Route path="/" element={<h1>home</h1>}/> */}
        </Routes>
        </div>
    )
}