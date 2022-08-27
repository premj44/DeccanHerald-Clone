import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EastAndNorth from "../National/EastAndNorth";
import NorthCentral from "../National/NorthCentral";
import Politics from "../National/Politics";
import South from "../National/South";
import West from "../National/West";
import YouMayLikeNational from "../National/YouMayLikeNational";

export default function National(){

    return(
        <div>
            <Navbar/>
            <Politics/>
            <NorthCentral/>
            <EastAndNorth/>
            <South/>
            <West/>
            <YouMayLikeNational/>
            <Footer/>
        </div>
    )
}