import { Box, Flex, GridItem, HStack, ListItem, UnorderedList, Text, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../App.css"


export default function Sportsdh() {

    return (
        <>

            <Box mt='50px' ml='25px' display='flex' >
                <Flex gap='780px' textDecoration='underline'>
                    <Box w='30px' h='8px' bg='#7dbf85'></Box>
                    <Box fontSize='12px' color='#128296' fontWeight='bold'>VIEW ALL</Box>
                </Flex>

                <Flex mt='7px' gap='290px' textDecoration='underline'>
                    <Box w='30px' h='8px' ml='22px' bg='#9f7fbb'></Box>
                </Flex>
            </Box>

            <Flex gap='811px' ml='25px'>
                <Heading size='md' cursor={"pointer"}>SPORTS</Heading>
                <Heading size='md' >DH PICKS</Heading>
            </Flex>

            <HStack spacing='24px' p='25px' >

                <Box textAlign='left' bg='#eff4f4' p='30px' w='450px'>

                    <Flex gap="15" cursor={"pointer"}>
                        <Image  w='152px' p='5px'
                            src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/pro-kabaddi-ians-1139496-1661500299.jpg?itok=JNyqvTFl'/>
                        <Text className="listitem" fontWeight={"semibold"}> Pro Kabaddi League to welcome back fans as new season begins on October 7</Text>
                    </Flex>
                    <Text position='absolute' mt='-30px' ml='168px' fontSize='12px'>45 min ago</Text>

                    <Flex gap="25"  cursor={"pointer"}>
                        <Image w='152px' p='5px' mt='20px'
                            src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/benzema-afp-1139475-1661495665.jpg?itok=3Nz9CKXP' />
                        <Text className="listitem" mt='25px' fontWeight={"semibold"}>Karim Benzema beats De Bruyne, Courtois, wins UEFA Men's Player of the Year</Text>
                    </Flex>
                    <Text position='absolute' mt='-30px' ml='178px' fontSize='12px'>2 hrs ago</Text>

                </Box>

                <Box textAlign='left' bg='#eff4f4' p='15px' w='400px'>
                    <Box spacing='5px' cursor={"pointer"}>
                        <Flex gap="25" m='15px'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/satwiksairaj-rankireddy-and-chirag-shetty-ap-1139454-1661490323.jpg?itok=hfrGwZuH' />
                            <Text className="listitem" fontWeight={"semibold"}>Satwik-Chirag claim India's first men's doubles medal at World Championships</Text>
                        </Flex>
                        <Flex gap="25" m='15px'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/clipboard-12-1139341-1661450213.jpg?itok=awm8EYTJ' />
                            <Text className="listitem" fontWeight={"semibold"}>Ashish Ballal hits out at his exclusion from Hockey Karnataka electoral college</Text>
                        </Flex>

                        <Flex gap="25" m='15px'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/serena-williams-reuters-1139382-1661449826.jpg?itok=nSFfzHUQ' />
                            <Text className="listitem" fontWeight={"semibold"}>Serena Williams to begin US Open against Danka Kovinic</Text>
                        </Flex>
                    </Box>

                </Box>

                <GridItem  bg='#eff4f4' w='400px' h='100%' p='25px' textAlign='left'>
                    <UnorderedList >
                        <ListItem className="listitem" mt='10px'>Phogat 'murder': 'Curlies' restaurant at Goa's Anjuna beach back in limelight</ListItem>
                        <ListItem className="listitem" mt='10px' >'Revadi culture' exists because poverty exists</ListItem>
                        <ListItem className="listitem" mt='10px'>Goa police arrest two men for 'murder' of BJP leader Sonali Phogat</ListItem>
                        <ListItem className="listitem" mt='10px'>Twitter becoming a company my biggest regret: Jack Dorsey</ListItem>
                        <ListItem className="listitem" mt='10px'>India must rise out of the potholes</ListItem>
                    </UnorderedList>
                </GridItem >
            </HStack>
        </>
    )
}