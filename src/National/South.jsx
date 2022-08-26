import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"


export default function South(){

    return(
        <>
        <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                    <Flex gap='1130px' textDecoration='underline'>
                        <Box w='34px' h='8px' bg='#0d70b9'></Box>
                        <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
                    </Flex>
                    <Heading mb='15px' size='md' textAlign='left'>SOUTH</Heading>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem w='800px' bg='white' textAlign='left'>
                            <Flex height='100%'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/26/beach-1139648-1661530806.jpg?itok=kHmD4M5M'/>
                                <Center className="listitem" bg='#0d70b9' color='white' p='20px' fontSize='25px' >Andhra Pradesh attempts world record for largest beach cleanup at Vizag
                                </Center>
                            </Flex>
                            <Text mt='-80px' color='white' ml='475px' fontSize='12px'>3 hrs ago</Text>
                        </GridItem >

                        <GridItem w='400px' h='100%' bg='white' >
                            <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/court-1-1138313-1661180885-1139602-1661520273.jpg?itok=eJSwnw18' />
                            <Box h='100%' p='10px' textAlign='left' >
                                <Text className="listitem" fontWeight='bold' color='black' >Kerala High Court orders to close down illegal religious places, prayer halls
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>6:54 pm</Text>
                            </Box>
                        </GridItem >

                        <GridItem w='800px' bg='white' >
                            <Box gap='15px' display='flex' >
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/help-support-istock-1139628-1661526966.png?itok=JAOrOyio' />
                                    <Text className="listitem" fontWeight={"semibold"}>IIT-M alumni launch website to answer all aspirants’ questions, doubts
                                    </Text>
                                    <Text fontWeight='bold' fontSize='12px' color='gray'>8:46 pm</Text>
                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/chennai-airport-pti-1139613-1661522751.jpg?itok=Ew6N239x' />
                                    <Text className="listitem" fontWeight={"semibold"}>Tamil Nadu offers 3.5 times the market value of land for new Chennai airport
                                    </Text>
                                    <Text fontWeight='bold' fontSize='12px' color='gray'>7:35 pm</Text>

                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/kerala-protest-pti-1139605-1661521251.jpg?itok=CHjXPlhD' />
                                    <Text className="listitem" fontWeight={"semibold"}>Kerala High Court directs police to ensure law and order at Vizhinjam port site
                                    </Text>
                                    <Text fontWeight='bold' fontSize='12px' color='gray'>7:10 pm</Text>
                                </Box>
                            </Box>
                        </GridItem >

                        <GridItem w='400px' h='100%' bg='white' >
                            <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/law-istock-1-1138976-1661357654-1139594-1661521937.jpg?itok=hBtVFvZ7'/>
                            <Box h='100%' p='10px' textAlign='left' >
                                <Text className="listitem" fontWeight={"semibold"} color='black' >Quran doesn't say mosque needed in every corner: HC
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>7:22 pm</Text>
                            </Box>
                        </GridItem >

                    </Grid>
                </Box>
        </>
    )
}