
import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"

export default function PointBlank() {

    return (
        <>
            <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                <Flex gap='1130px' textDecoration='underline'>
                    <Box w='34px' h='8px' bg='#ee9e18'></Box>
                    <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
                </Flex>
                <Heading mb='15px' size='md' textAlign='left'>POINT BLANK</Heading>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='800px' bg='white' textAlign='left'>
                        <Flex height='100%'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/27/dead-fish-1139650-1661544901.jpg?itok=SrjYUkAF' />
                            <Center className="listitem" bg='#ee9e18' color='white' p='20px' fontSize='25px' >‘Stop sewage inflow, watch fish thrive’
                            </Center>
                        </Flex>
                        <Text mt='-80px' color='white' ml='475px' fontSize='12px'>27st Aug 2022</Text>
                    </GridItem >

                    <GridItem w='400px' h='260px' bg='white' >
                    
                        <Box  p='10px' textAlign='left' >
                        <Center className="listitem" color='#ee9e18' p='20px' fontSize='32px' >Needed: Standard signage
                            </Center>
                            <Text fontWeight='bold' fontSize='12px' ml='25px' color='#ee9e18'>7th Aug 2022</Text>
                        </Box>
                    </GridItem >

                    <GridItem w='800px' bg='white' >
                        <Box gap='15px' display='flex' >
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/27/dead-fish-dh-1139649-1661580825.jpg?itok=nlGz_TGh' />
                                <Text className="listitem" fontWeight={"semibold"}>Bengaluru: Refreshed lakes, dying fish
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>27th Aug 2022</Text>
                            </Box>
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/20/cyclist-g64318da8f1920-1-1137776-1661003079.jpg?itok=MYiyTMan' />
                                <Text className="listitem" fontWeight={"semibold"}>Cycling: Don't lose track
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>20th Aug 2022</Text>

                            </Box>
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/20/silhouette-g9c571638a1920-1137777-1661002182.jpg?itok=mjGOv9Ak' />
                                <Text className="listitem" fontWeight={"semibold"}>Dedicated, safe lanes, parking lots must for riding boost in Bengaluru
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>20th Aug 2022</Text>
                            </Box>
                        </Box>
                    </GridItem >


                </Grid>
            </Box>
        </>
    )
}