import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"


export default function Bengaluru(){

    return(
        <>
        
        <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                    <Flex gap='1130px' textDecoration='underline'>
                        <Box w='34px' h='8px' bg='#68a923'></Box>
                        <Box fontSize='14px'>VIEW ALL</Box>
                    </Flex>
                    <Heading mb='15px' size='md' textAlign='left'>BENGALURU</Heading>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem w='800px' bg='white' textAlign='left'>
                            <Flex height='100%'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/26/pothole-dh-3-1139420-1661457270.jpg?itok=5_37uiwP' />
                                <Center className="listitem" bg='#68a923' color='white' p='20px' fontSize='25px' >Complaints flood BBMP as Bengaluru's infamous potholes return
                                </Center>
                            </Flex>
                            <Text mt='-80px' color='white' ml='475px' fontSize='12px'>26 mins ago</Text>
                        </GridItem >

                        <GridItem w='400px' h='100%' bg='white' >
                            <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/supreme-court-pti-1139395-1661453242.jpg?itok=W6clOnmC' />
                            <Box h='100%' p='10px' textAlign='left' >
                                <Text className="listitem" fontWeight='bold' color='black' >Remove BDA commissioner for flouting our orders: SC
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>2 hrs ago</Text>
                            </Box>
                        </GridItem >

                        <GridItem w='800px' bg='white' >
                            <Box gap='15px' display='flex' >
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/voter-dh-1139415-1661456988.jpg?itok=Pcf0v_TK' />
                                    <Text className="listitem" fontWeight={"semibold"}>Over 79 lakh voters listed in BBMP’s draft electoral rolls
                                    </Text>
                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/karnataka-hc-dh-1139414-1661456595.jpg?itok=PGEQW1AR' />
                                    <Text className="listitem" fontWeight={"semibold"}>Ward reservation: HC notice to Karnataka govt, BBMP...
                                    </Text>
                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/dog-istock-1-1139396-1661453469.jpg?itok=U2W-n0D6' />
                                    <Text className="listitem" fontWeight={"semibold"}>Complaint filed over alleged poisoning of stray dogs in Bengaluru
                                    </Text>
                                </Box>
                            </Box>
                        </GridItem >

                        <GridItem w='400px' bg='#eff4f4'  ></GridItem >

                    </Grid>
                </Box>
        
        </>
    )
}