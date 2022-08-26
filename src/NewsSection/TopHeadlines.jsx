import { Image,  Box, Text, Flex, Grid, GridItem, UnorderedList, ListItem } from "@chakra-ui/react";
import "../App.css"


export default function TopHeadlines() {

    return (
        <>

            <Box bg='#eff4f4' p='35px' cursor={"pointer"} textAlign='left'>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <GridItem w='400px' bg='white' width='100%' h='100%'  >
                        <Image w='100%' h='74%'
                            src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/24/virat-afp-1138940-1661351843.jpg?itok=tOUIyJPH' />
                        <Box h='100%' bg='#eff4f4' >
                            <Text className="listitem" fontWeight='bold' color='black' >'I know where my game stands':,Virat Kohli...</Text>
                            <Text fontWeight='bold' ml='-248px' fontSize='12px' color='gray'>24th Aug 2022</Text>
                        </Box>
                    </GridItem >

                    <GridItem bg='blue.500' bgColor='white'>
                        <Box spacing='5px' w='100%' h='100%' >
                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/c-t-ravi-dh-1139329-1661445450.jpg?itok=3CGSZwZB' />
                                <Text className="listitem" fontWeight={"semibold"}> Will liberals support separatists, radical Islamists?: C T Ravi</Text>
                            </Flex>

                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/araga-jnanendra-dh-1139325-1661445087.jpg?itok=qyQF3Y5C' />
                                <Text className="listitem" fontWeight={"semibold"}>Rural areas in Karnataka excluded from ambit of land-grab courts
                                </Text>
                            </Flex>

                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/rafa-afp-1139346-1661446501.jpg?itok=TvN5TrNW' />
                                <Text className="listitem" fontWeight={"semibold"}>Nadal eyes 23rd major as Djokovic misses out on US Open
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
                                <Text className="listitem" fontWeight={"semibold"}> Southwest monsoon likely to start withdrawing in first...</Text>
                            </Flex>
                            <Text mt='-50px' ml='195px' fontSize='12px'>44 min ago</Text>

                            <Flex gap="25" m='15px'>
                                <Image w='160px' mt='25px'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/25/anil-kumble-pti-1139351-1661447398.jpg?itok=8p9_ALA8' />
                                <Text className="listitem" mt='25px' fontWeight={"semibold"}>Punjab Kings decide to not renew head coach Anil Kumble's contract...
                                </Text>
                            </Flex>
                            <Text mt='-40px' ml='200px' fontSize='12px'>2 hrs ago</Text>
                        </Box>
                    </GridItem >


                    <GridItem w='100%' h='100%' bg='white' p='15px' >
                        <UnorderedList >
                            <ListItem className="listitem" mt='10px'>Adani's takeover of NDTV worries journalists</ListItem>
                            <ListItem className="listitem" mt='10px' >Two Indian aircraft carriers to sail in Indian Ocean from 2023</ListItem>
                            <ListItem className="listitem" mt='10px'>Adani bid fought by NDTV amid concerns over press freedom</ListItem>
                            <ListItem className="listitem" mt='10px'>'Only yes means yes': Spain tightens rape law</ListItem>
                            <ListItem className="listitem" mt='10px'>Phogat 'murder': 'Curlies' restaurant at Goa's Anjuna beach back in limelight</ListItem>
                        </UnorderedList>
                    </GridItem >

                    <GridItem w='400px' bg='white' >

                        <Box spacing='5px' >
                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/bjp-reut-1139336-1661445147.jpg?itok=-C0T5p6N' />
                                <Text className="listitem" fontWeight={"semibold"}>'Lotus laundry': JD(U)'s new epithet for ex-ally BJP</Text>
                            </Flex>
                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/istock-502289164-1-1065421-1640643290-1119213-1655547182-1119902-1655760284-1139288-1661440634.jpg?itok=hnqUOJB6' />
                                <Text className="listitem" fontWeight={"semibold"}> Affordable 5G services to be rolled out in India by October 12: Centre
                                </Text>
                            </Flex>

                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/pti7202019000124a-1-1139315-1661443603.jpg?itok=Og_1w2sl' />
                                <Text className="listitem" fontWeight={"semibold"}>BJP leaders in Delhi don't understand spirit of Bihar, intimidation won't work: Tejashwi
                                </Text>
                            </Flex>
                        </Box>

                    </GridItem >

                </Grid>
            </Box>

        </>
    )
}