import { Image, Box, Text, Flex, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import "../App.css"

export default function SpecialInsight() {

    return (
        <>
            <Box bg='#eff4f4' p='50px' mt='75px' textAlign='left'>
                <Flex gap='1130px' textDecoration='underline'>
                    <Box w='34px' h='8px' bg='#ee9e18'></Box>
                    <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
                </Flex>
                <Heading mb='15px' size='md' textAlign='left'>INSIGHT</Heading>
                <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='800px' bg='white' textAlign='left'>
                        <Flex height='100%'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/08/21/istock-1211689125-1-1018844-1628746015-1044225-1635194041-1044561-1635284732-1085308-1646035930-1137878-1661049601.jpg?itok=rTyiygPO' />
                            <Center className="listitem" bg='#ee9e18' color='white' p='20px' fontSize='25px' >A dark underbelly: Digital loans, real-world extortion
                            </Center>
                        </Flex>
                        <Text mt='-80px' color='white' ml='475px' fontSize='12px'>21st Aug 2022</Text>
                    </GridItem >

                    <GridItem w='400px' h='100%' bg='white' >
                        <Image w='100%' h='70%' src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/07/file7m6rpdiu95kfcsrob8-1133861-1659828196.jpg?itok=S7-I3l5b' />
                        <Box h='100%' p='10px' textAlign='left' >
                            <Text className="listitem" fontWeight='bold' color='black' >Collateral damage: Adivasis caught between police and Naxals
                            </Text>
                            <Text fontWeight='bold' fontSize='12px' color='gray'>7th Aug 2022</Text>
                        </Box>
                    </GridItem >

                    <GridItem w='800px' bg='white' >
                        <Box gap='15px' display='flex' >
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/21/file7jz68coy4ysqhix5ahg-1137864-1661062100.jpg?itok=t2PCF5o1' />
                                <Text className="listitem" fontWeight={"semibold"}>Calls for digital literacy
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>21st Aug 2022</Text>
                            </Box>
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/13/bng17-ways-of-life-03-1-1135879-1660410499.jpg?itok=wlCr3ExC' />
                                <Text className="listitem" fontWeight={"semibold"}>The dream of ‘machine holes’ and robot cleaners
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>13th Aug 2022</Text>

                            </Box>
                            <Box >
                                <Image width='100%' height='70%'
                                    src='https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/08/14/pti12-09-2020000082b-1-1135877-1660447251.jpg?itok=IvKYye9E' />
                                <Text className="listitem" fontWeight={"semibold"}>Shackles of manual scavenging still weigh heavy in free India
                                </Text>
                                <Text fontWeight='bold' fontSize='12px' color='gray'>14th Aug 2022</Text>
                            </Box>
                        </Box>
                    </GridItem >


                </Grid>
            </Box>
        </>
    )
}