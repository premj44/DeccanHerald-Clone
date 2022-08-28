import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Registered() {

    return (
        <>

            <Box mt='25px'>

               <Link to='/'><Image m='auto' w={'180px'} src="https://www.deccanherald.com/sites/dh/themes/deccanherald/images/logo/DH_logo.png" /></Link>

                <Text letterSpacing={'0px'} m='25px' fontWeight={'semibold'} fontSize='3xl'>You are all set!</Text>
                <Text letterSpacing={'1px'} fontWeight={'semibold'} fontSize='xl'>Thank you for subscribing to <span style={{color:"#3ea3bd"}}>Deccan Herald </span>Newsletters.</Text>
                <Text m='5px'>You will start receiving the newsletter, as per the frequency of the selected newsletter.</Text>
            </Box>

        </>
    )
}