import Navbar from "../Components/Navbar";
import EastAndNorth from "../National/EastAndNorth";
import NorthCentral from "../National/NorthCentral";
import Politics from "../National/Politics";
import South from "../National/South";
import West from "../National/West";

export default function National(){

    return(
        <div>
            <Navbar/>
            <Politics/>
            <NorthCentral/>
            <EastAndNorth/>
            <South/>
            <West/>
        </div>
    )
}