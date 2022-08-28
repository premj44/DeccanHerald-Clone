import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"

export default function EastAndNorth() {

    return (
        <>
            <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                <Flex gap='1130px' textDecoration='underline'>
                    <Box w='34px' h='8px' bg='#0d70b9'></Box>
                    <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
                </Flex>
                <Heading mb='15px' size='md' textAlign='left'>EAST AND NORTHEAST</Heading>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='800px' bg='white' textAlign='left'>
                        <Flex height='100%'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/26/download-8-1103289-1650719308-1139697-1661535487.png?itok=4cj1KKlR' />
                            <Center className="listitem" bg='#0d70b9' color='white' p='20px' fontSize='25px' >Netaji’s grandnephew to launch ‘movement’ to bring his ‘remains’ to India
                            </Center>
                        </Flex>
                        <Text mt='-80px' color='white' ml='475px' fontSize='12px'>2 hrs ago</Text>
                    </GridItem >

                    <GridItem w='400px' h='100%' bg='white' >
                        <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/arrest-istock-934238-1609536102-1-1139596-1661518853.jpg?itok=48_tiKA3' />
                        <Box h='100%' p='10px' textAlign='left' >
                            <Text className="listitem" fontWeight='bold' color='black' >Another AQIS member with links to Ansarul Bangla arrested
                            </Text>
                            <Text fontWeight='bold' fontSize='12px' color='gray'>6:30 pm</Text>
                        </Box>
                    </GridItem >

                    <GridItem w='800px' bg='white' >
                        <Box gap='15px' display='flex' >
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/soren-pti-1139444-1661486917-1139684-1661537030.jpg?itok=LvZoJKr_' />
                                <Text className="listitem" fontWeight={"semibold"}>'Office of Profit': Soren to lose Assembly membership; may quit as Jharkhand CM
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>an hour ago</Text>
                            </Box>
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/train-1139656-1661531527.jpg?itok=VRtghUz9' />
                                <Text className="listitem" fontWeight={"semibold"}>Nagaland gets second railway station after 100 years
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>3 hrs ago</Text>

                            </Box>
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/tejashwi-pti-1139622-1661534237.jpg?itok=wJSzfxmI' />
                                <Text className="listitem" fontWeight={"semibold"}>Old land-for-jobs scam may come back and haunt Tejashwi Yadav: Report
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>2 hrs ago</Text>
                            </Box>
                        </Box>
                    </GridItem >

                    <GridItem w='400px' h='100%' bg='white' >
                        <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/himatna-pti-1139586-1661516740.jpg?itok=7VBVBaj3' />
                        <Box h='100%' p='10px' textAlign='left' >
                            <Text className="listitem" fontWeight={"semibold"} color='black' >Delhi merely a state, no comparison with Assam: Himanta Delhi merely a state, no comparison with Assam: Himanta...
                            </Text>
                            <Text fontWeight='bold' fontSize='12px' color='gray'>5:55 pm</Text>
                        </Box>
                    </GridItem >

                </Grid>
            </Box>
        </>
    )
}