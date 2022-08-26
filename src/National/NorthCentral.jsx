import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"

export default function NorthCentral(){

    return(
        <>
         <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                    <Flex gap='1130px' textDecoration='underline'>
                        <Box w='34px' h='8px' bg='#0d70b9'></Box>
                        <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
                    </Flex>
                    <Heading mb='15px' size='md' textAlign='left'>NORTH AND CENTRAL</Heading>
                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                        <GridItem w='800px' bg='white' textAlign='left'>
                            <Flex height='100%'>
                                <Image
                                    src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/26/soren-1139575-1661534112-1139703-1661536554.jpg?itok=g33nNUvP'/>
                                <Center className="listitem" bg='#0d70b9' color='white' p='20px' fontSize='25px' >Complaints flood BBMP as Bengaluru's infamous potholes return
                                </Center>
                            </Flex>
                            <Text mt='-80px' color='white' ml='475px' fontSize='12px'>2 hrs ago</Text>
                        </GridItem >

                        <GridItem w='400px' h='100%' bg='white' >
                            <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/pti08262022000176b-1-1139591-1661517715.jpg?itok=ErXh6vq-' />
                            <Box h='100%' p='10px' textAlign='left' >
                                <Text className="listitem" fontWeight='bold' color='black' >Remove BDA commissioner for flouting our orders: SC
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>6:11 pm</Text>
                            </Box>
                        </GridItem >

                        <GridItem w='800px' bg='white' >
                            <Box gap='15px' display='flex' >
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/yogi-adityanath-pti-2-1139625-1661535265.jpg?itok=vlHvzrze' />
                                    <Text className="listitem" fontWeight={"semibold"}>SC rejects plea against denial to sanction Adityanath’s prosecution in alleged hate speech case
                                    </Text>
                                    <Text fontWeight='bold' fontSize='12px' color='gray'>2 hrs ago</Text>
                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/noida-twin-towers-ians-1139620-1661524705.jpg?itok=TVoOROym' />
                                    <Text className="listitem" fontWeight={"semibold"}>It's like a dream come true: Blaster who will push button to bring down Supertech towers
                                    </Text>
                                    <Text fontWeight='bold' fontSize='12px' color='gray'>8:08 pm</Text>

                                </Box>
                                <Box >
                                    <Image width='100%' height='70%'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/26/gun-pixabay-1139599-1661519477.jpg?itok=R7Ifxnr-' />
                                    <Text className="listitem" fontWeight={"semibold"}>Teen girl shot in Delhi, Delhi Commission for Women seeks action-taken report
                                    </Text>
                                    <Text fontWeight='bold' fontSize='12px' color='gray'>6:41 pm</Text>
                                </Box>
                            </Box>
                        </GridItem >

                        <GridItem w='400px' h='100%' bg='white' >
                            <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/icon-insight-1-1093284-1647859109-1139577-1661514227.jpg?itok=EuYWMuHI'/>
                            <Box h='100%' p='10px' textAlign='left' >
                                <Text className="listitem" fontWeight='bold' color='black' >5,100 trees to be cut in Delhi for highway construction
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>5:13 pm</Text>
                            </Box>
                        </GridItem >

                    </Grid>
                </Box>
        </>
    )
}