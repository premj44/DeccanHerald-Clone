

import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"

export default function SundaySpotlight() {

    return (
        <>
            <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                <Flex gap='1130px' textDecoration='underline'>
                    <Box w='34px' h='8px' bg='#ee9e18'></Box>
                    <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
                </Flex>
                <Heading mb='15px' size='md' textAlign='left'>SUNDAY SPOTLIGHT</Heading>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='800px'  bg='white' textAlign='left'>
                        <Flex height='300px'>
                            <Image width={'440px'}
                                src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/21/file7a6ny3m714i1ayjps2ll-1137877-1661066924.jpg?itok=YuWz5iVN' />
                            <Center className="listitem" bg='#ee9e18' color='white' p='20px' fontSize='30px' fontWeight={'bold'} >The compounding cost of polarisation
                            </Center>
                        </Flex>
                        <Text mt='-100px' color='white' ml='465px' fontSize='12px'>21st Aug 2022</Text>
                    </GridItem >

                    

                        <Box textAlign='left' bg='#eff4f4' p='5px'>
                            <Box spacing='5px' >
                                <Flex gap="25" m='15px' >
                                    <Image
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/taj-afp-1139512-1661504810.jpg?itok=MhOpkVJI' />
                                    <Text className="listitem" fontWeight={"semibold"}>Mumbai police receive message about avoiding `Somalia-type' attack
                                    </Text>
                                </Flex>
                                <Flex gap="25" m='15px'>
                                    <Image w='82px'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/large/public/articleimages/2022/08/27/whatsapp-image-2022-08-26-at-73422-pm-1139738-1661540296.jpg?itok=ggfgCznd' />
                                    <Text className="listitem" fontWeight={"semibold"}> Trains to Bengaluru airport: SWR reaches out to companies for information
                                    </Text>
                                </Flex>

                                <Flex gap="25" m='15px'>
                                    <Image w='85px'
                                        src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/07/school-dh-1133868-1659851352.jpg?itok=f4CJvvJX' />
                                    <Text className="listitem" fontWeight={"semibold"}>NCF and the illusion of curriculum choice
                                    </Text>
                                </Flex>
                            </Box>

                        </Box>
                  


                </Grid>
            </Box>
        </>
    )
}