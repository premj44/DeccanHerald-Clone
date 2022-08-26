import Navbar from "../Components/Navbar";
import TopHeadlines from "../NewsSection/TopHeadlines";
import Bengaluru from "../NewsSection/Bengaluru";
import Business from "../NewsSection/Business";
import Sportsdh from "../NewsSection/Sportsdh";
import YouMayLike from "../Components/YouMayLike";
import { Box } from "@chakra-ui/react";
import Footer from "../Components/Footer";



export default function Home() {



    return (
        <>
            <Navbar />
            <TopHeadlines />
            <Bengaluru />
            <Business />
            <Sportsdh />
            <YouMayLike/>
            <Footer/>

        </>
    )
}

// item.urlToImage
// item.title
// item.content