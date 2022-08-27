import { Image, Box, Text, Flex, Grid, GridItem, UnorderedList, ListItem,Heading } from "@chakra-ui/react";
import "../App.css"


export default function Politics() {

    return (
        <>

            <Flex mt='75px' gap='1130px' textDecoration='underline' >
                <Box ml='32px' w='34px' h='8px' bg='#0d70b9'></Box>
                <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
            </Flex>
            <Heading ml={'30px'}  size='md' textAlign='left'>POLITICS</Heading>

            <Box bg='#eff4f4' p='35px' cursor={"pointer"} textAlign='left'>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <GridItem w='400px' bg='white' width='100%' h='100%'  >
                        <Image w='100%' h='74%'
                            src='https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/08/27/kejriwal-3-1139730-1661540008.jpg?itok=oNiV1L0y' />
                        <Box h='100%' bg='#eff4f4' >
                            <Text className="listitem" fontWeight='bold' color='black' >Arvind Kejriwal intensifies Gujarat campaign amid crisis in Delhi</Text>
                            <Text fontWeight='bold' ml='-248px' fontSize='12px' color='gray'>24th Aug 2022</Text>
                        </Box>
                    </GridItem >

                    <GridItem bg='blue.500' bgColor='white'>
                        <Box spacing='5px' w='100%' h='100%' >
                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/27/bilkis-bano-1139732-1661540003.jpg?itok=YdbMm4Ui' />
                                <Text className="listitem" fontWeight={"semibold"}>Some BJP leaders come out in support of Bilkis Bano, say release of convicts wrong
                                </Text>
                            </Flex>

                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/azad-1139705-1661536628.jpg?itok=K5zHLl5s' />
                                <Text className="listitem" fontWeight={"semibold"}>Congress leaders slam Ghulam Nabi Azad for 'betrayal'
                                </Text>
                            </Flex>

                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/untitled-design-10-1139713-1661537552.jpg?itok=G42ldW7I' />
                                <Text className="listitem" fontWeight={"semibold"}>Intention wasn't to point out faults, we have to look into it
                                </Text>
                            </Flex>
                        </Box>
                    </GridItem >

                    <GridItem bg='#eff4f4' w='400px' h='250' ></GridItem >


                    <GridItem bg='white'>
                        <Box spacing='5px' w='100%' h='100%' >
                            <Flex gap="15" m='15px'>
                                <Image w='160px' p='5px'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/supreme-court-getty-1139676-1661534136.png?itok=mIAk960o' />
                                <Text className="listitem" fontWeight={"semibold"}> Freebies may push state towards imminent bankruptcy: SC</Text>
                            </Flex>
                            <Text mt='-50px' ml='195px' fontSize='12px'>12 min ago</Text>

                            <Flex gap="25" m='15px'>
                                <Image w='160px' mt='25px'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/ghulam-nabi-rahul-sonia-pti-1139655-1661531426.png?itok=t3fWKLGi' />
                                <Text className="listitem" mt='25px' fontWeight={"semibold"}>In Azad's scathing letter, Sonia Gandhi also under attack
                                </Text>
                            </Flex>
                            <Text mt='-40px' ml='200px' fontSize='12px'>1 hr ago</Text>
                        </Box>
                    </GridItem >


                    <GridItem w='100%' h='100%' bg='white' p='15px' >
                        <UnorderedList >
                            <ListItem className="listitem" mt='10px'>Congress should forget 'Bharat jodo', focus on 'parivar chhodo'</ListItem>
                            <ListItem className="listitem" mt='10px' >Exit of Azad leaves G-23 change seekers in disarray</ListItem>
                            <ListItem className="listitem" mt='10px'>Cong shouldn't have a puppet prez: Prithviraj Chavan</ListItem>
                            <ListItem className="listitem" mt='10px'>Operation Lotus a danger to democracy: Shiv Sena</ListItem>
                            <ListItem className="listitem" mt='10px'>How much national parties earned from unknown sources?</ListItem>
                        </UnorderedList>
                    </GridItem >

                    <GridItem w='400px' bg='white' >

                        <Box spacing='5px' >
                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/himanta-pti-1-1139595-1661518765.jpg?itok=uNJUpttX' />
                                <Text className="listitem" fontWeight={"semibold"}>Azad's resignation letter similar to mine: Himanta

                                </Text>
                            </Flex>
                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/pti7202019000124a-1-1139315-1661443603-1139483-1661497897-1139580-1661515026.jpg?itok=Ty0eDqtR' />
                                <Text className="listitem" fontWeight={"semibold"}> RJD to sue media that linked Tejashwi to Gurugram mall
                                    RJD to sue media that linked Tejashwi to Gurugram...
                                </Text>
                            </Flex>

                            <Flex gap="25" m='15px'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/soren-1139575-1661534112.jpg?itok=sL2tanUx' />
                                <Text className="listitem" fontWeight={"semibold"}>Explained: What is happening in Jharkhand?
                                    Explained: What is happening in Jharkhand?
                                </Text>
                            </Flex>
                        </Box>

                    </GridItem >

                </Grid>
            </Box>


        </>
    )
}