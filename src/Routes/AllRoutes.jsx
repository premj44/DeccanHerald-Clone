import {Route, Routes} from "react-router-dom"
import National from "./National"
import Navbar from "../Components/Navbar"
import Home from "./Home"
import Specials from "./Specials"
import SingleSpecials from "./SingleSpecials"

export default function AllRoutes(){

    return(
        <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/national" element={<National/>} />
        <Route path="/specials" element={<Specials/>} />
        <Route path="/specials/:id" element={<SingleSpecials/>} />
         {/* <Route path="/" element={<h1>home</h1>}/> */}
        </Routes>
        </div>
    )
}