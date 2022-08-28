import { Box, HStack, Text, Image, Flex, Heading,SimpleGrid } from "@chakra-ui/react";
import "../App.css"

export default function Business() {



    return (
        <>
            <Box mt='50px' ml='25px' display='flex' >
                <Flex gap='780px' textDecoration='underline'>
                    <Box w='30px' h='8px' bg='#128296'></Box>
                    <Box fontSize='12px' color='#128296' fontWeight='bold'>VIEW ALL</Box>
                </Flex>
               
                <Flex mt='7px' gap='290px' textDecoration='underline'>
                    <Box w='30px' h='8px' ml='28px' bg='#90665e'></Box>
                    <Box fontSize='12px' color='#128296' fontWeight='bold'>VIEW ALL</Box>
                </Flex>
            </Box>

            <Flex gap='800px' ml='25px'>
            <Heading size='md' >BUSINESS</Heading>
            <Heading size='md' >OPINION</Heading>
            </Flex>
            <HStack spacing='24px' p='25px' >
            
                <Box textAlign='left' bg='#eff4f4' h='250px'>
                    <Image w='600px' h='180px' 
                        src='https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/08/26/elon-musk-reuters-1139431-1661461617.jpg?itok=aAVMehlB' />
                    <Box bg='#eff4f4' >
                        <Text className="listitem" fontWeight='bold' color='black' >Elon Musk gets limited access to Twitter data</Text>
                        <Text fontWeight='bold' fontSize='12px' color='gray'>8 mins ago</Text>
                    </Box>
                </Box>


                <Box textAlign='left' bg='#eff4f4' p='12px'>

                    <Flex gap="15">
                        <Image w='162px' p='5px'
                            src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/jack-dorsey-reuters-1139428-1661459837.jpg?itok=uHTVHq0N' />
                        <Text className="listitem" fontWeight={"semibold"}> Twitter becoming a company my biggest regret: Jack Dorsey</Text>
                    </Flex>
                    <Text position='absolute' mt='-60px' ml='179px' fontSize='12px'>38 min ago</Text>

                    <Flex gap="25"  >
                        <Image w='162px' p='5px'
                            src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/wall-street-reuters-1139426-1661458325.jpg?itok=OFXRoHqn' />
                        <Text className="listitem" mt='25px' fontWeight={"semibold"}>Nasdaq ends sharply up, fueled by Nvidia and Amazon...</Text>
                    </Flex>
                    <Text position='absolute' mt='-40px' ml='190px' fontSize='12px'>an hour ago</Text>

                </Box>

                <Box textAlign='left' bg='#eff4f4' p='5px'>
                    <Box spacing='5px' >
                        <Flex gap="25" m='15px'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/potholes-dh-1139374-1661448421.jpg?itok=7KK2tHNi' />
                            <Text className="listitem" fontWeight={"semibold"}>India must rise out of the potholes</Text>
                        </Flex>
                        <Flex gap="25" m='15px'>
                            <Image
                                src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/26/afghan-women-afp-3-1139370-1661460015.jpg?itok=uynOb1x_' />
                            <Text className="listitem" fontWeight={"semibold"}> Why does India have to play the US game in Afghanistan?</Text>
                        </Flex>

                        <Flex gap="25" m='15px'>
                            <Image w='85px'
                                src='https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/25/freebie-dh-1139367-1661449672.jpg?itok=RN4i77wB' />
                            <Text className="listitem" fontWeight={"semibold"}>There is ‘revadi culture’ because there’s poverty</Text>
                        </Flex>
                    </Box>

                </Box>
               
            </HStack>
            
        </>
    )
}