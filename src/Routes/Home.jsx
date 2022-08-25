import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Button, Box, Stack, Text, Flex, Grid, GridItem, UnorderedList, ListItem,Heading,Center } from "@chakra-ui/react";
import "../App.css"


export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3da128da75bb4e819bb876090635ca8f")
            .then((res) => {
                console.log(res.data)
                setNews(res.data.articles)
            })

    }, []);

    console.log("news", news);

    return (
        <>
            <Navbar/>
            <Box>
                
                {/* ------------------------TOP HEADLINES------------------------------------- */}


                <Box bg='#eff4f4' p='35px' cursor={"pointer"}>
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <GridItem w='400px' bg='white' width='100%' h='100%'  >
                            <Image w='100%' h='74%'
                                src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/24/virat-afp-1138940-1661351843.jpg?itok=tOUIyJPH' />
                            <Box h='100%' bg='#eff4f4' >
                                <Text fontWeight='bold' color='black' >'I know where my game stands':,Virat Kohli...</Text>
                                <Text fontWeight='bold' ml='-248px' fontSize='12px' color='gray'>24th Aug 2022</Text>
                            </Box>
                        </GridItem >

                        <GridItem bg='blue.500' bgColor='white'>
                            <Box spacing='5px' w='100%' h='100%' >
                                <Flex gap="25" m='15px'>
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/c-t-ravi-dh-1139329-1661445450.jpg?itok=3CGSZwZB' />
                                    <Text fontWeight={"semibold"}> Will liberals support separatists, radical Islamists?: C T Ravi</Text>
                                </Flex>

                                <Flex gap="25" m='15px'>
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/araga-jnanendra-dh-1139325-1661445087.jpg?itok=qyQF3Y5C' />
                                    <Text fontWeight={"semibold"}>Rural areas in Karnataka excluded from ambit of land-grab courts
                                    </Text>
                                </Flex>

                                <Flex gap="25" m='15px'>
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/rafa-afp-1139346-1661446501.jpg?itok=TvN5TrNW' />
                                    <Text fontWeight={"semibold"}>Nadal eyes 23rd major as Djokovic misses out on US Open
                                    </Text>
                                </Flex>
                            </Box>
                        </GridItem >

                        <GridItem bg='#eff4f4' w='400px' h='250' ></GridItem >


                        <GridItem bg='white'>
                            <Box spacing='5px' w='100%' h='100%' >
                                <Flex gap="15" m='15px'>
                                    <Image w='160px' p='5px'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/25/rain-pti-1139393-1661451847.jpg?itok=Il2zcJle' />
                                    <Text fontWeight={"semibold"}> Southwest monsoon likely to start withdrawing in first...</Text>
                                </Flex>
                                <Text mt='-50px' ml='155px' fontSize='12px'>44 min ago</Text>

                                <Flex gap="25" m='15px'>
                                    <Image w='160px' mt='25px'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/25/anil-kumble-pti-1139351-1661447398.jpg?itok=8p9_ALA8' />
                                    <Text mt='25px' fontWeight={"semibold"}>Punjab Kings decide to not renew head coach Anil Kumble's contract...
                                    </Text>
                                </Flex>
                                <Text mt='-40px' ml='155px' fontSize='12px'>2 hrs ago</Text>
                            </Box>
                        </GridItem >


                        <GridItem w='100%' h='100%' bg='white' p='15px' >
                            <UnorderedList >
                                <ListItem mt='10px'>Adani's takeover of NDTV worries journalists</ListItem>
                                <ListItem mt='10px' >Two Indian aircraft carriers to sail in Indian Ocean from 2023</ListItem>
                                <ListItem mt='10px'>Adani bid fought by NDTV amid concerns over press freedom</ListItem>
                                <ListItem mt='10px'>'Only yes means yes': Spain tightens rape law</ListItem>
                                <ListItem mt='10px'>Phogat 'murder': 'Curlies' restaurant at Goa's Anjuna beach back in limelight</ListItem>
                            </UnorderedList>
                        </GridItem >

                        <GridItem w='400px' bg='white' >

                            <Box spacing='5px' >
                                <Flex gap="25" m='15px'>
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/bjp-reut-1139336-1661445147.jpg?itok=-C0T5p6N' />
                                    <Text fontWeight={"semibold"}>'Lotus laundry': JD(U)'s new epithet for ex-ally BJP</Text>
                                </Flex>
                                <Flex gap="25" m='15px'>
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/istock-502289164-1-1065421-1640643290-1119213-1655547182-1119902-1655760284-1139288-1661440634.jpg?itok=hnqUOJB6' />
                                    <Text fontWeight={"semibold"}> Affordable 5G services to be rolled out in India by October 12: Centre
                                    </Text>
                                </Flex>

                                <Flex gap="25" m='15px'>
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/pti7202019000124a-1-1139315-1661443603.jpg?itok=Og_1w2sl' />
                                    <Text fontWeight={"semibold"}>BJP leaders in Delhi don't understand spirit of Bihar, intimidation won't work: Tejashwi
                                    </Text>
                                </Flex>
                            </Box>

                        </GridItem >

                    </Grid>
                </Box>
                {/* ------------------------TOP HEADLINES COMPLETED------------------------------------- */}


                {/* ------------------------BENGALURU------------------------------------- */}

                <Box bg='#eff4f4' p='50px' mt='75px'>
                    <Flex gap='1130px' textDecoration='underline'>
                        <Box  w='34px' h='8px' bg='#68a923'></Box>
                        <Box fontSize='14px'>VIEW ALL</Box>
                    </Flex>
                    <Heading mb='15px' size='md' textAlign='left'>BENGALURU</Heading>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem w='800px' bg='white'  textAlign='left'>
                            <Flex height='100%'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/26/pothole-dh-3-1139420-1661457270.jpg?itok=5_37uiwP' />
                                <Center bg='#68a923' color='white' p='20px' fontSize='25px' >Complaints flood BBMP as Bengaluru's infamous potholes return
                                </Center>
                            </Flex>
                            <Text mt='-80px' color='white' ml='475px' fontSize='12px'>26 mins ago</Text>
                        </GridItem >

                        <GridItem w='400px' h='100%' bg='white' >
                            <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/supreme-court-pti-1139395-1661453242.jpg?itok=W6clOnmC' />
                            <Box h='100%' p='10px'  textAlign='left' >
                                <Text fontWeight='bold' color='black' >Remove BDA commissioner for flouting our orders: SC
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>2 hrs ago</Text>
                            </Box>
                        </GridItem >

                        <GridItem w='800px' bg='white' >
                            <Box gap='15px' display='flex' >
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/voter-dh-1139415-1661456988.jpg?itok=Pcf0v_TK' />
                                    <Text fontWeight={"semibold"}>Over 79 lakh voters listed in BBMP’s draft electoral rolls
                                    </Text>
                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/karnataka-hc-dh-1139414-1661456595.jpg?itok=PGEQW1AR' />
                                    <Text fontWeight={"semibold"}>Ward reservation: HC notice to Karnataka govt, BBMP...
                                    </Text>
                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/dog-istock-1-1139396-1661453469.jpg?itok=U2W-n0D6' />
                                    <Text fontWeight={"semibold"}>Complaint filed over alleged poisoning of stray dogs in Bengaluru
                                    </Text>
                                </Box>
                            </Box>
                        </GridItem >

                        <GridItem w='400px' bg='#eff4f4'  ></GridItem >

                    </Grid>
                </Box>
        {/* ------------------------BENGALURU COMPLETED------------------------------------- */}

      {/* ------------------------BUSINESS AND OPINION------------------------------------- */}

      <Box bg='white' mt='35px' mb="10px">
                    <Grid templateColumns="repeat(3,1fr)" m={"auto"} gap="5px" w="90%" textAlign="left" >
                        {news.map((item) => (
                            <Box value={item.id} name={item.id} key={item.id} p="10px" rounded="md" bg="white" >
                                <Image className="mainbox" w="97%" h="190px" src={item.urlToImage} />

                                <Flex fontSize="xl" color={"gray.800"} fontWeight="500">
                                    <Text className="mainbox" >{item.title}</Text>
                                </Flex>

                                <Flex gap="2">
                                    <Text color={"gray.600"} fontWeight={"semibold"}>{item.post}</Text>
                                    <Text className="mainbox" color={"#00baab"} fontWeight={"semibold"}>{item.description}</Text>
                                </Flex>


                            </Box>

                        ))}

                    </Grid>

                </Box>






            </Box>

        </>
    )
}

// item.urlToImage
// item.title
// item.content