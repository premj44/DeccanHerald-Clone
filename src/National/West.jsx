import { Box, HStack, Text, Image, Flex, Heading } from "@chakra-ui/react";
import "../App.css"


export default function West() {

    return (
        <>
            
            <Flex mt='35px' gap='1130px' textDecoration='underline' >
                <Box ml='32px' w='34px' h='8px' bg='#0d70b9'></Box>
                <Box fontSize='14px' color='#0d70b9'>VIEW ALL</Box>
            </Flex>
            <Heading ml={'30px'}  size='md' textAlign='left'>WEST</Heading>

            <HStack spacing='24px' p='24px' bg='#eff4f4' >
                <Box textAlign='left' bg='#eff4f4' h='215px' w='500px' >
                    <Box p={'34px'} bg='#0d70b9' height={'100%'}>
                        <Text  ml='30px' fontSize={'25px'} className="listitem" fontWeight='bold' color='white' >Cong shouldn't have a puppet prez: Prithviraj Chavan</Text>
                        <Text fontWeight='bold' ml='30px'  fontSize='12px' color={"whiteAlpha.800"}>3 hrs ago</Text>
                    </Box>
                </Box>


                <Box textAlign='left' bg='#eff4f4' p='12px'>

                    <Flex gap="15">
                        <Image w='162px' p='5px'
                            src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/anil-deshmukh-dh-1108912-1652437293-1139583-1661516157.png?itok=BGcgXbsJ' />
                        <Text className="listitem" fontWeight={"semibold"}> NCP leader Anil Deshmukh faints in prison, taken to hospital
                        </Text>
                    </Flex>
                    <Text position='absolute' mt='-60px' ml='179px' fontSize='12px'>5:45 pm</Text>

                    <Flex gap="25"  >
                        <Image w='162px' p='5px'
                            src='https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/08/26/sonali-phogat-pti-1139516-1661530284.jpg?itok=JnqkfzTh' />
                        <Text className="listitem" mt='25px' fontWeight={"semibold"}>Associates poisoned Phogat with ‘obnoxious chemicals’ in her drink: Goa IGP
                        </Text>
                    </Flex>
                    <Text position='absolute' mt='-40px' ml='190px' fontSize='12px'>3 hrs ago</Text>

                </Box>

                <Box textAlign='left' bg='#eff4f4' p='5px'>
                    <Box spacing='5px' >
                        <Flex gap="25" m='15px'>
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
            </HStack>
      
        </>
    )
}