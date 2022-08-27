import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import EastAndNorth from "../National/EastAndNorth";
import NorthCentral from "../National/NorthCentral";
import Politics from "../National/Politics";
import South from "../National/South";
import West from "../National/West";
import YouMayLikeNational from "../National/YouMayLikeNational";
import "../App.css"
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    HStack,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

export default function National() {

    return (
        <div>
            <Navbar />

            <Box mt='25px' ml='-1000px' fontSize={'13px'}>
                <Breadcrumb>
                    <BreadcrumbItem color='#15a2b8'>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to='/national'>National</Link>
                    </BreadcrumbItem>
                </Breadcrumb>

               
            </Box>

            <HStack  ml='114px' spacing='25px' fontSize={'12px'} >
                    <Box fontWeight='bold' fontSize={'30px'} color='white' w='170px' p='5px'  bg='#0d70b9'>
                        National
                    </Box>
                    <Box className="listitem">
                        POLITICS
                    </Box>
                    <Box  className="listitem">
                        INDIA@75
                    </Box>
                    <Box   className="listitem">
                        NORTH AND CENTRAL
                    </Box>
                    <Box className="listitem">
                        EAST AND NORTHEAST
                    </Box>
                    <Box  className="listitem">
                        SOUTH
                    </Box>
                    <Box className="listitem">
                        WEST
                    </Box>
                </HStack>

            <Politics />
            <NorthCentral />
            <EastAndNorth />
            <South />
            <West />
            <YouMayLikeNational />
            <Footer />
        </div>
    )
}